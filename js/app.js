/*Passwort verstecken*/
function passwortSichtbarkeitUmschalten(eingabefeldId) {
    const passwortFeld = document.getElementById(eingabefeldId);
    if(passwortFeld.type === "password") {
        passwortFeld.type = "text";
    } else {
        passwortFeld.type = "password";
    }
}

/*Stimmt das Passwort ? */
function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username =='Tim' && password =='123'){
        window.location.href="../html/home.html";

        window.location.replace("../html/home.html");
    }
    else {
        alert('Flasche Eingbae')  
      }
}

/* Side Meneu*/
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

/*Drop Down in Side Meneu*/
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }