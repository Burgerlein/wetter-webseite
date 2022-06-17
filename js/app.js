/*Passwort verstecken*/
function passwortSichtbarkeitUmschalten(eingabefeldId) {
  const passwortFeld = document.getElementById(eingabefeldId);
  if (passwortFeld.type === "password") {
    passwortFeld.type = "text";
  } else {
    passwortFeld.type = "password";
  }
}

/*Stimmt das Passwort ? */
function validate() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username == 'Tim' && password == '123') {
    window.location.href = "../html/home.html";

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
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/*Wetter Daten*/
function setElements(city, temp, desc, windSpeed, icon) {
  document.getElementById('city').innerHTML = city;
  document.getElementById('temp').innerHTML = temp;
  document.getElementById('description').innerHTML = desc;
  document.getElementById('windSpeed').innerHTML = windSpeed;
  document.getElementById('anzeige').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

async function getWeatherdata() {
  console.log('asdadada');
  let location = document.getElementById('location').value;


  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8474290cea631493f2bf14a73428714f&units=metric&lang=de`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((re) =>{
      if (re.status == 200) {
        console.log("200");
        return re.json();
      } else {
        console.log("nicht 200");
        throw new Error(); // alert
      }
    }).then((json) => {
      console.log(json);
      setElements(json.name, json.main.temp, json.weather[0].description, json.wind.speed, json.weather[0].icon); // json.main.temp + " °C"
    }).catch((error) => {
      alert("irgendwas ist schief gelaufen"); // alternativ ''
    }); 
    /*
    console.log(response.status);
  const wetter = await response.json();
  const city = wetter.name;
  let cityHtml = document.getElementById('city');
  cityHtml.innerHTML = city;*/
}
