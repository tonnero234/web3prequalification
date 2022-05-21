let amount;
const tier1 = 10000;
const tier2 = 20000;
const tier3 = 30000;
let nameOfRider = document.getElementById("con-Name")
let Tier = document.getElementById("tier")
function interest(amount) {
 if (amount === 10000) {
  console.log(amount * 0.05)
 } else if (amount === 20000) {
  console.log(amount * 0.1)
 } else if (amount === 30000) {
  console.log(amount * 0.2)
 } else {
  return `invalid amount`
 }
}


console.log(interest(10000));
console.log(interest(20000));
console.log(interest(30000));
console.log(interest(40000));