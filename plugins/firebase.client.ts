// plugins/firebase.client.ts

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAnalytics, type Analytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = config.public.firebase;

  // Initialize Firebase
  const app: FirebaseApp = initializeApp(firebaseConfig);
  const analytics: Analytics = getAnalytics(app);

  // const auth: Auth = getAuth(app);
  const firestore: Firestore = getFirestore(app);

  // Make Firebase services available to the Nuxt app
  nuxtApp.provide('firebaseApp', app);
  // nuxtApp.provide('auth', auth);
  nuxtApp.provide('firestore', firestore);
  nuxtApp.provide('analytics', analytics);
});