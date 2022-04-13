 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBJdqps4Skw9GzS2s9eKK-Pk5tpleToy2o",
   authDomain: "testimonial-281fe.firebaseapp.com",
   databaseURL: "https://testimonial-281fe-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "testimonial-281fe",
   storageBucket: "testimonial-281fe.appspot.com",
   messagingSenderId: "607544775029",
   appId: "1:607544775029:web:682bc4c6e139399ed1033c",
   measurementId: "G-2YT5CQPC6S"
 };


 //
 var idx = 0 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app); 
 const dbRef = ref(database);
 
 function loadingCard() {
    get(child(dbRef, `${idx}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          let  data = snapshot.val();
          p.innerHTML = data.text;
          img.src = data.photo;
          username.innerHTML = data.name;
         role.innerHTML = data.position;
     
          if(idx < 7){
                 idx ++;
                  }else{
                 idx == 0;
         }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
     

 }

 

 setInterval(loadingCard, 10000);