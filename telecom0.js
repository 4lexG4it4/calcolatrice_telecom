function calculate() {
    const voltage = parseFloat(document.getElementById('voltage').value) || null;
    const current = parseFloat(document.getElementById('current').value) || null;
    const resistance = parseFloat(document.getElementById('resistance').value) || null;

    let resultText = "";

    if (voltage !== null && current !== null) {
        resultText += `Resistenza: ${(voltage / current).toFixed(2)} Ohm<br>`;
    }
    if (voltage !== null && resistance !== null) {
        resultText += `Corrente: ${(voltage / resistance).toFixed(2)} Ampere<br>`;
    }
    if (current !== null && resistance !== null) {
        resultText += `Tensione: ${(current * resistance).toFixed(2)} Volt<br>`;
    }
    if (resultText === "") {
        resultText = "Inserisci almeno due valori per calcolare.";
    }

    document.getElementById('result').innerHTML = resultText;
}

function resetFields() {
    document.getElementById('voltage').value = '';
    document.getElementById('current').value = '';
    document.getElementById('resistance').value = '';
    document.getElementById('result').innerHTML = '';
}
