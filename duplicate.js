function checkDuplicate(array) {
  duplicate = false;
  counter = {};
  array.forEach((element) => {
    if (element in counter) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
  });
  for (const key in counter) {
    if (counter[key] > 1) duplicate = true;
  }
  return duplicate;
}

console.log(checkDuplicate([1, 2, 3]));
