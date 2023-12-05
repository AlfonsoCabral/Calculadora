function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    const monthlyInterestRate = interestRate / 12;
    const totalMonths = loanTerm;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, totalMonths) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);
    const totalInterest = monthlyPayment * totalMonths - loanAmount; // Calcular el total de interés pagado
    const totalPayment = loanAmount + totalInterest; // Calcular el total pagado (préstamo + interés)

    // Mostrar la alerta después de calcular el préstamo
    showResultAlert(monthlyPayment, totalPayment, totalInterest, totalMonths);
}

function showResultAlert(monthlyPayment, totalPayment, totalInterest, totalMonths) {
    const alertMessage = `El pago mensual será de: $${monthlyPayment.toFixed(2)} durante ${totalMonths} meses. . El total de intereses pagados será de: $${totalInterest.toFixed(2)}.`;

    // Mostrar alerta con el resultado
    const resultElement = document.getElementById('result');
    resultElement.textContent = alertMessage;
    const alertDiv = document.querySelector('.alert');
    alertDiv.style.display = 'block'; // Mostrar el elemento de alerta
}



