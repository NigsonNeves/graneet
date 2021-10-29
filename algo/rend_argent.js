function giveMeBackTheMoney(array, money) {
  if (money > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === money) return P[array[i]];
      if (array[i] <= money) {
        var sum = array[i];
        var P = [sum];
        for (var x = i + 1; x < array.length; x++) {
          if (sum + array[x] <= money) {
            sum = sum + array[x];
            P.push(array[x]);
            if (sum === money) return P;
          }
        }
      }
    }
  }
  return -1;
}

const coinsAndBankNote = [0.5, 0.2, 0.1, 0.05, 0.05, 0.02, 0.01];

const moneyToFind = 0.51;

console.log(giveMeBackTheMoney(coinsAndBankNote, moneyToFind));
