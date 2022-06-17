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

        window.location.location("../html/home.html");
    }
    else {
        alert('Flasche Eingbae')  
      }
}
