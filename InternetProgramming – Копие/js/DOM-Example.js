document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.add-number').addEventListener('submit', addNumber);

  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() { removeNumber(button); });
  });
});
function removeNumber(button) {
  const numberSection = button.parentElement;
  numberSection.remove();
}
function addNumber(event) {

  event.preventDefault();

  const nameValue = document.querySelector('#name').value;
  const mobileNumberValue = document.querySelector('#mobile-number').value;

  const mobileNumber = document.createElement('span');
  const name = document.createElement('span');
  const button = document.createElement('button');
  const numberParent = document.createElement('section');

  mobileNumber.textContent = mobileNumberValue;
  name.textContent = nameValue;
  button.textContent = 'Remove';

  document.querySelector('.number-container').appendChild(numberParent);
  numberParent.className = 'number';
  name.className = 'name';
  mobileNumber.className = 'mobile-number';
  button.className = 'remove-button';

  numberParent.appendChild(name);
  numberParent.appendChild(mobileNumber);
  numberParent.appendChild(button);

  button.addEventListener('click', function() { removeNumber(button); });

  document.querySelector('#name').value = '';
  document.querySelector('#mobile-number').value = '';
}
