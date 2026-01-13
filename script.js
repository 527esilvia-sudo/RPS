function getPrefix(food) {
    const gender = document.getElementById('gender').value;

    if (gender === 'Male') {
        switch (food) {
            case "McDonald's":
                return 'Peasant';
            case 'Burger King':
                return 'Commoner';
            case "Wendy's":
                return 'Noble';
            case 'Chick-fil-A':
                return 'Royalty';
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
    } else if (gender === 'Female') {
        switch(food) {
            case 'McDonalds': return 'Peasant';
            case 'Chick-fil-a': return 'Seamstress';
            case 'Wendys': return 'Baker';
            case 'Burger King': return 'Knight';
            case 'Taco Bell': return 'Noble';
            case 'Subway': return 'Baroness';
            case 'KFC': return 'Commoner';
            case 'Popeyes': return 'Countess';
            case 'In-N-Out': return 'Squire';
            case 'Five Guys': return 'Lady';
            case 'Arbys': return 'Royal';
            case 'Jack In The Box': return 'Soldier';
            default: return 'Peasant';
        }
    } else {
        return 'Peasant'; 
    }
}

console.log(getPrefix("Five Guys", "Male"));

function getFirstName() {
    
}
