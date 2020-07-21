// Data from the assignment:
// -- Interest: 1.5/100;
// -- Payment calculation formula: (price * interest) / (1 - (Math.pow(1 / (1 + interest), period)));

/**
 * Converts numbers to fixed-decimal and currency-friendly digit chunks.
 * Also outputs them to a dedicated element.
 * @param {String} name 
 * @param {Number} value 
 */
const showResult = (name, value = 0) => {
  decimalValue = Number(value).toFixed(2);

  document.querySelector(`.result--${name}`).innerHTML = decimalValue;
}

/**
 * Checks the validity state of an input and shows the status visually.
 * @param {HTMLInputElement} input 
 */
const showValidityState = (input) => {
  const feedback = document.getElementById(`feedback--${input.name}`);

  if (input.validity.valid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    feedback.innerHTML='';
    return;
  }

  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
  feedback.innerHTML=input.validationMessage;
}

/**
 * Calculates the down payment sum.
 * Calculates monthly payments after the downpayment.
 * Outputs both calculations via `showResult()`
 */
const calculate = () => {
  const loan = Number(document.querySelector('#amount').value);
  const downPayment = loan * Number(document.querySelector('#percentage').value) / 100;
  const period = Number(document.querySelector('#time').value) * 12;
  const price = loan - downPayment
  const interest = 1.5/100;
  const monthlyPayment = (price * interest) / (1 - (Math.pow(1 / (1 + interest), period)))

  showResult('downPayment', downPayment);
  showResult('calculated', monthlyPayment);
}

// Run everything as soon as the document loads.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-input-calculate').forEach(input => {
    calculate()
  
    if (input.type === 'number') {
      showValidityState(input);
    }

    input.addEventListener('input', () => {
      if (input.type === 'number') {
        showValidityState(input);
      }

      calculate();
    })
  })
})
