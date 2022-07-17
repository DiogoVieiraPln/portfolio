const $modal_artes = document.querySelector('[data-id="modal-artes"]');

$modal_artes.addEventListener('click', ({ target }) => {
  if (!$modal_artes.classList.contains("mostrar")) return;
  if (target === $modal_img) return;

  $modal_artes.classList.remove('mostrar');
});

const $modal_img = document.querySelector('[data-id="modal-img"]');

const $modals = document.querySelectorAll("[data-modal-url]");
$modals.forEach($modal => {
  $modal.addEventListener("click", () => {
    $modal_artes.classList.add('mostrar');
    $modal_img.setAttribute('src', $modal.dataset.modalUrl);
  });
});