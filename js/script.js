const grid = document.querySelector(".grid");
const coffees = [
  { name: "Perspiciatis", image: "../img/coffee1.jpg" },
  { name: "Voluptatem", image: "../img/coffee2.jpg" },
  { name: "Explicabo", image: "../img/coffee3.jpg" },
  { name: "Rchitecto", image: "../img/coffee4.jpg" },
  { name: "Beatae", image: "../img/coffee5.jpg" },
  { name: "Vitae", image: "../img/coffee6.jpg" }
];

// show coffees
const showCoffees = () => {
    let output = "";
    coffees.forEach(
    ({ name, image }) =>
    (output += `
            <div class="proj-prev">
                <img src=${image} alt="image" class="proj-prev_img">
                <h2 class="proj-prev_heading">${name}</h2>
                <button class="proj-prev_btn">Order</button>
            </div>
            `)
    )
    grid.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

// register the service worker 
if ("serviceWorker" in navigator) { 
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("../serviceWorker.js")
      .then(result => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err)); //err => error
  });
} 
// NB: Here, we start by checking if the serviceWorker is supported by the current browser. Because it's still not supported by all browsers. Then, we listen to the page load event to register our service worker by passing the name of our file serviceWorker.js to navigator.serviceWorker.register() as a parameter to register our worker. With this update, we have now transformed our regular web app to a PWA.