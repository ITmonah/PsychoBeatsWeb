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
Easy.addEventListener("click", songFilter("Easy", Easy));
Mid.addEventListener("click", songFilter("Mid", Mid));
Hard.addEventListener("click", songFilter("Hard", Hard));

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
    const lastEl = arr.length - 1;
    arr.forEach((element) => {
        let color;
        let h;
        if (element == arr[lastEl]) {
            h = "none"
        }
        if (element.diff == "Easy") {
            color = 'rgba(114, 255, 91, 1)';
        }
        else if (element.diff == "Mid") {
            color = 'rgba(255, 219, 91, 1)';
        }
        else {
            color = 'rgba(255, 91, 91, 1)';
        }
        const results = document.createElement("div");
        const spacer = document.createElement("div");
        results.classList.add("main__songs-item");
        results.innerHTML =
            `<div class="main__songs-img">
                <img src=${element.img} alt="Магическая битва">
            </div>
            <div class="main__text-block main__songs-list">
                <h1 style="color:${color}">${element.name}</h1>
                <div class="main__songs-list-item">
                    <p>Откуда: ${element.anime} </p>
                    <div class="main__songs-spacer">
                    </div>
                </div>
                <div class="main__songs-info">
                    <div class="main__songs-info-item">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0248 2.67065V29.3788" stroke="white" stroke-width="2"
                                stroke-linecap="round" />
                            <path d="M22.7019 8.01229V24.0371" stroke="white" stroke-width="2"
                                stroke-linecap="round" />
                            <path d="M2.67081 12.0185V20.0309" stroke="white" stroke-width="2"
                                stroke-linecap="round" />
                            <path d="M29.3789 12.0185V20.0309" stroke="white" stroke-width="2"
                                stroke-linecap="round" />
                            <path d="M9.34782 8.01229V24.0371" stroke="white" stroke-width="2"
                                stroke-linecap="round" />
                        </svg>
                        <p>Количество тактов: ${element.takts}</p>
                    </div>
                    <div class="main__songs-info-item">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0248 4.00621V23.3696" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M6.67702 24.064C6.67702 22.2054 8.18369 20.6988 10.0422 20.6988H16.0248V24.6783C16.0248 26.5368 14.5182 28.0435 12.6596 28.0435H10.0422C8.18369 28.0435 6.67702 26.5368 6.67702 24.6783V24.064Z"
                                stroke="white" stroke-width="2" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.0248 9.39216L24.6271 11.4321V6.01827L16.0248 4.00623V9.39216Z" stroke="white"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Количество нот: ${element.notes}</p>
                    </div>
                    <div class="main__songs-info-item">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33854 28.0437H6.67708" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33854 24.0375H6.67708" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33854 20.0312H6.67708" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33854 16.025H6.67708" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.6833 28.0437H14.0219" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6833 24.0375H14.0219" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6833 20.0312H14.0219" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6833 16.025H14.0219" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.6833 12.0187H14.0219" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6833 8.0125H14.0219" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.6833 4.00625H14.0219" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0281 28.0437H21.3667" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3729 28.0437H28.7115" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0281 24.0375H21.3667" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3729 24.0375H28.7115" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0281 20.0312H21.3667" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3729 20.0312H28.7115" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3729 16.025H28.7115" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M25.3729 12.0187H28.7115" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Сложность: ${element.diff}</p>
                    </div>
                </div>
            </div>`;
        spacer.innerHTML =
            `<div style="display:${h}" class="Songs__spacer">
            </div>`
        songsMassive.appendChild(results);
        songsMassive.appendChild(spacer);
    })
}
function songFilter(difficult) {
    let diff = difficult;
    return function () {
        activeSongs = songs.filter(j => j.diff == diff)
        fillSongs(activeSongs);
    }
}
