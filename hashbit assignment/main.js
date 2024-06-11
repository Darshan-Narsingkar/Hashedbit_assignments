// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');
// let uppass = [];
// let inpass = [];

// // Toggle between sign up and sign in panels
// signUpButton.addEventListener('click', () => {
//     container.classList.add('right-panel-active');
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove('right-panel-active');
// });

// // Adding and removing border
// function upimg(element) {
//     var Image = element.querySelector('img');
//     if (Image) {
//         if (Image.classList.contains('clicked')) {
//             Image.classList.remove('clicked');
//             uppass.splice(uppass.indexOf(element.id), 1);
//         } else {
//             Image.classList.add('clicked');
//             uppass.push(element.id);
//         }
//     }
// }

// function inimg(element) {
//     var Image = element.querySelector('img');
//     if (Image) {
//         if (Image.classList.contains('clicked')) {
//             Image.classList.remove('clicked');
//             inpass.splice(inpass.indexOf(element.id), 1);
//         } else {
//             Image.classList.add('clicked');
//             inpass.push(element.id);
//         }
//     }
// }


  // document.querySelector('.cart-btn').addEventListener('click', function(event) {
  //       event.preventDefault();
  //       alert("Added to cart successfully!");
  //   });

// // Get the popup
// var popup = document.getElementById("popupMessage");

// // Get the form
// var form = document.getElementById("contactForm");

// // When the user submits the form, show the popup after 1 second
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     setTimeout(function() {
//         popup.style.display = "block";
//     }, 1000);
// });

// // When the user clicks on <span> (x), close the popup
// var closeBtn = document.querySelector(".close-btn");
// closeBtn.onclick = function() {
//     popup.style.display = "none";
// };

// // When the user clicks anywhere outside of the popup, close it
// window.onclick = function(event) {
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
// };


// // Get the form element
// const form = document.getElementById('contactForm');

// // Get the send message button
// const sendMessageBtn = document.getElementById('sendMessageBtn');

// // Add event listener to the form submission
// form.addEventListener('submit', function(event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Show the alert message
//     alert('Message sent successfully!');
// });


// // Signup function
// function signup() {
//     sessionStorage.setItem("upname", document.getElementById('upmail').value);
//     sessionStorage.setItem("uppass", uppass);
//     var myText = "Account Created Successfully";
//     alert(myText);
// }

// // Image pattern authentication
// function signin() {
//     let str = document.getElementById('inmail').value;
//     let array = sessionStorage.getItem("uppass");
//     let check1 = array.localeCompare(inpass.toString());
//     if ((!str.localeCompare(sessionStorage.getItem("upname"))) && !check1) {
//         var myText = "Login is successful";
//         alert(myText);
//         NewTab();
//     } else {
//         var myText = "Login Failed";
//         alert(myText);
//         sendMail3();
//     }
// }

// // Send failure email
// function sendMail3() {
//     emailjs.send('service_7q1sn6s', 'template_v7f98gs')
//         .then(function(res) {
//             alert("Mail sent successfully");
//         });
// }

// // Send success email
// function sendMail2() {
//     emailjs.send('service_7q1sn6s', 'template_ogw30ms')
//         .then(function(res) {
//             alert("Mail sent successfully");
//         });
// }

// // Open new tab
// function NewTab() {
//     window.open(/* "https://darshan-narsingkar.github.io/flower-shop.github.io/" */);
// }





function toggleHeart(element) {
        element.classList.toggle('heart-filled');
    }




// Function to display the popup
    function displayPopup() {
        document.getElementById("popup1").style.display = "block";
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById("popup1").style.display = "none";
    }

    // Event listener for form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();
        // Display the popup message
        displayPopup();
    });


    // Function to show the popup
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Function to hide the popup
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

