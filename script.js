function hide(i) {
    document.getElementById('pokeCardContainer').classList.add('dNone');
    document.getElementById('pokeChartContainer').classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild${i}`).classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild2-${i}`).classList.remove('dNone');
    document.getElementById('pokemonLogo').classList.add('dNone');
    document.getElementById('button-80').classList.add('dNone');
}


function show() {
    document.getElementById('pokeCardContainer').classList.remove('dNone');
    document.getElementById('pokeChartContainer').classList.add('dNone');
    document.getElementById('pokemonLogo').classList.remove('dNone');
    document.getElementById('button-80').classList.remove('dNone');
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


// function showEvolution(i) {
//     document.getElementById(`evolution${i}`).classList.remove('dNone');
//     document.getElementById(`about${i}`).classList.add('dNone');
//     document.getElementById(`baseStats${i}`).classList.add('dNone');
//     document.getElementById(`moves${i}`).classList.add('dNone');
// }


function showMoves(i) {
    document.getElementById(`moves${i}`).classList.remove('dNone');
    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`baseStats${i}`).classList.add('dNone');
    // document.getElementById(`evolution${i}`).classList.add('dNone');
}


function addBackgroundColorCard(i) {
    let pokeTypeName = currentPokemon['types'][0]['type']['name'];
    checkTypes(i, pokeTypeName);
}


function checkTypes(i, pokeTypeName) {
    grass(i, pokeTypeName);
    fire(i, pokeTypeName);
    water(i, pokeTypeName);
    poison(i, pokeTypeName);
    bug(i, pokeTypeName);
    normal(i, pokeTypeName);
    flying(i, pokeTypeName);
    electric(i, pokeTypeName);
    fairy(i, pokeTypeName);
    ground(i, pokeTypeName);
    fighting(i, pokeTypeName);
    psychic(i, pokeTypeName);
    rock(i, pokeTypeName);
    ice(i, pokeTypeName);
    dragon(i, pokeTypeName);
    ghost(i, pokeTypeName);
}


function addColorTypeSmall(i, j) {
    grassSmall(i, j);
    fireSmall(i, j);
    waterSmall(i, j);
    poisonSmall(i, j);
    bugSmall(i, j);
    normalSmall(i, j);
    flyingSmall(i, j);
    electricSmall(i, j);
    fairySmall(i, j);
    groundSmall(i, j);
    fightingSmall(i, j);
    psychicSmall(i, j);
    rockSmall(i, j);
    iceSmall(i, j);
    dragonSmall(i, j);
    ghostSmall(i, j);
}


function grass(i, pokeTypeName) {
    if (pokeTypeName === 'grass') {
        document.getElementById(`pokeCard${i}`).classList.add('grassCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('grassCard');
    }
}


function fire(i, pokeTypeName) {
    if (pokeTypeName === 'fire') {
        document.getElementById(`pokeCard${i}`).classList.add('fireCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('fireCard');
    }
}


function water(i, pokeTypeName) {
    if (pokeTypeName === 'water') {
        document.getElementById(`pokeCard${i}`).classList.add('waterCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('waterCard');
    }
}


function poison(i, pokeTypeName) {
    if (pokeTypeName === 'poison') {
        document.getElementById(`pokeCard${i}`).classList.add('poisonCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('poisonCard');
    }
}


function bug(i, pokeTypeName) {
    if (pokeTypeName === 'bug') {
        document.getElementById(`pokeCard${i}`).classList.add('bugCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('bugCard');
    }
}


function normal(i, pokeTypeName) {
    if (pokeTypeName === 'normal') {
        document.getElementById(`pokeCard${i}`).classList.add('normalCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('normalCard');
    }
}


function flying(i, pokeTypeName) {
    if (pokeTypeName === 'flying') {
        document.getElementById(`pokeCard${i}`).classList.add('flyingCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('flyingCard');
    }
}


function electric(i, pokeTypeName) {
    if (pokeTypeName === 'electric') {
        document.getElementById(`pokeCard${i}`).classList.add('electricCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('electricCard');
    }
}


function fairy(i, pokeTypeName) {
    if (pokeTypeName === 'fairy') {
        document.getElementById(`pokeCard${i}`).classList.add('fairyCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('fairyCard');
    }
}


function ground(i, pokeTypeName) {
    if (pokeTypeName === 'ground') {
        document.getElementById(`pokeCard${i}`).classList.add('groundCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('groundCard');
    }
}


function fighting(i, pokeTypeName) {
    if (pokeTypeName === 'fighting') {
        document.getElementById(`pokeCard${i}`).classList.add('fightingCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('fightingCard');
    }
}


function psychic(i, pokeTypeName) {
    if (pokeTypeName === 'psychic') {
        document.getElementById(`pokeCard${i}`).classList.add('psychicCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('psychicCard');
    }
}


function rock(i, pokeTypeName) {
    if (pokeTypeName === 'rock') {
        document.getElementById(`pokeCard${i}`).classList.add('rockCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('rockCard');
    }
}


function ice(i, pokeTypeName) {
    if (pokeTypeName === 'ice') {
        document.getElementById(`pokeCard${i}`).classList.add('iceCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('iceCard');
    }
}


function dragon(i, pokeTypeName) {
    if (pokeTypeName === 'dragon') {
        document.getElementById(`pokeCard${i}`).classList.add('dragonCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('dragonCard');
    }
}


function ghost(i, pokeTypeName) {
    if (pokeTypeName === 'ghost') {
        document.getElementById(`pokeCard${i}`).classList.add('ghostCard');
        document.getElementById(`pokeChartContainerChild${i}`).classList.add('ghostCard');
    }
}


function grassSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'grass') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('grassType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('grassType');
    }
}


function fireSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'fire') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('fireType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('fireType');
    }
}

function waterSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'water') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('waterType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('waterType');
    }
}

function poisonSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'poison') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('poisonType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('poisonType');
    }
}


function bugSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'bug') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('bugType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('bugType');
    }
}

function normalSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'normal') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('normalType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('normalType');
    }
}

function flyingSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'flying') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('flyingType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('flyingType');
    }
}


function electricSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'electric') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('electricType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('electricType');
    }
}

function fairySmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'fairy') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('fairyType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('fairyType');
    }
}


function groundSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'ground') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('groundType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('groundType');
    }
}

function fightingSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'fighting') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('fightingType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('fightingType');
    }
}

function psychicSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'psychic') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('psychicType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('psychicType');
    }
}

function rockSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'rock') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('rockType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('rockType');
    }
}


function iceSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'ice') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('iceType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('iceType');
    }
}


function dragonSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'dragon') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('dragonType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('dragonType');
    }
}


function ghostSmall(i, j) {
    let pokeTypeName = currentPokemon['types'][j]['type']['name'];
    if (pokeTypeName === 'ghost') {
        document.getElementById(`pokeTypes${i}-${j}`).classList.add('ghostType');
        document.getElementById(`pokeTypesChart${i}-${j}`).classList.add('ghostType');
    }
}