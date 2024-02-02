function onload() {
    loadPokemon();
}


async function loadPokemon() {
    for (i = 1; i < 30; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        let response = await fetch(url); // wait for load
        currentPokemon = await response.json(); // wait for load
        console.log('loadedPokemon', currentPokemon); //show json in console
        render(i);
    }
}


function render(i) {
    renderCardStructure(i);
    renderPokeChart(i);
    renderPokeChartAbout(i);
    renderPokeChartBaseStats(i);
    renderPokeChartEvolution(i);
    renderPokeChartMoves(i);
    addInfos(i);
}


function addInfos(i) {
    addPokemonCardInfo(i);
    backgroundColorCard(i); //located at script.js
    showId(i);
}


function renderCardStructure(i) { //render structur for overview of all pokemon
    let pokeCardContainer = document.getElementById('pokeCardContainer');
    pokeCardContainer.innerHTML += `
            <div class="pokeCard" id="pokeCard${i}" onclick="hide(${i})">
                <div class="spaceBetween">
                    <h1 id="pokeName${i}" class="h1PokeNames">#${i} - </h1>
                    <img src="#" alt="pokemon" id="pokeImg${i}" class="pokeImg">
                </div>
                <div id="pokeTypes${i}" class="spaceAround">    
                </div>
            </div>
        `;
}


function renderPokeChart(i) { //render structur for single pokemon
    let pokeChartContainer = document.getElementById('pokeChartContainer');
    pokeChartContainer.innerHTML += `
    <div id="pokeChartContainerChild${i}" class="dNone pokeChartContainerChild">
        <div>
            <div class="spaceBetween">
                <img src="./img/back-arrow-white.png" alt="go-back-arrow" id="arrowBack" onclick="show(${i})">
                <img src="./img/heart-icon-white.png" alt="heart-icon" id="heartWhite">
            </div>
            <div>
                <h1 id="pokeNameChart${i}"></h1>
                <span id="showId${i}">ID</span>
            </div>
        </div>
        <div>
            <div id="pokeTypesChart${i}" class="stylePokeTypes dFlex">
            </div>
        </div>
        <img id="pokeImgChart${i}" alt="pokemon Image">
    </div>

    <div id="pokeChartContainerChild2-${i}" class="dNone pokeChartContainerChild2">
        <div class="dFlex">
            <h2>About</h2>
            <h2>Base Stats</h2>
            <h2>Evolution</h2>
            <h2>Moves</h2>
        </div>
        <div id="about${i}"></div>
        <div id="baseStats${i}"></div>
        <div id="evolution${i}"></div>
        <div id="moves${i}"></div>
    </div>
    `;
}


function renderPokeChartAbout(i) { //rendering structur for infos "about"
    let pokeChartAboutContainer = document.getElementById(`about${i}`);
    pokeChartAboutContainer.innerHTML += `
    <div class="aboutContainer">
        <span alt="Infotext about the Pokemon"></span>
        <div>
            <div class="column">
                <span alt="height">
                </span>
                <span>
                </span>
            </div>
            <div class="column">
                <span alt="wheight">
                </span>
                <span>
                </span>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Gender</th>
                    <th>Egg Groups</th>
                    <th>Egg Cycle</th>
                </tr>
                <tr>
                    <td alt="masculin"></td>
                    <td alt="insert egg group"></td>
                    <td alt="insert egg cycle"></td>
                </tr>
                <tr>
                    <td alt="feminin"></td>
                </tr>
            </thead>
        </table>
    </div>
    `;
}


function renderPokeChartBaseStats(i) { //rendering structur for infos "base stats"
    let pokeChartBaseStatsContainer = document.getElementById(`baseStats${i}`);
    pokeChartBaseStatsContainer.innerHTML +=
        `
        <table>
            <thead>
                <tr>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp. Atk</th>
                    <th>Sp. Def</th>
                    <th>Speed</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td alt="HP Stat"></td>
                    <td alt="Attack Stat"></td>
                    <td alt="Defense Stat"></td>
                    <td alt="Special Attack Stat"></td>
                    <td alt="Special Defense Stat"></td>
                    <td alt="Speed Stat"></td>
                    <td alt="Total Stat"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
        </table>
    `;
}


function renderPokeChartEvolution(i) { //rendering structur for infos "evolution" 
    let pokeChartEvolutionContainer = document.getElementById(`evolution${i}`);
    pokeChartEvolutionContainer.innerHTML +=
        `
    <div>
        <div>  
        <h2></h2>
            <img src="" alt="">
        </div>
        <div>
            <img src="" alt="">
            <h3></h3>
        <div>
            <h2></h2>
            <img src="" alt="">
        </div>
    </div>
    `;
}


function renderPokeChartMoves(i) { //rendering structur for infos "moves" 
    let pokeChartMovesContainer = document.getElementById(`moves${i}`);
    pokeChartMovesContainer.innerHTML +=
        `
    <div>
        <div>  
        <h2></h2>
            <img src="" alt="">
        </div>
        <div>
            <img src="" alt="">
            <h3></h3>
        <div>
            <h2></h2>
            <img src="" alt="">
        </div>
    </div>
    `;
}


function addPokemonCardInfo(i) { // add card infos from api
    document.getElementById(`pokeName${i}`).innerHTML += currentPokemon['name']; //render pokeNames
    document.getElementById(`pokeNameChart${i}`).innerHTML += currentPokemon['name'];
    let pokeImg = currentPokemon['sprites']['front_default'];   //render img of Pokemon
    document.getElementById(`pokeImg${i}`).src = pokeImg;
    document.getElementById(`pokeImgChart${i}`).src = pokeImg;
    let countPokeTypes = currentPokemon['types'].length; //count the amount of different types for the for-parameter
    for (j = 0; j < countPokeTypes; j++) {
        let pokeTypeName = currentPokemon['types'][j]['type']['name']; //integrate different pokemon types 
        document.getElementById(`pokeTypes${i}`).innerHTML += `<div class="stylePokeTypes" id="pokeTypes${i}-${j}">${pokeTypeName}</div>`; // render pokemon types
        document.getElementById(`pokeTypesChart${i}`).innerHTML += `<div class="stylePokeTypes" id="pokeTypesChart${i}-${j}">${pokeTypeName}</div>`; // render pokemon types
        addColorTypeSmall(i, j);
    }
}


function showId(i) { //rendering "zeros" at pokeChart id
    if (i < 10) { // i start by 1
        document.getElementById(`showId${i}`).innerHTML +=
            `
            #00${i}
        `;
    }
    if (i >= 10) { // i start by 1
        document.getElementById(`showId${i}`).innerHTML +=
            `
            #0${i}
        `;
    }
    if (i >= 100) { // i start by 1
        document.getElementById(`showId${i}`).innerHTML +=
            `
        #${i}
        `;
    }
}


