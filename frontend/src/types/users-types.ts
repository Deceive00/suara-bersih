export interface User {
  userId : string;
  email : string;
  username : string;
  role : string;
}

export enum AuthState {
  Authenticated = "Authenticated",
  NotAuthenticated = "Not Authenticated",
}

export interface UserRegis {
  nim: string;
  firstName: string;
  lastName: string;
  email : string;
  username : string;
  password: string;
  confirmationPassword: string;
}
