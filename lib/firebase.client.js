import "firebase/auth";
import * as firebase from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  doc,
  setDoc,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

function firebaseClient() {
  firebase.initializeApp(FIREBASE_CONFIG);
  const db = getFirestore();
  const auth = getAuth();
  return { auth, db };
}

const client = firebaseClient();
export default client;

export async function getAll(dName, conditions = []) {
  const docRef = collection(client.db, dName);
  const querySnapshot = await getDocs(query(docRef, ...conditions));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}

export async function addItem(dName, item, id) {
  const snapshot = doc(client.db, dName, id);
  return setDoc(snapshot, item);
}

export async function getByCondition(dName, condition = {}) {
  const conditions = Object.entries(condition).map(([key, item]) => {
    return where(key, item.condition || "==", item.value);
  });
  const q = query(collection(client.db, dName), ...conditions);
  const querySnapshot = await getDocs(q);

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}
