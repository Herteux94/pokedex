let typesOfElements = ['grass', 'fire', 'water', 'poison', 'bug', 'normal', 'flying', 'electric', 'fairy', 'ground', 'fighting', 'psychic', 'rock', 'ice', 'dragon', 'ghost']


function showOnePokemon(i) {
    document.getElementById('pokeCardContainer').classList.add('dNone');
    document.getElementById('pokeChartContainer').classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild${i}`).classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild2-${i}`).classList.remove('dNone');
    document.getElementById('pokemonLogo').classList.add('dNone');
    document.getElementById('button-80').classList.add('dNone');
    document.getElementById('searchInput').classList.add('dNone');
}


function showAllPokemon(i) {
    document.getElementById('pokeCardContainer').classList.remove('dNone');
    document.getElementById('pokeChartContainer').classList.add('dNone');
    document.getElementById('pokemonLogo').classList.remove('dNone');
    document.getElementById('button-80').classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild${i}`).classList.add('dNone');
    document.getElementById(`pokeChartContainerChild2-${i}`).classList.add('dNone');
    document.getElementById('searchInput').classList.remove('dNone');
}


function showAbout(i) {
    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`baseStats${i}`).classList.add('dNone');
    // document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`moves${i}`).classList.add('dNone');
}


function showBaseStats(i) {
    document.getElementById(`baseStats${i}`).classList.remove('dNone');
    document.getElementById(`about${i}`).classList.add('dNone');
    // document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`moves${i}`).classList.add('dNone');
}


function showMoves(i) {
    document.getElementById(`moves${i}`).classList.remove('dNone');
    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`baseStats${i}`).classList.add('dNone');
}


function addBackgroundColorCard(i) {
    let pokeTypeName = currentPokemon['types'][0]['type']['name'];
    checkTypes(i, pokeTypeName);
}


function checkTypes(i, pokeTypeName) {
    for (t = 0; t < typesOfElements.length; t++) {
        if (pokeTypeName === `${typesOfElements[t]}`) {
            document.getElementById(`pokeCard${i}`).classList.add(`${typesOfElements[t]}Card`);
            document.getElementById(`pokeChartContainerChild${i}`).classList.add(`${typesOfElements[t]}Card`);
        }
    }
}


function addColorTypeSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    for (t = 0; t < typesOfElements.length; t++) {
        if (pokeTypeName === typesOfElements[t]) {
            document.getElementById(`pokeTypes${i}-${j}`).classList.add(`${typesOfElements[t]}Type`);
            document.getElementById(`pokeTypesChart${i}-${j}`).classList.add(`${typesOfElements[t]}Type`);
        }
    }
}




function searchPokemon() {
    let searchPokemon = document.getElementById('searchInput').value.toLowerCase();
    let pokeCardContainer = document.getElementById('pokeCardContainer');
    let pokeCards = pokeCardContainer.getElementsByClassName('pokeCard');

    for (let i = 1; i < pokeCards.length +1 ; i++) {
        let pokeNameElement = document.getElementById(`pokeName${i}`);
        if (pokeNameElement) {
            let pokeName = document.getElementById(`pokeName${i}`).innerHTML.toLowerCase();
            if (pokeName.includes(searchPokemon)) {
                document.getElementById(`pokeCard${i}`).classList.remove('dNone'); // show Pokemon
            } else {
                document.getElementById(`pokeCard${i}`).classList.add('dNone'); // hide Pokemon
            }
        }
    }
}


