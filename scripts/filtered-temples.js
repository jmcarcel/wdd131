const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>${document.lastModified}</span>`;

const mainnav = document.querySelector('.navigation')
const button = document.querySelector('#menu');
button.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    button.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    // Add more temple objects here...
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 19",
    area: 30659,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-lds-236979-wallpaper.jpg"
    },
    {
    templeName: "Manhattan New York",
    location: "Manhattan, New York, United States",
    dedicated: "2004, June, 13",
    area: 20630,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/ca03f2dd13a611efa3f1eeeeac1e2d2d6107c483/full/400%2C/0/default"
    },
    {
    templeName: "Frankfurt Germany",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 30",
    area: 32895,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/53cd8f853566e3d1fbb7a7619801ff4481dba7a6/full/400%2C/0/default"
    },
];

createTempleCard(temples);

const oldTemplesLink = document.querySelector("#oldtemples");
oldTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
});
    
const newTemplesLink = document.querySelector("#newtemples");
newTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] >= 2000));
});

const largeTemplesLink = document.querySelector("#largetemples");
largeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallTemplesLink = document.querySelector("#smalltemples");
smallTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

const allTemplesLink = document.querySelector("#alltemples");
allTemplesLink.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
    document.querySelector(".cards").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class= "label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class= "label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class= "label">Area:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
         
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".cards").appendChild(card);
    });
}