// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tab Functionality
function openTab(evt, tabName) {
    const tabcontent = document.querySelectorAll('.tabcontent');
    const tablinks = document.querySelectorAll('.tablink');

    tabcontent.forEach(tab => tab.classList.remove('active'));
    tablinks.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Initialize the first tab as active
document.querySelector('.tablink').click();

const upButton = document.getElementById("upButton");


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
};


upButton.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});

// script.js
function openTab(event, tabName) {
    // Hide all tab content
    const tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach((tab) => {
        tab.style.display = "none";
    });

    // Remove the "active" class from all tab links
    const tablinks = document.querySelectorAll(".tablink");
    tablinks.forEach((tab) => {
        tab.classList.remove("active");
    });

    // Show the current tab content and mark the button as active
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Show the login tab by default
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablink").click();
});

// Login Form Validation
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const username = loginForm.querySelector("input[type='text']");
    const password = loginForm.querySelector("input[type='password']");

    let isValid = true;

    // Validate Username
    if (username.value.trim() === "") {
        showError(username, "Username is required");
        isValid = false;
    } else {
        clearError(username);
    }

    // Validate Password
    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    } else {
        clearError(password);
    }

    
    if (isValid) {
        alert("Login successful!");
        loginForm.reset();
    }
});
const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const fullName = registerForm.querySelector("input[placeholder='Full Name']");
    const email = registerForm.querySelector("input[type='email']");
    const password = registerForm.querySelector("input[placeholder='Password']");
    const confirmPassword = registerForm.querySelector("input[placeholder='Confirm Password']");

    let isValid = true;

    
    if (fullName.value.trim() === "") {
        showError(fullName, "Full Name is required");
        isValid = false;
    } else {
        clearError(fullName);
    }

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, "Invalid email address");
        isValid = false;
    } else {
        clearError(email);
    }

   
    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        clearError(password);
    }

    
    if (confirmPassword.value.trim() === "") {
        showError(confirmPassword, "Confirm Password is required");
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    
    if (isValid) {
        alert("WELCOME PAGE");
        registerForm.reset();
    }
});


function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = "block";
    input.classList.add("invalid");
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = "";
    errorElement.style.display = "none";
    input.classList.remove("invalid");
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function sendMessage() {
    let input = document.getElementById("userInput").value;
    if (input.trim() === "") return;

    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        let botResponse = getBotResponse(input);
        chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(input) {
    let responses = {
        "hello": "Hi there!",
        "how are you": "I'm just a bot, but I'm good!",
        "bye": "Goodbye! Have a great day!"
    };
    return responses[input.toLowerCase()] || "I don't understand.";
}
// Function to display current local time
function showLocalTime() {
    // Get current date and time
    const now = new Date();
    
    // Format the time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Format the date
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = now.getFullYear();
    
    // Combine date and time
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}`;
    
    // Display the time (assuming you have an element with id "localTime")
    document.getElementById('localTime').innerHTML = `${timeString} - ${dateString}`;
    
    // Update every second
    setTimeout(showLocalTime, 1000);
}

// Start the clock when the page loads

    
    // Start the clock
  
// script.js
function updateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById('dateTime');
    const dateTimeMirrorElement = document.getElementById('dateTimeMirror');
    dateTimeElement.textContent = `📅 ${now.toLocaleString()}`;
    dateTimeMirrorElement.textContent = `📅 ${now.toLocaleString()}`;
}

function updateLocation(position) {
    const { latitude, longitude } = position.coords;
    const locationElement = document.getElementById('location');
    const locationMirrorElement = document.getElementById('locationMirror');
    locationElement.textContent = `📍 Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
    locationMirrorElement.textContent = `📍 Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
}

function handleLocationError() {
    const locationElement = document.getElementById('location');
    const locationMirrorElement = document.getElementById('locationMirror');
    locationElement.textContent = '📍 Location access denied';
    locationMirrorElement.textContent = '📍 Location access denied';
}

// Update time every second
setInterval(updateTime, 1000);

// Fetch Geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updateLocation, handleLocationError);
} else {
    const locationElement = document.getElementById('location');
    const locationMirrorElement = document.getElementById('locationMirror');
    locationElement.textContent = '📍 Geolocation not supported';
    locationMirrorElement.textContent = '📍 Geolocation not supported';
}

// Visitor count functionality
const visitorCountElement = document.getElementById('visitorCount');

function updateVisitorCount() {
  let count = localStorage.getItem('visitorCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('visitorCount', count);
  visitorCountElement.textContent = `Visitors: ${count}`;
}

// Initialize visitor count
updateVisitorCount();
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Tab Switching Function
function openTab(event, tabName) {
    const tablinks = document.querySelectorAll(".tablink");
    const tabcontents = document.querySelectorAll(".tabcontent");

    tablinks.forEach(tab => tab.classList.remove("active"));
    tabcontents.forEach(tab => tab.style.display = "none");

    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display = "block";
}
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
