import { 
  incrementQty, 
  decrementQty,
  disableDecrement,
  subTotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const intSubtotal = document.querySelector('#subtotal');


incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  decrButton.disabled = disableDecrement(qtyInput.value);
  intSubtotal.textContent = `Rp. `+subTotal(priceInput.value, qtyInput.value,);
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  decrButton.disabled = disableDecrement(qtyInput.value);
  intSubtotal.textContent = `Rp. `+subTotal(priceInput.value, qtyInput.value,);
});