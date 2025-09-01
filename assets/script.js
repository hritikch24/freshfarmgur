
document.getElementById('year').textContent = new Date().getFullYear();
function toWA(params) {
  const base = "https://wa.me/919999999999?text=";
  const msg = encodeURIComponent(params);
  window.location.href = base + msg;
}
document.getElementById('orderForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = e.target.name.value.trim();
  const qty = e.target.qty.value.trim();
  toWA(`Hi, I'm ${name} and want to pre-book ${qty} kg of Fresh Farm Gur.`);
});
