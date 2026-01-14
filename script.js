function getPrefix(food) {
    const gender = document.getElementById('gender').value;

    if (gender === 'Male') {
        switch (food) {
            case "McDonald's": return 'Peasant';
            case 'Chick-fil-a': return 'Farmer';
            case "Wendy's": return 'Guard';
            case 'Burger King': return 'Knight';
            case 'Taco Bell': return 'Noble';
            case 'Subway': return 'Baron';
            case 'KFC': return 'Commoner';
            case "Popeye's": return 'Count';
            case 'In-N-Out': return 'Squire';
            case 'Five Guys': return 'Lord';
            case "Arby's": return 'Royal';
            case 'Jack In The Box': return 'Soldier';
            default: return 'Peasant';
        }
    } else if (gender === 'Female') {
        switch (food) {
            case "McDonald's": return 'Peasant';
            case 'Chick-fil-a': return 'Seamstress';
            case "Wendy's": return 'Baker';
            case 'Burger King': return 'Knight';
            case 'Taco Bell': return 'Noble';
            case 'Subway': return 'Baroness';
            case 'KFC': return 'Commoner';
            case "Popeye's": return 'Countess';
            case 'In-N-Out': return 'Esquire';
            case 'Five Guys': return 'Lady';
            case "Arby's": return 'Royal';
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
