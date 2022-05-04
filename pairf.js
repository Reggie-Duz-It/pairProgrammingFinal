
// <<<<<<< main
//Easy (1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter( n => n % 2);
let evens = arr.filter( n => n % 2 == 0);
console.log(odds);
console.log(evens);


// JORGE PRO //

//2)

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let myPrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
})
console.log(myPrimeArray);
// >>>>>>> main

//Medium (1)

function vowelChecker(letter) {
    var vowel = ["a", "e", "i", "o", "u"];

      if (vowel.indexOf(letter) !=-1) {
        console.log("its vowel");
        return;
      }
      else{
    console.log("not vowel");
    return;
      }
  }

  vowelChecker("k");

  //Medium (3)

  var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(gcd(78, 126));

//Medium (4)

var car = {
    make: "Subura",
    model: "Impreza",
    year: 2006,
    mileage: 2000,
    color: "Black",
    driveToWork: function () {
        newMiles = this.mileage + 33
        return console.log(`Old Mileage: ${this.mileage} | New Mileage: ${newMiles}`);
    },
    driveAroundTheWorld: () => {
        newMiles2 = newMiles + 24000
        return console.log(`Old Mileage: ${newMiles} | New Mileage: ${newMiles2}`);
    },
    runErrands: () => {
        newMiles3 = newMiles2 + 30
        return console.log(`Old Mileage: ${newMiles2} | New Mileage: ${newMiles3}`);
    }
};
car.driveToWork()
car.driveAroundTheWorld()
car.runErrands()











//Hard (1)

const prompt = require('prompt-sync') ({signit: true});
function Check()
{
    let s  = [];
    let pObj = {'{':'}','(':')','[':']'}
    let sTop = "";

    for(let i=0;i<str.length;i++)
    {
        if(str[i] == '{' || str[i] == '(' || str[i] == '[')
        {
            s.push(str[i]);
        }
        else
        {
            sTop = s.pop();
            if(str[i] !== pObj[sTop])
            {
                return 0;
            }
        }
    }
    return 1;
}

var str = prompt();

res = Check(str);
if(res == 0)
{
    console.log(false)
}
else
{
    console.log(true);
}