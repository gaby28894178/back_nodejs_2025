import dotenv from 'dotenv';
dotenv.config();

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Config para productos
const firebaseConfigProductos = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Config para usuarios
const firebaseConfigUsuarios = {
  apiKey: process.env.FIREBASE_API_KEY_USER,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN_USER,
  projectId: process.env.FIREBASE_PROJECT_ID_USER,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_USER,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_USER,
  appId: process.env.FIREBASE_APP_ID_USER,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID_USER
};

// Inicializar apps
const appProductos = initializeApp(firebaseConfigProductos, 'appProductos');
const appUsuarios = initializeApp(firebaseConfigUsuarios, 'appUsuarios');

// Instancias Firestore
const dbProductos = getFirestore(appProductos);
const dbUsuarios = getFirestore(appUsuarios);

export { dbProductos, dbUsuarios, appProductos, appUsuarios };
