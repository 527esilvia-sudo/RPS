function getPrefix(food) {

    switch(food) {
    case 'McDonalds':
        return 'Peasant';
    case 'Burger King':
     return 'Commoner';
    case 'Wendys':
        return 'Noble';
    case 'Chick-fil-A':
        return 'Royalty';
    case 'Panera Bread':
        return 'Peasant';
          case 'Popeyes':
        return 'Peasant';
    case 'Taco Bell':
     return 'Commoner';
    case 'Shake Shack':
        return 'Noble';
    case 'Raising Canes':
        return 'Royalty';
    case 'Dairy Queen':
        return 'Peasant';

    default:
        return 'Peasant';   

    }
}

