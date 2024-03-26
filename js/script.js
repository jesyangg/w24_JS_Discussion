let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById('host-name').textContent = 'Jessica';
document.getElementById('collaborator-name').textContent = 'Jessica';
document.getElementById('collaborator-2-name').textContent = 'Dante';

// Question 2
// You can also create their own CSS classes in style.css file and use that. 

let floatingButton = document.querySelector("#instruction_button");
floatingButton.addEventListener("click", hideInstructions);
function hideInstructions() {
    console.log(this);
    let questions = document.querySelectorAll(".question");
    for (let question of questions) {
        question.classList.toggle("hidden");
    }
    if (this.innerHTML === "Hide Instructions") {
        this.innerHTML = "Show Instructions";
    }
    else {
        this.innerHTML = "Hide Instructions";
    }
};




// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.getElementById('first_name').addEventListener('input', function(e) {
    if (e.target.value === 'John') {
        document.getElementById('last_name').value = 'Doe';
    }
});




// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.getElementById('user_name').addEventListener('input', function(e) {
    var usernameAlert = document.getElementById('username-alert');
    if (pokemonList.includes(e.target.value)) {
        usernameAlert.innerText = 'Username already exists';
    } else {
        usernameAlert.innerText = 'Unique username created';
    }
});



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
// Get references to the password input fields and the alert text
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm_password");
const alertText = document.getElementById("password-alert");


function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;

    if (password === confirmPassword) {
        alertText.textContent = "Password Matches";
    } else {
        alertText.textContent = "Password does not match";
    }
}

passwordInput.addEventListener("input", checkPasswordMatch);
confirmInput.addEventListener("input", checkPasswordMatch);
const hideButton = document.getElementById("hide-password");
let passwordHidden = false;

hideButton.addEventListener("click", () => {
    passwordInput.type = passwordHidden ? "password" : "text";
    confirmPasswordInput.type = passwordHidden ? "password" : "text";
    passwordHidden = !passwordHidden;
});

document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
        hideButton.click();
    }
});



//Question 6

document.getElementById('radio-reset-button').addEventListener('click', function() {
    var radios = document.getElementsByName('favorite_day');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
});



//Question 7 





//Question 8





//Question 9 



