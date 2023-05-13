// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let count = 0

const intervalId = setInterval(() => {
    console.log("Hello World");
    count += 1;

    if (count === 5) {
        console.log("Limit reached");
        clearInterval(intervalId);
    }
}, 1000);