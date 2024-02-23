// is the number prime..?

function isPrime(n) {
  // if any number above 1 and below n divides n without remainder, it returns false

  let divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    }

    divisor++;
  }
  return true;
}

function isPrimeTwo(n) {
  let divisor = 2;
  while (divisor <= n / 2) {
    if (n % divisor === 0) {
      return false;
    }

    divisor++;
  }
  return true;
}
//// testing text ...

let b = isPrimeTwo(237);
console.log(b);
