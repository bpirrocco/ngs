const greeting = delay => {
    const newDelay = Math.ceil(delay / 5);
    const intervalDelay = newDelay * 100;
    const intervalId = setInterval(() => {
        console.log(`Hello world. ${intervalDelay}`);
        delay += 1;
        if (delay > (newDelay * 5)) {
            clearInterval(intervalId);
            greeting(delay);
        }
    }, intervalDelay);
}

greeting(1);