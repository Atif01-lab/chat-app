import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhWqJEsLVmyEh7hs97V-iAsR3qV0sEYN4",
  authDomain: "chat-2e681.firebaseapp.com",
  projectId: "chat-2e681",
  storageBucket: "chat-2e681.appspot.com",
  messagingSenderId: "959009378603",
  appId: "1:959009378603:web:9c2e2f6f314e48cab3756e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
