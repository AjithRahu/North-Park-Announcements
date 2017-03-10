/* SIGN IN  */

   // Get Elements
   const txtEmail = document.getElementById('txtEmail');
   const txtPassword = document.getElementById('txtPassword');
   const btnLogIn = document.getElementById('btnLogin');
   const btnSignUp = document.getElementById('btnSignUp');
   const btnLogout = document.getElementById('btnLogout');
   
   // Add login event 
   btnLogIn.addEventListener('click', e => {
     // Get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     // Sign In
     const promise = auth.signInWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
     
     
   });
   
   // Add signup event
   btnSignUp.addEventListener('click', e => {
       // Get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     // Sign In
     const promise = auth.createUserWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));

   });
   /*
   btnLogout.addEventListener('click', e => {
     firebase.auth(),signOut();
   });
  
    // Add realtime user
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaserUser) {
        console.log(firebaseUser);
      } else {
        console.log('not logged in');
      }
    }

*/