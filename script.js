
const gender = document.getElementById('gender').value;
const food = document.getElementById('fastFood').value;

function getPrefix(food, gender) {
    if (gender === 'Female') {
        switch (food) {
            case "McDonald's":
                return 'Peasant';
            case 'Burger King':
                return 'Commoner';
            case "Wendy's":
                return 'Noble';
            case 'Chick-fil-A':
                return 'Queen';
            case 'Panera Bread':
                return 'Peasant';
            case "Popeye's":
                return 'Handmaid';
            case 'Taco Bell':
                return 'Commoner';
            case 'Subway':
                return 'Stewardess';
            case "Raising Cane's":
                return 'Weaver';
            case 'Dairy Queen':
                return 'Peasant';
            case "Hardee's":
                return 'Villager';
            case "Carl's Jr.":
                return 'Seamstress'
            case 'Whataburger':
                return 'Baker';
            case 'In-N-Out':
                return 'Housekeeper';
            case 'Shake Shack':
                return 'Noble';
            case 'Five Guys':
                return 'Herbalist';
            case 'KFC':
                return 'Midwife';
            case "Arby's":
                return 'Nun';
            case 'Jack in the Box':
                return 'Shopkeeper';
            case 'Sonic Drive-In':
                return 'Merchant';

            default:
                return 'Peasant';
        }
    } else if (gender === 'Male') {
        switch (food) {
            case "McDonald's":
                return 'Peasant';
            case 'Burger King':
                return 'Commoner';
            case "Wendy's":
                return 'Noble';
            case 'Chick-fil-A':
                return 'King';
            case 'Panera Bread':
                return 'Peasant';
            case "Popeye's":
                return 'Herald';
            case 'Taco Bell':
                return 'Commoner';
            case 'Subway':
                return 'Steward';
            case "Raising Cane's":
                return 'Royalty';
            case 'Dairy Queen':
                return 'Peasant';
            case "Hardee's":
                return 'Villager';
            case "Carl's Jr.":
                return 'Tradesperson';
            case 'Whataburger':
                return 'Fieldhand';
            case 'In-N-Out':
                return 'Merchant';
            case 'Shake Shack':
                return 'Noble';
            case 'Five Guys':
                return 'Guardian';
            case 'KFC':
                return 'Soldier';
            case "Arby's":
                return 'Constable';
            case 'Jack in the Box':
                return 'Artisan';
            case 'Sonic Drive-In':
                return 'Bard';

            default:
                return 'Peasant';
        }
    }
}
console.log(getPrefix("Five Guys", "Male"));


function getPoints(value) {
    switch (value) {
        case 'true':
            return 2
        case 'false':
            return 1
        default:
            return 1
    }
}

function getFirstName() {
     const gender = document.getElementById('gender').value;
    const q1 = document.getElementById('q1').value
    const q2 = document.getElementById('q2').value
    const q3 = document.getElementById('q3').value
    const q4 = document.getElementById('q4').value
    const q5 = document.getElementById('q5').value
    const score = getPoints(q1) + getPoints(q2) + getPoints(q3) + getPoints(q4) + getPoints(q5)

if (gender === 'Male'){
if (score <= 2) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Shade'
}
if (r === 2) {
return 'Riven'
}
if (r === 3){
return 'Kael'
}
if (r === 4){
return 'Vex'
}
if (r === 5){
return 'Nyx'
}


}
}
if (gender === 'Female') {
    if (score <= 2) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Nyra'
}
if (r === 2) {
return 'Lira'
}
if (r === 3){
return 'Vexa'
}
if (r === 4){
return 'Kira'
}
if (r === 5){
return 'Elsin'
}
}
}
if (gender === 'Male') {
    if (score <= 4) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Finn'
}
if (r === 2) {
return 'Perrin'
}
if (r === 3){
return 'Alder'
}
if (r === 4){
return 'Bram'
}
if (r === 5){
return 'Corin'
}
}
}
if (gender === 'Female') {
    if (score <= 4) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Elowen'
}
if (r === 2) {
return 'Tamsin'
}
if (r === 3){
return 'Lark'
}
if (r === 4){
return 'Mira'
}
if (r === 5){
return 'Wren'
}
}
}
if (gender === 'Male') {
    if (score <= 6) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Rowan'
}
if (r === 2) {
return 'Cedric'
}
if (r === 3){
return 'Alaric'
}
if (r === 4){
return 'Garrick'
}
if (r === 5){
return 'Theo'
}
}
}
if (gender === 'Female') {
    if (score <= 6) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Brienne'
}
if (r === 2) {
return 'Isolde'
}
if (r === 3){
return 'Freya'
}
if (r === 4){
return 'Elara'
}
if (r === 5){
return 'Maeve'
}
}
}
if (gender === 'Male') {
    if (score <= 8) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Gareth'
}
if (r === 2) {
return 'Thorne'
}
if (r === 3){
return 'Dorian'
}
if (r === 4){
return 'Lucian'
}
if (r === 5){
return 'Orion'
}
}
}
if (gender === 'Female') {
    if (score <= 8) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Lyra'
}
if (r === 2) {
return 'Isadora'
}
if (r === 3){
return 'Arwen'
}
if (r === 4){
return 'Helena'
}
if (r === 5){
return 'Valora'
}
}
}

if (gender === 'Male') {
    if (score <= 10) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Aurelius'
}
if (r === 2) {
return 'Valerian'
}
if (r === 3){
return 'Caelum'
}
if (r === 4){
return 'Magnus'
}
if (r === 5){
return 'Solin'
}
}
}
if (gender === 'Female') {
    if (score <= 10) {
const r = Math.floor(Math.random() * 5) + 1
if (r === 1){
return 'Celestine'
}
if (r === 2) {
return 'Seraphina'
}
if (r === 3){
return 'Aurelia'
}
if (r === 4){
return 'Elowyn'
}
if (r === 5){
return 'Lumina'
}
}
}
}

function getLastName(hLevel) {
    hLevel = document.getElementById('hLevel').value;
    if (hLevel > 5) {
        return ' of Gladwick'

    }
    else {
        return 'Mourndale'
    }

}


function getSuffix(choice) {
    if (choice === "man") {
        return "The Brave ";
    } else if (choice === "gorilla") {
        return " the Reasonable";
    }
}


function getNewName() {
    let newName = getPrefix() + getFirstName() + getLastName()
    document.getElementById('placewhereTextgoes').innerHTML = newName
}







