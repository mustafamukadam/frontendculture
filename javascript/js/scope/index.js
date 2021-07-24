//https://twitter.com/iamdevloper/status/1315586046709633025

const life = async () => {
  const isWearMask = await wearMask();
  const isStay6ftApart = await stay6ftApart();
  const isWashHands = await washHands();
  const isGetTested = await getTested();
  let isFollowGuidelines = await Promise.all([
    isWearMask,
    isStay6ftApart,
    isWashHands,
    isGetTested,
  ]);
  return isFollowGuidelines.includes(false);
};

let stillAlive = true;
const stop = setInterval(async () => {
  stillAlive = await life();
  if (!stillAlive) clearInterval(stop);
}, 3.6e6);

// function Ninja() {
//   var feints = 0;
//   this.getFeints = function () {
//     return feints;
//   };
//   this.feint = function () {
//     feints++;
//   };
// }

// var ninja1 = new Ninja();
// console.log(Ninja.feints);
