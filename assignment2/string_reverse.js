let fname = "Ankit Gupta ";
let word = "",
    neww = "";

for (var i = 0; i < fname.length; i++) {
    // console.log(fname[i]);
    if (fname[i] != " ") {
        word = word + fname[i];
    } else {
        console.log(reverse(word));
        neww = neww + reverse(word) + " ";
        word = "";
    }
}

function reverse(word) {
    // console.log(word);
    var rev = "";

    for (var i = word.length - 1; i >= 0; i--) {
        // console.log(word[i]);
        rev = rev + word[i];
    }
    return rev;
}

console.log(neww);

// TODO: Do this with split()
