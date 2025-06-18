// plugins/firebase.client.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = config.public.firebase;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // Make Firebase services available to the Nuxt app
  nuxtApp.provide('firebaseApp', app);
  nuxtApp.provide('auth', auth);
  nuxtApp.provide('firestore', firestore);
});