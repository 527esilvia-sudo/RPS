
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

function getFirstName(hLevel) {
    hLevel = document.getElementById('hLevel').value;
    if (hLevel > 5 && gender === 'Female') {

        rfrg

    }

}

function getMiddleName() {

}