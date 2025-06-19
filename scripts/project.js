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

const players = [
    { position: "#1", title: "GM", name: "Magnus Carlsen", rating: 2837 },
    { position: "#2", title: "GM", name: "Hikaru Nakamura", rating: 2804 },
    { position: "#3", title: "GM", name: "Arjun Erigaisi", rating: 2782 },
    { position: "#4", title: "GM", name: "Fabiano Caruana", rating: 2777 },
    { position: "#5", title: "GM", name: "Gukesh Dommaraju", rating: 2776 },
    { position: "#6", title: "GM", name: "Praggnanandhaa Rameshbabu", rating: 2767 },
    { position: "#7", title: "GM", name: "Nodirbek Abdusattorov", rating: 2767 },
    { position: "#8", title: "GM", name: "Alireza Firouzja", rating: 2766 },
    { position: "#9", title: "GM", name: "Wei Yi", rating: 2758 },
    { position: "#10", title: "GM", name: "Ian Nepomniachtchi", rating: 2757 },
    { position: "#11", title: "GM", name: "Aravindh Chithambaram", rating: 2749 },
    { position: "#12", title: "GM", name: "Anish Giri", rating: 2748 },
    { position: "#13", title: "GM", name: "Shakhriyar Mamedyarov", rating: 2746 },
    { position: "#14", title: "GM", name: "Wesley So", rating: 2745 },
    { position: "#15", title: "GM", name: "Viswanathan Anand", rating: 2743 },
    { position: "#16", title: "GM", name: "Levon Aronian", rating: 2742 },
    { position: "#17", title: "GM", name: "Vladimir Fedoseev", rating: 2739 },
    { position: "#18", title:" GM" ,name:"Leinier Dominguez Perez" ,rating:"2738"},
    { position:"#19" ,title:" GM" ,name:"Maxime Vachier-Lagrave" ,rating:"2736"},
    { position: "#20", title: "GM", name: "Hans Niemann", rating: 2736 },
    { position: "#21", title: "GM", name: "Ding Liren", rating: 2734 },
    { position: "#22", title: "GM", name: "Vincent Keymer", rating: 2730 },
    { position: "#23", title: "GM", name: "Le Quang Liem", rating: 2729 },
    { position: "#24", title: "GM", name: "Jan-Krzysztof Duda", rating: 2725 },
    { position: "#25", title: "GM", name: "Vidit Gujrathi", rating: 2720 }
];
const playerTableLink = document.querySelector("#players");
playerTableLink.addEventListener("click", () => {
    createplayerTable(players);
});
createplayerTable(players);
function createplayerTable(chessplayers) {
    document.querySelector(".chess").innerHTML = "";
    chessplayers.forEach(player => {
        let playerTable = document.querySelector(".chess");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.position}</td>
            <td>${player.title}</td>
            <td>${player.name}</td>
            <td>${player.rating}</td>
        `;
        playerTable.appendChild(row);
    });
}

const visitsDisplay = document.querySelector(".visits");
let numVisits = localStorage.getItem("numVisits");
if (numVisits !== 0) {
    visitsDisplay.textContent = {numVisits};
} else {
    visitsDisplay.textContent = "Welcome to the Chess Knight page!";
}
numVisits++;
localStorage.setItem("numVisits", numVisits);