
const arrayOfSpin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r-   ', '\r\\   ', '\r|   '];

let time = 100;

for (let i = 0; i < arrayOfSpin.length; i++) {

  setTimeout(() => {
    process.stdout.write(arrayOfSpin[i]);
  }, time);
  time = time + 200;

}

setTimeout(() => {

  console.log();

}, time);