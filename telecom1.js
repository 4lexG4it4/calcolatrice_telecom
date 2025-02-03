function calculateResults() {
    const r1 = parseFloat(document.getElementById('r1').value);
    const r2 = parseFloat(document.getElementById('r2').value);
    const r3 = parseFloat(document.getElementById('r3').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    if (isNaN(r1) || isNaN(r2) || isNaN(r3) || isNaN(v1) || isNaN(v2)) {
        document.getElementById('results').innerHTML = '<p style="color: red;">Per favore, inserisci tutti i valori correttamente.</p>';
        return;
    }

    const i1 = v1 / (r1 + r2);
    const i2 = v2 / (r2 + r3);
    const vout = i1 * r2 + i2 * r2;

    document.getElementById('results').innerHTML = `
        <p><strong>Tensione Totale (Vout):</strong> ${vout.toFixed(2)} V</p>
        <p><strong>Corrente da V1 (I1):</strong> ${i1.toFixed(2)} A</p>
        <p><strong>Corrente da V2 (I2):</strong> ${i2.toFixed(2)} A</p>
    `;
}
