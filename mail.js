const firebaseConfig = {
        apiKey: "AIzaSyC7N0iBNJQ5tCIB3gcfBGxB1NXrb2LV0QE",
        authDomain: "chase-ecom.firebaseapp.com",
        databaseURL: "https://chase-ecom-default-rtdb.firebaseio.com",
        projectId: "chase-ecom",
        storageBucket: "chase-ecom.firebasestorage.app",
        messagingSenderId: "67729658915",
        appId: "1:67729658915:web:e33ccdf49c2e3ef8e9cd96"
      }
  
      // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var address = getElementVal("address");
    var country = getElementVal("country");
    var job = getElementVal("job");
    var investment = getElementVal("investment");
    var hours = getElementVal("hours");
    var income = getElementVal("income");
    var consent = getElementVal("consent");

  
    saveMessages(name, emailid, address, country, job, investment, hours, income, consent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, address, country, job, investment, hours, income, consent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      address: address,
      country: country,
      job: job,
      investment: investment,
      hours: hours,
      income: income,
      consent: consent
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  //menu
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      menuToggle.classList.toggle('open');
    });
  });
