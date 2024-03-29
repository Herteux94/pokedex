currentPokemon = [];
currentPokemonSpecies = [];
currentPokemonEvolution = [];


function onload() {
    init();
    clearPlaceholder();
}


async function init() {
    for (i = 1; i < 25; i++) {
        await loadPokemon(i);
    }
    render(i);
}


async function loadPokemon(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/${i}/`;
    let response = await fetch(url); // wait for load
    let responseSpecies = await fetch(urlSpecies); // wait for load
    let responseEvolution = await fetch(urlEvolution); // wait for load
    pokemon = await response.json(); // wait for load
    pokemonSpecies = await responseSpecies.json(); // wait for load
    pokemonEvolution = await responseEvolution.json(); // wait for load
    currentPokemon.push(pokemon);
    currentPokemonSpecies.push(pokemonSpecies); 
    currentPokemonEvolution.push(pokemonEvolution);  
}


function render(i) {
    renderCardStructure(i);
    renderPokeChart(i);
    renderPokeChartAbout(i);
    renderPokeChartBaseStats(i);
    renderPokeChartMoves(i);
    addInfos(i);
    hidePokemonCards(i);
}


function addInfos(i) {
    addPokemonCardInfo(i); // add data to card
    addBackgroundColorCard(i); //located at script.js
    addId(i); //add id on card
    addAbout(i); //add data to category about
    addBaseStats(i); // add data to category base stats
    // addEvolution(i); // add data to category evolution
    addMoves(i); // add data to category moves
}


function renderCardStructure(i) { //render structur for overview of all pokemon
    let pokeCardContainer = document.getElementById('pokeCardContainer');
    pokeCardContainer.innerHTML += `
            <div class="pokeCard" id="pokeCard${i}" onclick="showOnePokemon(${i})">
                <div class="spaceBetween styleh1PokeNames">
                    <h1 class="h1PokeNames dFlex">#${i}</h1>
                    <h1 id="pokeName${i}" class="h1PokeNames"></h1>
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
    <div id="pokeChartContainerChild${i}" class="dNone pokeChartContainerChild column">
        <div class="styleChartTop1">
            <div class="spaceBetween">
               <img src="./img/back-arrow-white.png" alt="go-back-arrow" id="arrowBack" onclick="showAllPokemon(${i})">
            </div>
            <div>
                <h1 id="pokeNameChart${i}"></h1>
                <span id="showId${i}">ID</span>
            </div>
        </div>
        <div class="w100">
            <div id="pokeTypesChart${i}" class="stylePokeTypes dFlex">
            </div>
        </div>
        <img id="pokeImgChart${i}" class="pokeImgChart" alt="pokemon Image">
    </div>

    <div id="pokeChartContainerChild2-${i}" class="dNone pokeChartContainerChild2">
        <div class="center w100 zIndex5000" id="h2Categorys">
            <h1 class="maRiLe24px styleLinks hover-underline-animation" onclick="showAbout(${i})">About</h1>
            <h1 class="maRiLe24px styleLinks hover-underline-animation" onclick="showBaseStats(${i})">Base Stats</h1>
            <h1 class="maRiLe24px styleLinks hover-underline-animation" onclick="showMoves(${i})">Moves</h1>
        </div>
        <div id="about${i}" ></div>
        <div id="baseStats${i}" class="dNone"></div>
        <div id="moves${i}" class="dNone dWrap styleMoves"></div>
    </div>
    `;
}


function renderPokeChartAbout(i) { //rendering structur for infos "about"
    let pokeChartAboutContainer = document.getElementById(`about${i}`);
    pokeChartAboutContainer.innerHTML += `
    <div class="aboutContainer">
        <div>
            <div class="column">
            <br>
                <span id="pokeHeight${i}" alt="height">Height: 
                </span>
            </div>
            <div class="column">
                <span id="pokeWeight${i}" alt="wheight">Weight: 
                </span>
            </div>
        </div>
    </div>
    `;
}


  


function renderPokeChartBaseStats(i) { //rendering structur for infos "base stats"
    let pokeChartBaseStatsContainer = document.getElementById(`baseStats${i}`);
    pokeChartBaseStatsContainer.innerHTML +=
        `
                <div class="styleBaseStats">
                    <div class="styleProgressBar">
                        <span id="hp${i}" class="spaceAround w66">HP: </span>
                        <div class="progressBar">
                            <div class="progress" id="hpProgress${i}"></div>
                        </div>
                    </div>
                    <div class="styleProgressBar">
                        <span id="attack${i}" class="spaceAround w66">Attack: </span>
                        <div class="progressBar">
                            <div class="progress" id="attackProgress${i}"></div>
                        </div>
                    </div>
                    <div class="styleProgressBar">
                        <span id="defense${i}" class="spaceAround w66">Defense: </span>
                        <div class="progressBar">
                            <div class="progress" id="defenseProgress${i}"></div>
                        </div>
                    </div>
                    <div class="styleProgressBar">
                        <span id="spAttack${i}" class="spaceAround w66">Sp. Atk: </span>
                        <div class="progressBar">
                            <div class="progress" id="spAttackProgress${i}"></div>
                        </div>
                    </div>
                    <div class="styleProgressBar">
                        <span id="spDefense${i}" class="spaceAround w66">Sp. Def: </span>
                        <div class="progressBar">
                            <div class="progress" id="spDefenseProgress${i}"></div>
                        </div>
                    </div>
                    <div class="styleProgressBar">
                        <span id="speed${i}" class="spaceAround w66">Speed: </span>
                        <div class="progressBar">
                            <div class="progress" id="speedProgress${i}"></div>
                        </div>
                    </div>
                    <div class="styleProgressBar">
                        <span id="totalStats${i}" class="spaceAround w66">Total: </span>
                        <div class="progressBar">
                            <div class="progress" id="totalStatsProgress${i}"></div>
                        </div>
                    </div>
                </div>
    `;
}


function renderPokeChartMoves(i) { //rendering structur for infos "moves" 
    let pokeChartMovesContainer = document.getElementById(`moves${i}`);
    for (j = 0; j < pokemon['moves'].length; j++) {
        pokeChartMovesContainer.innerHTML +=
            `
    <span id="moves${i}-${j}"></span>
    `;
    }
}


function addPokemonCardInfo() { // add card infos from api
    document.getElementById(`pokeName${i}`).innerHTML += pokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1); //render pokeNames and setting first letter to upper case
    document.getElementById(`pokeNameChart${i}`).innerHTML += currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
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


function addAbout(i) { // add "about" infos from api
    document.getElementById(`pokeHeight${i}`).innerHTML += currentPokemon[i]['height'] + '0cm';
    document.getElementById(`pokeWeight${i}`).innerHTML += currentPokemon[i]['weight'] + 'lbs';
}


function addBaseStats(i) { // add "about" infos from api
    let hp = currentPokemon['stats'][0]['base_stat'];
    let attack = currentPokemon['stats'][1]['base_stat'];
    let defense = currentPokemon['stats'][2]['base_stat'];
    let spAttack = currentPokemon['stats'][3]['base_stat'];
    let spDefense = currentPokemon['stats'][4]['base_stat'];
    let speed = currentPokemon['stats'][5]['base_stat'];
    let totalStats = hp + attack + defense + spAttack + spDefense + speed;
    document.getElementById(`hp${i}`).innerHTML += hp;
    document.getElementById(`attack${i}`).innerHTML += attack;
    document.getElementById(`defense${i}`).innerHTML += defense;
    document.getElementById(`spAttack${i}`).innerHTML += spAttack;
    document.getElementById(`spDefense${i}`).innerHTML += spDefense;
    document.getElementById(`speed${i}`).innerHTML += speed;
    document.getElementById(`totalStats${i}`).innerHTML += totalStats;
    addDataProgressBar(i, hp, attack, defense, spDefense, spAttack, speed, totalStats);
}


function addMoves(i) {
    for (j = 0; j < currentPokemon['moves'].length; j++) {
        document.getElementById(`moves${i}-${j}`).innerHTML += currentPokemon['moves'][j]['move']['name'] + ',';
    }
}


function addId(i) { //rendering "zeros" at pokeChart id
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


function addDataProgressBar(i, hp, attack, defense, spDefense, spAttack, speed, totalStats) {
    document.getElementById(`hpProgress${i}`).style.width += hp + '%';
    document.getElementById(`attackProgress${i}`).style.width += attack + '%';
    document.getElementById(`defenseProgress${i}`).style.width += defense + '%';
    document.getElementById(`spAttackProgress${i}`).style.width += spAttack + '%';
    document.getElementById(`spDefenseProgress${i}`).style.width += spDefense + '%';
    document.getElementById(`speedProgress${i}`).style.width += speed + '%';
    document.getElementById(`totalStatsProgress${i}`).style.width += (totalStats / 6) + '%';
}