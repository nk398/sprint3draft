const firebaseConfig = {
    apiKey: "AIzaSyCOopsqmMV44hRfhX-Yp93IysyZGfIhRhs",
    authDomain: "news-app-3abc3.firebaseapp.com",
    projectId: "news-app-3abc3",
    storageBucket: "news-app-3abc3.appspot.com",
    messagingSenderId: "649684876916",
    appId: "1:649684876916:web:1d868a79af4022a2325b21",
    measurementId: "G-8EQFD6DZ5W"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is not in the expected format')
      return
      // Don't continue running the code
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        full_name : full_name,
        password : password,
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password are not in the expected format')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }
  <div>
    <form action="#">
        

        <div class="field username">
                       <div class="input-area">               
                        <div type="text" id="full_name" placeholder="Full name"></div>
                        <i class="icon fas fa-envelope"></i>
               <i class="error error-icon fas fa-exclamation-circle"></i>
           </div>
           <div class="error error-txt">Username can't be blank</div>
           <div class="field email">
               <div class="input-area">
                           <div type="email" id="email" placeholder="Email"></div>
                           <i class="icon fas fa-envelope"></i>
                   <i class="error error-icon fas fa-exclamation-circle"></i>
               </div>
               <div class="error error-txt">Email can't be blank</div>
           </div>
           <div class="field password">
               <div class="input-area">
                           <div type="password" id="password" placeholder="New Password"></div>
                           <i class="icon fas fa-lock"></i>
                   <i class="error error-icon fas fa-exclamation-circle"></i>
               </div>
               <div class="error error-txt">Password can't be blank</div>
           </div>
                           <div id="button_container">
                               <button onclick="register()">Register</button>
                           </div>
        </div>
   </form>
  </div>