
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`The coolest dog in the world is ${process.env.COOLEST_DOG}`);
    await sleep(5000);
  }
}

main();
