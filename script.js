let typesOfElements = ['grass', 'fire', 'water', 'poison', 'bug', 'normal', 'flying', 'electric', 'fairy', 'ground', 'fighting', 'psychic', 'rock', 'ice', 'dragon', 'ghost']


setTimeout(autoScrollToElement, 2000);


function showOnePokemon(i) {

    document.getElementById('pokeChartContainer').classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild${i}`).classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild2-${i}`).classList.remove('dNone');
    document.getElementById('pokemonLogo').classList.add('dNone');
    document.getElementById('button-80').classList.add('dNone');
    document.getElementById('searchInput').classList.add('dNone');
    document.getElementById('pokeCardContainer').classList.add('fixed');
}


function showAllPokemon(i) {
    document.getElementById('pokeCardContainer').classList.remove('dNone');
    document.getElementById('pokeChartContainer').classList.add('dNone');
    document.getElementById('pokemonLogo').classList.remove('dNone');
    document.getElementById('button-80').classList.remove('dNone');
    document.getElementById(`pokeChartContainerChild${i}`).classList.add('dNone');
    document.getElementById(`pokeChartContainerChild2-${i}`).classList.add('dNone');
    document.getElementById('searchInput').classList.remove('dNone');
    document.getElementById('pokeCardContainer').classList.remove('fixed');
}





function hidePokemonCards(i) {
    if (i > 24) {
        document.getElementById(`pokeCard${i}`).classList.add('dNone');
    }
}


function showPokemonCards() {
    let c = 50;

    for (i = 25; i < c; i++) {
        document.getElementById(`pokeCard${i}`).classList.remove('dNone');
    }
    c = c + 25;
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
    let pokeTypeName = currentPokemon[i]['types'][0]['type']['name'];
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
    let pokeTypeName = currentPokemon[i]['types'][j]['type']['name'];
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

    for (let i = 0; i < pokeCards.length + 1; i++) {
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


// Funktion zum automatischen Scrollen
function autoScrollToElement() {
    let searchInput = document.getElementById('searchInput');
    let offset = 40; // Der Abstand zum oberen Rand, den wir erreichen wollen
    let distanceToTop = searchInput.getBoundingClientRect().top;

    // Wenn der Abstand zum oberen Rand größer als 40px ist, scrollen wir zum Element
    if (distanceToTop > offset) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: distanceToTop - offset // Abstand von der aktuellen Position
        });
    }
}


window.addEventListener('scroll', function () {
    let searchInput = document.getElementById('searchInput');
    let offset = 40; // Der Abstand zum oberen Rand, den wir erreichen wollen
    let distanceToTop = searchInput.getBoundingClientRect().top;

    // Überprüfen, ob der Abstand zum oberen Rand kleiner oder gleich 40px ist
    if (distanceToTop <= offset) {
        searchInput.classList.add('fixed'); // Füge die CSS-Klasse 'fixed' hinzu
    } else {
        searchInput.classList.remove('fixed'); // Entferne die CSS-Klasse 'fixed'
    }
});
// Die Funktion autoScrollToElement wird nach 2 Sekunden aufgerufen


function clearPlaceholder() {
    let searchInput = document.getElementById('searchInput');

    // Eventlistener für den Klick auf das Inputfeld
    searchInput.addEventListener('focus', function () {
        // Speichern Sie den aktuellen Placeholder-Text
        this.dataset.placeholder = this.placeholder;
        // Entferne den Placeholder-Text, wenn das Inputfeld fokussiert ist
        this.placeholder = '';
    });

    // Eventlistener für den Verlust des Fokus auf das Inputfeld
    searchInput.addEventListener('blur', function () {
        // Füge den Placeholder-Text wieder ein, wenn das Inputfeld den Fokus verliert
        this.placeholder = this.dataset.placeholder;
    });
};