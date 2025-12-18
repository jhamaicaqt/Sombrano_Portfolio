function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// function sendMail() {
//   var params = {
//     name: document.querySelector("name").value,
//     email: document.querySelector("emails").value,
//     subject: document.querySelector("subject").value,
//     message: document.querySelector("message").value
//     };

//     emajis.send("service_6wc31ig", "template_ymhbr4h", params)
//     .then ((res) => {
//       console.log(res);
//       alert("you mess is send");
//     })
//     .catch(err => console.log(err))
//   }



