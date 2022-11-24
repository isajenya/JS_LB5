const {readFileSync} = require('fs');
let array;

function main() {
    let inputText = readFileSync("lb5_input.json", 'utf-8');
    array = JSON.parse(inputText);

    sortArray("ratingRevievs");
    sortArray("price")
}

function compareBy(key, a, b) {


    function getInteger(value) {
        typeof value === "object" ? value = value["newUan"] : value;
        return parseInt(value.replace(" ", ""));
    }

    let resultA = getInteger(a[key]);
    let resultB = getInteger(b[key]);


    if (resultA < resultB) {
        return -1;
    } else if (resultA > resultB) {
        return 1;
    } else {
        return 0;
    }

}

function sortArray(sortBy) {
    console.log(sortBy + "sort:");
    console.log(array.sort(compareBy.bind(null, sortBy)));
    console.log("\n\n\n============================================================\n\n\n");
}


main();



