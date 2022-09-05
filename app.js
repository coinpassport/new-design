
// Header menus on verify page
document.querySelectorAll('[data-menu]').forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
    const menuEl = document.getElementById(element.attributes['data-menu'].value);
    menuEl.classList.toggle('active', true);
    const handler = event => {
      menuEl.classList.toggle('active', false);
      menuEl.removeEventListener('click', handler, true);
    };
    menuEl.addEventListener('click', handler, true);
  }, false);
});
