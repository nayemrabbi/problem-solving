/** Problem No.1 
"Feet to mile convert" */

function feetToMile(feet) {
  // as we know 1 feet = 0.000189394
  const mile = feet * 0.000189394;
  return mile;
}
const result = feetToMile(33);
console.log(result);

/** Problem No.2
"Wood Calculate" */

function woodCalculator(chair, table, bed) {
  const isChair = chair * 1;
  const isTable = table * 3;
  const isBed = bed * 5;
  const result = isChair + isTable + isBed;
  return result;
}
const woodCalculate = woodCalculator(5, 7, 9);
console.log(woodCalculate);

/** Problem No.3
"Brick Calculate" */

function brickCalculator(floor) {
  if (floor <= 10) {
    return floor * 15;
  } else if (floor <= 20) {
    return floor * 12;
  } else {
    return floor * 10;
  }
}
const floorCalculate = brickCalculator(9);
console.log(floorCalculate);

/** Problem No.4
"Find out tiny friend" */

function tinyFriend(friends) {
  var findTiny = friends[0];
  for (var i = 0; i < friends.length; i++) {
    var findFriend = friends[i];
    if (findFriend < findTiny) {
      findTiny = findFriend;
    }
  }
  return findTiny;
}
var findTinyFriend = tinyFriend([
  "Tanjil",
  "Nayem",
  "Tamanna",
  "Joy",
  "Shyamoli",
]);
console.log(findTinyFriend);
