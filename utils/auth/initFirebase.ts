import firebase from 'firebase/app'
import 'firebase/auth'

// const config = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// }
const config = {
  apiKey: 'AIzaSyAhS1bTBSFHY5D_JNGUikO5yLEpAHRMscg',
  authDomain: 'katilo-nextjs-dev.firebaseapp.com',
  databaseURL: 'https://katilo-nextjs-dev.firebaseio.com',
  projectId: 'katilo-nextjs-dev',
}
export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}
