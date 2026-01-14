function getPrefix(food) {
  const gender = document.getElementById('gender').value;

  if (gender === 'Male') {
    switch(food) {
      case 'McDonalds': return 'Peasant';
      case 'Chick-fil-a': return 'Farmer';
      case 'Wendys': return 'Guard';
      case 'Burger King': return 'Knight';
      case 'Taco Bell': return 'Noble';
      case 'Subway': return 'Baron';
      case 'KFC': return 'Commoner';
      case 'Popeyes': return 'Count';
      case 'In-N-Out': return 'Squire';
      case 'Five Guys': return 'Lord';
      case 'Arbys': return 'Royal';
      case 'Jack In The Box': return 'Soldier';
      default: return 'Peasant';
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
