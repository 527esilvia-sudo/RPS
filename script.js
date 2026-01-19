function getPrefix(food, gender) {
    if (gender === 'Female') {
        switch (food) {
            case "McDonald's": return 'Peasant';
            case 'Burger King': return 'Commoner';
            case "Wendy's": return 'Noble';
            case 'Chick-fil-A': return 'Queen';
            case 'Panera Bread': return 'Peasant';
            case "Popeye's": return 'Handmaid';
            case 'Taco Bell': return 'Commoner';
            case 'Subway': return 'Stewardess';
            case "Raising Cane's": return 'Weaver';
            case 'Dairy Queen': return 'Peasant';
            case "Hardee's": return 'Villager';
            case "Carl's Jr.": return 'Seamstress'
            case 'Whataburger': return 'Baker';
            case 'In-N-Out': return 'Housekeeper';
            case 'Shake Shack': return 'Noble';
            case 'Five Guys': return 'Herbalist';
            case 'KFC': return 'Midwife';
            case "Arby's": return 'Nun';
            case 'Jack in the Box': return 'Shopkeeper';
            case 'Sonic Drive-In': return 'Merchant';
            default: return 'Peasant';
        }
    } else if (gender === 'Male') {
        switch (food) {
            case "McDonald's": return 'Peasant';
            case 'Burger King': return 'Commoner';
            case "Wendy's": return 'Noble';
            case 'Chick-fil-A': return 'King';
            case 'Panera Bread': return 'Peasant';
            case "Popeye's": return 'Herald';
            case 'Taco Bell': return 'Commoner';
            case 'Subway': return 'Steward';
            case "Raising Cane's": return 'Royalty';
            case 'Dairy Queen': return 'Peasant';
            case "Hardee's": return 'Villager';
            case "Carl's Jr.": return 'Tradesperson';
            case 'Whataburger': return 'Fieldhand';
            case 'In-N-Out': return 'Merchant';
            case 'Shake Shack': return 'Noble';
            case 'Five Guys': return 'Guardian';
            case 'KFC': return 'Soldier';
            case "Arby's": return 'Constable';
            case 'Jack in the Box': return 'Artisan';
            case 'Sonic Drive-In': return 'Bard';
            default: return 'Peasant';
        }
    }
}

function getPoints(value) {
    switch (value) {
        case 'true': return 2
        case 'false': return 1
        default: return 1
    }
}

function getFirstName() {
    const gender = document.getElementById('gender').value;
    const q1 = document.querySelector('input[name="q1"]:checked')?.value || '';
    const q2 = document.querySelector('input[name="q2"]:checked')?.value || '';
    const q3 = document.querySelector('input[name="q3"]:checked')?.value || '';
    const q4 = document.querySelector('input[name="q4"]:checked')?.value || '';
    const q5 = document.querySelector('input[name="q5"]:checked')?.value || '';

    const score =
      getPoints(q1) +
      getPoints(q2) +
      getPoints(q3) +
      getPoints(q4) +
      getPoints(q5);

    if (gender === 'Male') { if (score <= 2) return ['Shade','Riven','Kael','Vex','Nyx'][Math.floor(Math.random()*5)] }
    if (gender === 'Female') { if (score <= 2) return ['Nyra','Lira','Vexa','Kira','Elsin'][Math.floor(Math.random()*5)] }
    if (gender === 'Male') { if (score <= 4) return ['Finn','Perrin','Alder','Bram','Corin'][Math.floor(Math.random()*5)] }
    if (gender === 'Female') { if (score <= 4) return ['Elowen','Tamsin','Lark','Mira','Wren'][Math.floor(Math.random()*5)] }
    if (gender === 'Male') { if (score <= 6) return ['Rowan','Cedric','Alaric','Garrick','Theo'][Math.floor(Math.random()*5)] }
    if (gender === 'Female') { if (score <= 6) return ['Brienne','Isolde','Freya','Elara','Maeve'][Math.floor(Math.random()*5)] }
    if (gender === 'Male') { if (score <= 8) return ['Gareth','Thorne','Dorian','Lucian','Orion'][Math.floor(Math.random()*5)] }
    if (gender === 'Female') { if (score <= 8) return ['Lyra','Isadora','Arwen','Helena','Valora'][Math.floor(Math.random()*5)] }
    if (gender === 'Male') { if (score <= 10) return ['Aurelius','Valerian','Caelum','Magnus','Solin'][Math.floor(Math.random()*5)] }
    if (gender === 'Female') { if (score <= 10) return ['Celestine','Seraphina','Aurelia','Elowyn','Lumina'][Math.floor(Math.random()*5)] }

    return 'Traveler'
}

function getMiddleName() {
    const userName = document.getElementById('userName').value;
    const gender = document.getElementById('gender').value;
    const firstLetter = userName.charAt(0).toUpperCase();
    if (gender === 'Male') return 'Valerian';
    if (gender === 'Female') return 'Selene';
    return '';
}

function getLastName() {
    const hLevel = document.getElementById('hLevel').value;
    return hLevel > 2 ? ' of Gladwick' : ' of Mourndale';
}

function getSuffix(choice) {
    if (choice === "man") return " The Brave";
    if (choice === "gorilla") return " the Reasonable";
    return '';
}

function getNewName() {
  const food = document.getElementById('fastFood').value;
  const gender = document.getElementById('gender').value;

  const prefix = getPrefix(food, gender);
  const firstName = getFirstName();
  const middleName = getMiddleName();
  const lastName = getLastName();
  const suffix = getSuffix(document.querySelector('input[name="exampleRadios"]:checked')?.value || 'man');

  const fullName = `${prefix} ${firstName} ${middleName} ${lastName} ${suffix}`;

  const output = document.getElementById('getNewName');
  output.innerHTML = fullName;
  output.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
