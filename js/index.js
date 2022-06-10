
// find a way to change input to two values separated by a '/' symbol
const buttonText = document.querySelector('.fraction-btn');
const sourceC1 = document.querySelector('#source-concentration');
const finalC2 = document.querySelector('#solution-concentration');
const finalV2 = document.querySelector('#solution-volume');
const division = document.querySelector('.nested');

buttonText.addEventListener('click', () => {
    const initialButtonText = 'Enter as Fraction';

    if (buttonText.innerHTML.includes(initialButtonText)) {
        buttonText.innerHTML = 'Enter as Decimal or Whole Number';
        finalC2.style.display = 'none';
        division.style.display = 'inline-block';

    } else {
        buttonText.innerHTML = initialButtonText;
        division.style.display = 'none';
        finalC2.style.display = 'inline-block';
    }
});

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
    let C1 = sourceC1.value;
    let C2 = finalC2.value;
    let V2 = finalV2.value;
    let V1 = document.getElementById('source-volume');

    if (buttonText.innerHTML.includes('Enter as Decimal')) {
        C2 = document.querySelector('.numerator').value / document.querySelector('.denominator').value;
    }

    // checkInput works as intended
    if (checkInput(C1, C2, V2)) {
        console.log('values are valid');
        V1.placeholder = C2 * V2 / C1;
        V1.value = C2 * V2 / C1;

        // output measurements to result div
        let sourceName;
        let solventName;
        let units;
        let output = V2 - V1.value;
        document.querySelector('.result').innerHTML = 'Pour ' + V1.value + ' of source into ' + output + ' of solvent';
    } else {
        alert('Enter valid Digits');
    }




}




