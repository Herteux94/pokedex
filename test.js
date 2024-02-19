currentPokemon = [];


async function onload() {
    await init();
    render();

}


async function loadPokemon(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(url); // wait for load
    pokemon = await response.json(); // wait for load
    currentPokemon.push(pokemon);
    console.log(pokemon);
}


async function init() {
    for (let i = 1; i < 49; i++) {
        await loadPokemon(i);
    }
}


function render() {
    for (let i = 0; i < 24; i++) {
        renderCardStructure(i);
        renderPokeChart(i);
        renderPokeChartAbout(i);
        renderPokeChartBaseStats(i);
        renderPokeChartMoves(i);
        addInfos(i);
    }
}


function showMorePokemon(){
    document.getElementById('button-80').classList.add('dNone');
    for (let i = 24; i < 48; i++) {
        renderCardStructure(i);
        renderPokeChart(i);
        renderPokeChartAbout(i);
        renderPokeChartBaseStats(i);
        renderPokeChartMoves(i);
        addInfos(i);
    }
}


function addInfos(i) {
    addPokemonCardInfo(i); // add data to card
    addBackgroundColorCard(i); //located at script.js
    addId(i); //add id on card
    addAbout(i); //add data to category about
    addBaseStats(i); // add data to category base stats
    addMoves(i); // add data to category moves
}


function renderCardStructure(i) { //render structur for overview of all pokemon
    let pokeCardContainer = document.getElementById('pokeCardContainer');
    pokeCardContainer.innerHTML += `
            <div class="pokeCard" id="pokeCard${i}" onclick="showOnePokemon(${i})">
                <div class="spaceBetween styleh1PokeNames">
                    <h1 class="h1PokeNames dFlex">#${i + 1}</h1>
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
        <div id="about${i}" class="styleAbout"></div>
        <div id="baseStats${i}" class="dNone styleBaseStats"></div>
        <div id="moves${i}" class="dNone dWrap styleMoves"></div>
    </div>
    `;
}


function renderPokeChartAbout(i) { //rendering structur for infos "about"
    let pokeChartAboutContainer = document.getElementById(`about${i}`);
    pokeChartAboutContainer.innerHTML += `
    <div class="aboutContainer">
        <table>
            <tr>
                <td class="pb24"><b>Height:</b></td>
                <td class="pb24"><span id="pokeHeight${i}" alt="height"></span></td>
            </tr>
            <tr>
                <td class="pb24"><b>Weight:</b></td>
                <td class="pb24"><span id="pokeWeight${i}" alt="weight"></span></td>
            </tr>
            <tr class="vAlign">
                <td class="pb24"><b>Abilities:</b></td>
                <td class="pb24"><span id="pokeAbilities${i}" alt="Abilities"></span></td>
            </tr>
        </table>
    </div>
    `;
}


function renderPokeChartBaseStats(i) { //rendering structur for infos "base stats"
    let pokeChartBaseStatsContainer = document.getElementById(`baseStats${i}`);
    pokeChartBaseStatsContainer.innerHTML += `
 <table>
    <tr>
        <td class="w50"><span><b>HP:</b></span></td>
        <td><div class="progressBar"><div class="progress" id="hpProgress${i}"></div></div></td>
        <td><span id="hp${i}"></span></td>
    </tr>
    <tr>
        <td><span><b>Attack: </b></span></td>
        <td><div class="progressBar"><div class="progress" id="attackProgress${i}"></div></div></td>
        <td><span id="attack${i}"></span></td>
    </tr>
    <tr>
        <td><span><b>Defense: </b></span></td>
        <td><div class="progressBar"><div class="progress" id="defenseProgress${i}"></div></div></td>
        <td><span id="defense${i}"></span></td>
    </tr>
    <tr>
        <td><span><b>Sp. Atk: </b></span></td>
        <td><div class="progressBar"><div class="progress" id="spAttackProgress${i}"></div></div></td>
        <td><span id="spAttack${i}"></span></td>
    </tr>
    <tr>
        <td><span><b>Sp. Def: </b></span></td>
        <td><div class="progressBar"><div class="progress" id="spDefenseProgress${i}"></div></div></td>
        <td><span id="spDefense${i}"></span></td>
    </tr>
    <tr>
        <td><span><b>Speed: </b></span></td>
        <td><div class="progressBar"><div class="progress" id="speedProgress${i}"></div></div></td>
        <td><span id="speed${i}"></span></td>
    </tr>
    <tr>
        <td><span><b>Total: </b></span></td>
        <td><div class="progressBar"><div class="progress" id="totalStatsProgress${i}"></div></div></td>
        <td><span id="totalStats${i}"></span></td>
    </tr>
</table>
`
}


