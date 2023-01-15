console.log("jquery");

$("#submit").click(function (e) {
  e.preventDefault();
  console.log("hello");
  var mssg = document.getElementById("mssg");

  const email = $("#email").val();
  const passwd = $("#passwd").val();

  if (!email) {
    mssg.innerHTML = " not valid or empty mail please try again ";
    return;
  }

  if (!passwd) {
    mssg.innerHTML = " not valid or empty please try again ";
    return;
  }

  if (localStorage.getItem("email") != email) {
    mssg.innerHTML = " email not correct email  try again ";
    return;
  }

  if (localStorage.getItem("passwd") != passwd) {
    mssg.innerHTML = "password not correct  please try again ";
    return;
  }
  window.location.replace("index.html");
});

// get all users
function getAllUsers() {
  var usrs = localStorage.getItem("users");

  var allExistUsers = JSON.parse(usrs);

  return allExistUsers || [];
}

function getUserByMail(mail) {
  var usrs = getAllUsers();
  for (usr of usrs) {
    if (usr.email == mail) {
      console.log(usr.email);
      return usr;
    }
  }
  return false;
}

function login(username) {
  localStorage.setItem("current_user", `${username}`);
  document.getElementById("pflag").innerHTML = "";
  window.location.replace(`/index.html`);
}
