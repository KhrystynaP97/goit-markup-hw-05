(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);
    refs.modal.addEventListener("click", onBackdropClick);
  }

  function openModal() {
    refs.modal.classList.add("is-open");
  }

  function closeModal() {
    refs.modal.classList.remove("is-open");
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
})();