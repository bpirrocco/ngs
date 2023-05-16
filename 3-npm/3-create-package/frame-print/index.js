module.exports = function print (msg) {
    const star = "*";
    const frame = star.repeat(msg.length);
    console.log(frame);
    console.log(msg);
    console.log(frame);
};  