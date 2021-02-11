// import firebase from 'firebase/app'
// import 'firebase/auth'
// console.log(firebase)
// document.addEventListener("DOMContentLoaded", event => {
//   const app = firebase.app()
//   console.log(app)
// })

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider()
//   firebase.auth().signInWithPopup(provider)
//     .then(result => {
//       const user = result.user
//       document.write('Hello ${user.displayName} ')
//       console.log(user)
//     })
//     .catch(console.log)
// }

// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   })

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
