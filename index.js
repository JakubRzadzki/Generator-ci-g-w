function generateArithmetic() {
    const a = parseFloat(document.getElementById('aInput').value);
    const d = parseFloat(document.getElementById('dOrRInput').value);
    const n = parseInt(document.getElementById('nInput').value);
    const color = document.getElementById('colorInput').value;

    let output = '<p style="color: ' + color + ';">Ciąg Arytmetyczny: ';
    for (let i = 0; i < n; i++) {
        const element = a + i * d;
        output += element + ', ';
    }
    output = output.slice(0, -2);
    output += '</p>';

    document.getElementById('output').innerHTML = output;
}

function generateGeometric() {
    const a = parseFloat(document.getElementById('aInput').value);
    const r = parseFloat(document.getElementById('dOrRInput').value);
    const n = parseInt(document.getElementById('nInput').value);
    const color = document.getElementById('colorInput').value;

    let output = '<p style="color: ' + color + ';">Ciąg Geometryczny: ';
    for (let i = 0; i < n; i++) {
        const element = a * Math.pow(r, i);
        output += element + ', ';
    }
    output = output.slice(0, -2);
    output += '</p>';

    document.getElementById('output').innerHTML = output;
}