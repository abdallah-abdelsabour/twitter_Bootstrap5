console.log("ignup");

$("#submit").click((e) => {
  e.preventDefault();
  var mssg = document.getElementById("mssg");
  console.log("click");

  var email = $("#email").val();
  var pass1 = $("#pass1").val();
  var pass2 = $("#pass2").val();

  if (!email || !pass1) {
    mssg.innerHTML = " not valid mail ";
    return;
  }

  if (pass1 != pass2) {
    mssg.innerHTML = "two password not the same <br> try again please ";
    return;
  }

  login(email, pass1);
});

function login(email, pass) {
  localStorage.setItem("email", email);
  localStorage.setItem("passwd", pass);
  window.location.replace("login.html");
}
