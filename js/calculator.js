/**
 * Calculator for TOP SET + BACK-OFF Bench Press Program
 * Calculates target weights for heavy and volume days
 */

/**
 * Rounds a value to the nearest 5
 * @param {number} val - The value to round
 * @returns {number} Value rounded to nearest 5
 */
function round5(val) {
  return Math.round(val / 5) * 5;
}

/**
 * Calculates and displays target weights based on 5-rep max input
 */
function calculate() {
  const inputElement = document.getElementById('fiveRM');
  const raw = parseFloat(inputElement.value);

  // Validate input
  if (!raw || raw < 1) {
    document.getElementById('results').classList.remove('visible');
    return;
  }

  // Calculate weights
  const topSet = round5(raw);
  const backOff = round5(raw * 0.90);
  const volLo = round5(raw * 0.75);
  const volHi = round5(raw * 0.82);

  // Update results in DOM
  document.getElementById('r-topset').textContent = topSet + ' lb';
  document.getElementById('r-backoff').textContent = backOff + ' lb';
  document.getElementById('r-vol-lo').textContent = volLo + ' lb';
  document.getElementById('r-vol-hi').textContent = volHi + ' lb';

  // Display results
  document.getElementById('results').classList.add('visible');
}

/**
 * Initialize event listeners on DOM ready
 */
function initializeEventListeners() {
  const fiveRMInput = document.getElementById('fiveRM');
  const calculateBtn = document.querySelector('.calc-btn');

  if (fiveRMInput) {
    // Allow Enter key to trigger calculation
    fiveRMInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        calculate();
      }
    });
  }

  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculate);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
  initializeEventListeners();
}
