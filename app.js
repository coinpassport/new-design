
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

    menuEl.querySelectorAll('.set-root').forEach(linkEl => {
      const handler = event => {
        element.innerHTML = event.currentTarget.innerHTML;
        linkEl.removeEventListener('click', handler, true);
      };
      linkEl.addEventListener('click', handler, true);
    });
  }, false);
});

document.querySelectorAll('[data-step]').forEach(element => {
  element.addEventListener('click', event => {
    const step = element.attributes['data-step'].value;
    const stepEl = document.getElementById(step);
    const activeMenuLi = document.querySelector('#wizard>menu>li.active');
    const thisMenuLi = document.querySelector(`#wizard>menu>li[rel="${step}"]`);
    if(activeMenuLi) activeMenuLi.classList.toggle('active', false);
    document.querySelector('#wizard>menu').classList.toggle('hidden', !thisMenuLi);
    thisMenuLi && thisMenuLi.classList.toggle('active', true);
    document.querySelectorAll('#wizard>main').forEach(el =>
      el.classList.toggle('hidden', el.id === step ? false : true));
  }, true);
});

document.querySelectorAll('[data-toggler]').forEach(element => {
  element.addEventListener('click', event => {
    const toggler = element.attributes['data-toggler'].value;
    const togglerEl =
      toggler === 'next' ? element.nextElementSibling :
      toggler === 'prev' ? element.previousElementSibling :
      document.getElementById(toggler);
    element.setAttribute('disabled', '');
    togglerEl.removeAttribute('disabled');
  }, true);
});
