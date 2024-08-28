let ele =  document.querySelectorAll("[data-toggle='dropdown']");
var dropdowns = document.getElementsByClassName("dropdown-content");
let sidebar = document.querySelector('#btn-sidebar');

Array.from(ele).forEach(function(elem) {
  elem.addEventListener('click', function() {
    let attribute = this.getAttribute("data-menu");

    hide_dropdown(attribute);

    document.getElementById(attribute).classList.toggle("show");
  });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav-link')) {

    Array.from(dropdowns).forEach(function(elem) {
      if (elem.classList.contains('show')) {
        elem.classList.remove('show');
      }
    });
  }
}

function hide_dropdown(attribute) {
  Array.from(dropdowns).forEach(function(elem) {
    let id = elem.getAttribute("id");

    if (id !== attribute) {
      if (elem.classList.contains('show')) {
        elem.classList.remove('show');
      }
    }
  });
}

/*Btn sidebar*/
sidebar.addEventListener('click', function() {
  document.querySelector('#sidebar').classList.toggle("active");
  document.querySelector('#content').classList.toggle("active");
  this.classList.toggle("active");
});