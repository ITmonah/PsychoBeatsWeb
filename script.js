let songs;
let activeSongs;
const songsMassive = document.getElementById("Songs");
const All = document.getElementById("all");
const Easy = document.getElementById("green");
const Mid = document.getElementById("yellow");
const Hard = document.getElementById("red");

All.addEventListener("click", () => {
    activeSongs = songs;
    fillSongs(songs);
});
Easy.addEventListener("click", songFilter("easy", Easy));
Mid.addEventListener("click", songFilter("mid", Mid));
Hard.addEventListener("click", songFilter("hard", Hard));

fetch("songs.json")
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(json => {
        songs = json.songs;
        activeSongs = songs;
        fillSongs(songs);
    })
    .catch(error => console.log(error));

function fillSongs(arr) {
    songsMassive.innerHTML = "";
    arr.forEach((element) => {
        const results = document.createElement("div");
        results.classList.add("main__text-block");
        results.classList.add("main__songs-item");
        results.innerHTML =
            `<div class="main__text-block main__songs-item">
            <div class="main__songs-img">
                <img src="${element.img}">
            </div>
            <div class="main__text-block main__songs-list">
                <ul>
                    <li><span>${element.name}</span></li>
                    <li><span>${element.anime}</span></li>
                    <li><span>${element.diff}</span></li>
                    <li><span>${element.takts}</span></li>
                    <li><span>${element.notes}</span></li>
                </ul>
            </div>
        </div>`;
        songsMassive.appendChild(results);
    })
}
function songFilter(difficult) {
    let diff = difficult;
    return function () {
        activeSongs = songs.filter(j => j.diff == diff)
        fillSongs(activeSongs);
    }
}
