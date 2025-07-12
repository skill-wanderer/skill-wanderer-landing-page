import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'
import type { Analytics } from 'firebase/analytics'

declare module '#app' {
  interface NuxtApp {
    $firebaseApp: FirebaseApp
    $auth: Auth
    $firestore: Firestore
    $analytics: Analytics
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $firebaseApp: FirebaseApp
    $auth: Auth
    $firestore: Firestore
    $analytics: Analytics
  }
}

export {}
