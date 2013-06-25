"use strict;";
var primes = (function() {
    return {
        isPrime: function(x) {
            var tryDivisor = function(i, x, upper) {
                if (i <= upper) {
                    if ((x % i) === 0) {
                        return false;
                    } else {
                        return tryDivisor(i + 1, x, upper);
                    }
                } else {
                    return true;
                }
            };
            return tryDivisor(2, x, Math.sqrt(x));
        },
        nextPrime: function(num) {
            var next = num + 1;
            if (this.isPrime(next)) {
                return next;
            } else {
                return this.nextPrime(next);
            }
        }
    };
}());

var loop = function(n, fn) {
    while (n--) {
        fn();
    }
};

var primeDeltas = (function() {
    var lastPrime = 2;
    var x = {
        deltas: [],
        build: function() {
            var nextPrime = primes.nextPrime(lastPrime);
            var delta = nextPrime - lastPrime;
            x.deltas.push([lastPrime, delta]);
            lastPrime = nextPrime;
        }
    };
    return x;
}());

loop(100000, primeDeltas.build);

console.log(primeDeltas.deltas);