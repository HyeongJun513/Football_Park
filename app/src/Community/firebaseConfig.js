import firebase from 'firebase/compat/app';  // compat 모듈 사용
import 'firebase/compat/database';  // Realtime Database 사용

// Firebase 설정
const firebaseConfig = {
  apiKey: "Key",
  authDomain: "football-park.firebaseapp.com",
  databaseURL: "https://football-park-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "football-park",
  storageBucket: "football-park.appspot.com",
  messagingSenderId: "279491831076",
  appId: "1:app:web:Id",
  measurementId: "G-ID"
};

// Firebase 초기화
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();  // Realtime Database 접근
export { database };
