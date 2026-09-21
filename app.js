/* Public preview only. No live checkout or customer data collection. */
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const b = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom)) dialog.close();
  });
});
document.querySelectorAll('.preview-page').forEach(button => button.addEventListener('click', () => {
  const image = document.getElementById('sample-image');
  image.src = button.dataset.image;
  image.alt = button.dataset.alt;
  document.getElementById('sample-dialog').showModal();
}));
document.querySelectorAll('.checkout-trigger').forEach(button => button.addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('checkout-dialog').showModal();
}));
document.querySelectorAll('[download]').forEach(link => link.addEventListener('click', () => {
  const status = document.getElementById('download-status');
  if (status) status.textContent = 'Download requested. Check your browser downloads and save the file somewhere you can find it.';
}));