function renderPokeChartMoves(i) { //rendering structur for infos "moves" 
    let pokeChartMovesContainer = document.getElementById(`moves${i}`);
    for (let j = 0; j < currentPokemon[i]['moves'].length; j++) {
        pokeChartMovesContainer.innerHTML +=
            `
    <span id="moves${i}-${j}"></span>`;
    }
}


function addPokemonCardInfo(i) { // add card infos from api
    document.getElementById(`pokeName${i}`).innerHTML += currentPokemon[i]['name'].charAt(0).toUpperCase() + currentPokemon[i]['name'].slice(1); //render pokeNames and setting first letter to upper case
    document.getElementById(`pokeNameChart${i}`).innerHTML += currentPokemon[i]['name'].charAt(0).toUpperCase() + currentPokemon[i]['name'].slice(1);
    let pokeImg = currentPokemon[i]['sprites']['other']['official-artwork']['front_default'];   //render img of Pokemon
    document.getElementById(`pokeImg${i}`).src = pokeImg;
    document.getElementById(`pokeImgChart${i}`).src = pokeImg;
    let countPokeTypes = currentPokemon[i]['types'].length; //count the amount of different types for the for-parameter
    for (let j = 0; j < countPokeTypes; j++) {
        let pokeTypeName = currentPokemon[i]['types'][j]['type']['name']; //integrate different pokemon types 
        document.getElementById(`pokeTypes${i}`).innerHTML += `<div class="stylePokeTypes" id="pokeTypes${i}-${j}">${pokeTypeName}</div>`; // render pokemon types
        document.getElementById(`pokeTypesChart${i}`).innerHTML += `<div class="stylePokeTypes" id="pokeTypesChart${i}-${j}">${pokeTypeName}</div>`; // render pokemon types
        addColorTypeSmall(i, j);
    }
}



function addAbout(i) { // add "about" infos from api

    document.getElementById(`pokeHeight${i}`).innerHTML += currentPokemon[i]['height'] + '0cm';
    document.getElementById(`pokeWeight${i}`).innerHTML += currentPokemon[i]['weight'] + 'lbs';
    let pokeAbility = currentPokemon[i]['abilities'];
    for (let k = 0; k < pokeAbility.length; k++) {
        document.getElementById(`pokeAbilities${i}`).innerHTML +=
            `
            <div> ${pokeAbility[k]['ability']['name'].charAt(0).toUpperCase() + pokeAbility[k]['ability']['name'].slice(1)}
                <br>
            </div>
        `

    }
}


function addBaseStats(i) { // add "about" infos from api
    let hp = currentPokemon[i]['stats'][0]['base_stat'];
    let attack = currentPokemon[i]['stats'][1]['base_stat'];
    let defense = currentPokemon[i]['stats'][2]['base_stat'];
    let spAttack = currentPokemon[i]['stats'][3]['base_stat'];
    let spDefense = currentPokemon[i]['stats'][4]['base_stat'];
    let speed = currentPokemon[i]['stats'][5]['base_stat'];
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
    for (let j = 0; j < currentPokemon[i]['moves'].length; j++) {
        document.getElementById(`moves${i}-${j}`).innerHTML += currentPokemon[i]['moves'][j]['move']['name'] + ',';
    }
}


function addId(i) { //rendering "zeros" at pokeChart id
    if (i < 10) { // i start by 1
        let id = i + 1;
        document.getElementById(`showId${i}`).innerHTML +=
            `
            #00${id}
        `;
    }
    if (i >= 10) { // i start by 1
        let id = i + 1;
        document.getElementById(`showId${i}`).innerHTML +=
            `
            #0${id}
        `;
    }
    if (i >= 100) { // i start by 1
        let id = i + 1;
        document.getElementById(`showId${i}`).innerHTML +=
            `
        #${id}
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