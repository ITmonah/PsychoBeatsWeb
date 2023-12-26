let songs;
let activeSongs;
const itemsPerPage = 5;
let currentPage = 0;
let content;
let items

const Main = document.getElementById("main");
const songsMassive = document.getElementById("Songs");
const All = document.getElementById("all");
const Easy = document.getElementById("green");
const Mid = document.getElementById("yellow");
const Hard = document.getElementById("red");

const Search = document.getElementById("search");
const Search_button = document.getElementById("button-addon2_2");
const Remove_button = document.getElementById("button-addon2");

const Hide = document.getElementById("hide");

All.addEventListener("click", () => {
    activeSongs = songs;
    fillSongs(songs);
});
Easy.addEventListener("click", songFilter("Easy", Easy));
Mid.addEventListener("click", songFilter("Mid", Mid));
Hard.addEventListener("click", songFilter("Hard", Hard));

/*Смена цветов кнопок*/
All.onclick = function () {
    this.style.backgroundColor = "rgba(216, 104, 255, 1)";
    Easy.style.backgroundColor = "rgba(114, 255, 91, 0.5)";
    Mid.style.backgroundColor = "rgba(255, 219, 91, 0.5)";
    Hard.style.backgroundColor = "rgba(255, 130, 130, 0.5)";
    Search.value = "";
    removeElements()
}
Easy.onclick = function () {
    this.style.backgroundColor = "rgba(114, 255, 91, 1)";
    All.style.backgroundColor = "rgba(216, 104, 255, 0.5)";
    Mid.style.backgroundColor = "rgba(255, 219, 91, 0.5)";
    Hard.style.backgroundColor = "rgba(255, 130, 130, 0.5)";
    Search.value = "";
    removeElements()
}
Mid.onclick = function () {
    this.style.backgroundColor = "rgba(255, 219, 91, 1)";
    Easy.style.backgroundColor = "rgba(114, 255, 91, 0.5)";
    All.style.backgroundColor = "rgba(216, 104, 255, 0.5)";
    Hard.style.backgroundColor = "rgba(255, 130, 130, 0.5)";
    Search.value = "";
    removeElements()
}
Hard.onclick = function () {
    this.style.backgroundColor = "rgba(255, 130, 130, 1)";
    Easy.style.backgroundColor = "rgba(114, 255, 91, 0.5)";
    Mid.style.backgroundColor = "rgba(255, 219, 91, 0.5)";
    All.style.backgroundColor = "rgba(216, 104, 255, 0.5)";
    Search.value = "";
    removeElements()
}
Remove_button.onclick = function () {
    Search.value = "";
    removeElements()
    Search_button.click()
}
Search_button.addEventListener("click", songSearch(Search.value, Search_button));

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
        spacer.classList.add("main__songs-spacers");
        results.innerHTML =
            `<div class="main__songs-img">
                <img src=${element.img} alt="Картинка песни">
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
    content = document.querySelector('.main');
    items = Array.from(content.getElementsByClassName('main__songs-item'));
    poloski = Array.from(content.getElementsByClassName('main__songs-spacers'));
    il = items.length
    a = document.querySelector('.main__pages');
    /*написать условие, что если есть кнопки, то удалить их */
    if (!a) {
        console.log(items)
        createPageButtons(il, items);
        showPage(0, items, poloski)

        const End = document.createElement("div");
        End.classList.add("main__botter");
        Main.appendChild(End);
    }
    else {
        a.remove()
        console.log(items)
        createPageButtons(il, items);
        showPage(0, items, poloski)

        const End = document.createElement("div");
        End.classList.add("main__botter");
        Main.appendChild(End);
    }

}
function songFilter(difficult) {
    let diff = difficult;
    return function () {
        activeSongs = songs.filter(j => j.diff == diff)
        fillSongs(activeSongs);
    }
}
function songSearch(search_text) {
    search_text = Search.value

    All.style.backgroundColor = "rgba(216, 104, 255, 1)";
    Easy.style.backgroundColor = "rgba(114, 255, 91, 0.5)";
    Mid.style.backgroundColor = "rgba(255, 219, 91, 0.5)";
    Hard.style.backgroundColor = "rgba(255, 130, 130, 0.5)";

    return function () {
        search_text = Search.value
        if (!search_text) {
            fillSongs(songs)
        }
        activeSongs = songs.filter(j => j.name.toLowerCase().includes(search_text.toLowerCase()) || j.anime.toLowerCase().includes(search_text.toLowerCase()));
        fillSongs(activeSongs)
        removeElements()
    }

}
function songList(search_text) {
    search_text = Search.value
    return function () {
        search_text = Search.value
        if (!search_text) {
            fillSongs(songs)
            removeElements();
        }
        removeElements();
        activeSongs = songs.filter(j => j.name.toLowerCase().includes(search_text.toLowerCase()) || j.anime.toLowerCase().includes(search_text.toLowerCase()));
        /*Создание листа*/
        for (let i of activeSongs) {
            const lastEl = activeSongs.length - 1;
            let h;
            let songName;
            let songAnime;
            if (i == activeSongs[lastEl]) {
                h = "none"
            }
            let listSpaser = document.createElement("div");
            listSpaser.classList.add("list__spasers");
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displaySongs('" + i.name + "', '" + i.anime + "')");
            /*Показ списка*/
            songName = i.name.toString().substr(search_text);
            songAnime = i.anime.toString().substr(search_text);

            const stringName = songName.toUpperCase().indexOf(search_text.toUpperCase());
            const stringAnime = songAnime.toUpperCase().indexOf(search_text.toUpperCase());
            const length = search_text.toUpperCase().length;

            if (!search_text.toUpperCase() || stringName === -1) {
                songName = i.name.toString().substr(search_text);
            }
            else {
                songName = i.name.toString().substr(0, stringName) + '<b>' + i.name.substr(stringName, length) + '</b>' + i.name.substr(stringName + length);
            }
            if (!search_text.toUpperCase() || stringAnime === -1) {
                songAnime = "<i>" + i.anime.toString().substr(search_text);
            }
            else {
                songAnime = i.anime.toString().substr(0, stringAnime) + '<b>' + i.anime.substr(stringAnime, length) + '</b>' + i.anime.substr(stringAnime + length);
            }

            listItem.innerHTML = songName + "<br>" + "<i>" + songAnime + "</i>";
            listSpaser.innerHTML =
                `<div style="display:${h}" class="list__spaser">
            </div>`
            document.querySelector(".list").appendChild(listItem)
            document.querySelector(".list").appendChild(listSpaser)
        }
        if (!search_text) {
            removeElements();
        }
    }
}
Search.oninput = songList(Search.value)

Search.addEventListener('keydown', function (event) {
    songSearch(Search.value)
    if (event.code == 'Enter') {
        Search_button.click();
        All.style.backgroundColor = "rgba(216, 104, 255, 1)";
        Easy.style.backgroundColor = "rgba(114, 255, 91, 0.5)";
        Mid.style.backgroundColor = "rgba(255, 219, 91, 0.5)";
        Hard.style.backgroundColor = "rgba(255, 130, 130, 0.5)";
    }
    removeElements()
})
function removeElements() {
    /*Очистить все элементы*/
    let items = document.querySelectorAll(".list-items");
    let spacers = document.querySelectorAll(".list__spasers");
    items.forEach((item) => {
        item.remove();
    });
    spacers.forEach((spacer) => {
        spacer.remove();
    });
}
function displaySongs(name_song, anime_song) {
    /*Показать выбранную песню*/
    search_text = Search.value
    if (name_song.toLowerCase().includes(search_text.toLowerCase())) {
        Search.value = name_song
    }
    else {
        Search.value = anime_song
    }
    removeElements()
    Search_button.click()
}
document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(Search);
    if (!withinBoundaries) {
        Hide.style.display = "none"
    }
    else {
        Hide.style.display = "block"
    }
})
document.addEventListener('keydown', function (event) {
    if (event.code) {
        Hide.style.display = "block"
    }
})

function showPage(page, items, poloski) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
        item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    poloski.forEach((item, index) => {
        if (index + 1 === endIndex) {

            console.log(item, index + 1, endIndex)
            item.classList.add('hidden');
        }
        item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
}

function createPageButtons(il, items) {
    const totalPages = Math.ceil(il / itemsPerPage);
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('main__pages');
    /*Добавление кнопок пагинации*/
    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement('a');
        pageButton.textContent = i + 1;
        pageButton.innerHTML = i + 1;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage, items, poloski);
            updateActiveButtonStates();
        });
        content.appendChild(paginationContainer);
        paginationDiv.appendChild(pageButton);
    }
}

function updateActiveButtonStates() {
    /*Добавление класса для активной страницы*/
    const pageButtons = document.querySelectorAll('.main__pages a');
    pageButtons.forEach((button, index) => {
        if (index === currentPage) {
            button.classList.add('main__pages-active');
        } else {
            button.classList.remove('main__pages-active');
        }
    });
}

