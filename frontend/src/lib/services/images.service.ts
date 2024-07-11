import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "src/firebase/firebase-config";

export const uploadMultiplePhoto = async (photos: File[], path: string) => {
  const urls = await Promise.all(
    photos.map(async (photo) => {
      const photoRef = ref(storage, `${path}/${photo.name}`);
      await uploadBytes(photoRef, photo);
      return await getDownloadURL(photoRef);
    })
  );
  return urls;
};