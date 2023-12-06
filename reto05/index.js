function cyberReindeer(road, time) {
  const ans = [];
  let newRoad = road.replace("S", ".");

  let indexSanta = -1;
  for (let i = 0; i < time; i++) {
    if (i == 5) newRoad = newRoad.replaceAll("|", "*");
    if (newRoad[indexSanta + 1] != "|") indexSanta++;
    const newR = [...newRoad];
    newR[indexSanta] = "S";
    ans.push(newR.join(""));
  }

  return ans;
}
const case1 = cyberReindeer('S..|...|..', 10)
console.log(case1);