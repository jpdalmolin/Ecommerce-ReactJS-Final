import firebase from 'firebase/app';
import 'firebase/firestore' 
       
       
       const firebaseConfig = {
            apiKey: "AIzaSyBOv73QSPdabJRUnXrQBDLNo6IZ24dMEUY",
            authDomain: "ecommerce-reactjs-a2a9d.firebaseapp.com",
            projectId: "ecommerce-reactjs-a2a9d",
            storageBucket: "ecommerce-reactjs-a2a9d.appspot.com",
            messagingSenderId: "430009432612",
            appId: "1:430009432612:web:30ca3607215ac02f1bf6b1"
        };
        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);

        export function getFirebase(){
            return app
        }

        export function getFirestore(){
            return firebase.firestore(app)
        }