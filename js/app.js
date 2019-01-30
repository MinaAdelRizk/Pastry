
  function validateForm() {
  var name = document.forms["contactForm"]["usrName"].value;
  var mail = document.forms["contactForm"]["cEmail"].value;
  var comment = document.forms["contactForm"]["cMessage"].value;
  if (name == ""){
    alert ("Please Enter Your Name");
    return false;
  } else if (mail == "") {
    alert ("Please Enter Your E-mail");
    return false;
  } else if (comment == ""){
    alert ("Please Enter Your message");
    return false;
  } else {
    alert ("Welcome " + name + " we have received your message and we'll reply to your e-mail ASAP")
  }
  }
