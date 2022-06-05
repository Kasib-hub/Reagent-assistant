
// numbers must be greater than 0. Floats allowed
function checkInput(x, y, z) {
    if (!Number.isNaN(x, y, z) &&
        x > 0 &&
        y > 0 &&
        x > 0) {
        return true;
    }
    return false;
}

// can't get numbers from users until they click submit
function show() {
    let C1 = document.getElementById('source-concentration').value;
    let C2 = document.getElementById('solution-concentration').value;
    let V2 = document.getElementById('solution-volume').value;

    checkInput(C1, C2, V2) ? console.log('all good') : console.log('need to be numbers');

    console.log(C1);
    console.log(C2);
    console.log(V2);
    document.getElementById('source-volume').placeholder = 'This is the final vol';
}
