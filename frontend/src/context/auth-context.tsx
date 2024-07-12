import { AuthState, User, UserRegis } from "src/types/users-types";
import { ReactNode, createContext, useState, useEffect } from "react";
import { useMutation } from "react-query";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase-config";
import { queryClient } from "@lib/settings/query-settings";
import { useToast } from "@components/ui/use-toast";

interface AuthContextProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  user: User | null;
  authState: AuthState;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => any;
  logout: () => Promise<void>;
  register: ({ regisData }: { regisData: UserRegis }) => any;
  isLoading: boolean;
  getUserId: () => string | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  authState: AuthState.NotAuthenticated,
  login: async () => { },
  logout: async () => { },
  register: async () => { },
  isLoading: false,
  getUserId: () => null, 
});

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<AuthState>(
    AuthState.NotAuthenticated
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const fetchUserData = async (uid?: string) => {
    if (!uid || user) return;
    try {
      setIsLoading(true);
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        setUser(userData);
        setAuthState(AuthState.Authenticated);
        return;
      } 
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
      setUser(null);
      setAuthState(AuthState.NotAuthenticated);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(auth?.currentUser?.uid);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchUserData(currentUser.uid);
      } else {
        setUser(null);
        setAuthState(AuthState.NotAuthenticated);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          console.log("Sign out successful");
          setUser(null);
          setAuthState(AuthState.NotAuthenticated);
          queryClient.invalidateQueries(["userData"]);
          resolve();
          window.location.reload();
        })
        .catch((logoutError) => {
          console.log("Error logging out : ", logoutError);
          reject(logoutError);
        });
    });
  };

  const {
    mutate: login,
  } = useMutation(
    async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await signInWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;
      if (currentUser) {
        fetchUserData(currentUser.uid);
      }
    },
    {
      onSuccess: () => {
        console.log("User logged in successfully");
        setAuthState(AuthState.Authenticated)
        window.location.href = '/';
        setIsLoading(false);
      },
      onError: (error: any) => {
        console.error("Error logging in user:", error.message);
        setAuthState(AuthState.NotAuthenticated);
        toast({
          title: "Login Failed",
          description: "Something went wrong",
          variant: "error",
        })
        setIsLoading(false);
        throw error;
      },
    }
  );

  const {
    mutate: register,
  } = useMutation(
    async ({ regisData }: { regisData: UserRegis }) => {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        regisData.email,
        regisData.password
      );
      let data = regisData as UserRegis;
      const { password, confirmationPassword, ...dataWithoutPasswords } = data;
      const userRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userRef, {
        isSender: false,
        ...dataWithoutPasswords,
      });
      return;
    },
    {
      onSuccess: () => {
        console.log("Register succesful");
        
      },
      onError: (error: any) => {
        console.error("Error creating user:", error.message);
        toast({
          title: "Register Failed",
          description: "Something went wrong",
          variant: "error",
        })
        throw error;
      },
    }
  );

  const getUserId = (): string | null => {
    return auth.currentUser ? auth.currentUser.uid : null;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading: isLoading,
        user,
        authState,
        login,
        logout,
        register,
        getUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
