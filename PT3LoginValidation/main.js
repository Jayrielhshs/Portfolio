function getMessage() {
  // to get userName value
  let userName = document.getElementById('uName').value;
  //to get password value
  let password = document.getElementById('pWord').value;
  
  let regEx = /^[A-Z][a-z]+[0-9]{2,4}$/; //userName regEx
  let regEx2 = /[@\-\_]+[a-z]+[0-9]{2,4}/; //password regEx

  if (regEx.test(userName)) { //test userName
    document.getElementById('uMsg').innerHTML = "";
  } else { //false userName
    document.getElementById('uMsg').innerHTML = "This is invalid Username!";
  }
  if (regEx2.test(password)) { //test password
    document.getElementById('pMsg').innerHTML = "";
  }else{ //false password
    document.getElementById('pMsg').innerHTML = "This is invalid Password!";
  }
  if (regEx.test(userName) && regEx2.test(password)){ //test both of validation 
    document.getElementById('lMsg').innerHTML = "Login Successfully!";
    
  } else { //both false throws error or nothing
    document.getElementById('lMsg').innerHTML = "";
  }
} //end of getMessage

//addEventListener Login
//for login button
document.getElementById('btnLogin').addEventListener('click', getMessage);

// for reset button and remove error and login validation
document.getElementById("btnReset").addEventListener('click', function() {
  document.getElementById("uMsg").innerHTML = "";
   document.getElementById("pMsg").innerHTML = "";
    document.getElementById("lMsg").innerHTML = "";
});

  
