let spinner = { 0: "\r|   ", 1: "\r/   ", 2: "\r—   ", 3: "\r\\   " };
let timeoutTime = 100;
let repeat = 0;

while (repeat < 50) {
  for (let i = 0; i < 4; i++) {

    setTimeout(() => {
      process.stdout.write(spinner[i]);
    }, timeoutTime);

    timeoutTime += 100;
  }

  repeat++;
}