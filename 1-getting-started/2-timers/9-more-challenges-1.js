let counter = 1;
setInterval(() => {
    console.log(`Hello World. ${counter}`);
    counter += 1;
}, counter * 1000);