// setTimeout(function () {
//     console.log("Done");
// }, 2000)

let i = 0;
const handle = setInterval(function () {
    console.log("Done");
    i++;

    if (i == 5) {
        clearInterval(handle);
    }
}, 1000)