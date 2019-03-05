// Your code goes here


const topLogo = document.querySelector(".logo-heading");

topLogo.addEventListener('dblclick', function(event) {
  event.target.style.color ='yellow';
})
topLogo.addEventListener('mouseout', function(event) {
  event.target.style.color = 'black';
})


// console.log(topLogo);

// mid content

const funBusHeader = document.querySelector('.intro h2');


funBusHeader.addEventListener('mouseenter', function(event) {
  event.target.style.color = 'blue';
});

funBusHeader.addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

const FunBusContent = document.querySelector('.intro p');

FunBusContent.addEventListener('wheel', function(event) {
  event.target.style.color = 'green';
});

FunBusContent.addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

// content section

let midContent = document.getElementsByClassName("content-section")[0];

midContent.getElementsByTagName('h2')[0].addEventListener('mousedown', function(event) {
  event.target.style.color = 'purple';
});

midContent.getElementsByTagName('h2')[0].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

midContent.getElementsByTagName('p')[0].addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

midContent.getElementsByTagName('p')[0].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});


midContent.getElementsByTagName('p')[1].addEventListener('mouseout', function(event) {
  event.target.style.color = 'violet';
});

midContent.getElementsByTagName('p')[1].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});

// lower content

let lowContent = document.getElementsByClassName("content-section inverse-content")[0];

lowContent.getElementsByTagName('h2')[0].addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

lowContent.getElementsByTagName('h2')[0].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

lowContent.getElementsByTagName('p')[0].addEventListener('mouseout', function(event) {
  event.target.style.color = 'lightblue';
});

lowContent.getElementsByTagName('p')[0].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});


lowContent.getElementsByTagName('p')[1].addEventListener('mouseout', function(event) {
  event.target.style.color = 'violet';
});

lowContent.getElementsByTagName('p')[1].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});

// low low content

let destinationContent = document.getElementsByClassName("content-destination")[0];

destinationContent.getElementsByTagName('h2')[0].addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

destinationContent.getElementsByTagName('h2')[0].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

destinationContent.getElementsByTagName('p')[0].addEventListener('mouseout', function(event) {
  event.target.style.color = 'orange';
});

destinationContent.getElementsByTagName('p')[0].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});

// destination

let destination = document.getElementsByClassName("content-pick")[0];

destination.getElementsByTagName('h4')[0].addEventListener('mouseover', function(event) {
  event.target.style.color = 'green';
});

destination.getElementsByTagName('h4')[0].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

destination.getElementsByTagName('p')[0].addEventListener('mouseout', function(event) {
  event.target.style.color = 'blue';
});

destination.getElementsByTagName('p')[0].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});

destination.getElementsByTagName('h4')[1].addEventListener('mouseover', function(event) {
  event.target.style.color = 'yellow';
});

destination.getElementsByTagName('h4')[1].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

destination.getElementsByTagName('p')[1].addEventListener('mouseout', function(event) {
  event.target.style.color = 'purple';
});

destination.getElementsByTagName('p')[1].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});



destination.getElementsByTagName('h4')[2].addEventListener('mouseover', function(event) {
  event.target.style.color = 'lightblue';
});

destination.getElementsByTagName('h4')[2].addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

destination.getElementsByTagName('p')[2].addEventListener('mouseout', function(event) {
  event.target.style.color = 'blue';
});

destination.getElementsByTagName('p')[2].addEventListener('mousemove', function(event) {
  event.target.style.color = 'black';
});

const whole = document.querySelector("container home");
whole.addEventListener('click', function(event) {
event.target.style.backgroundColor = 'red';
})
console.log(whole);