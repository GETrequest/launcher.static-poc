const launcher = {
  toggleMenu: () => {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');

    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    open.style.visibility = open.style.visibility === 'visible' ? 'hidden' : 'visible';
  },

  close: () => {
    const menuIcons = document.getElementById('menu').querySelectorAll('[data-app-icon]');
    menuIcons.forEach(element => {
       element.classList.remove('active');
    });
    launcher.toggleMenu();
  },

  init: () => {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');
    const container = document.getElementById('container');

    open.style.visibility = 'visible';
    menu.style.visibility = 'hidden';
    container.style.visibility = 'hidden';

    launcher.appendAppIconListener();
  },

  appendAppIconListener: () => {
    const menuIcons = document.getElementById('menu').querySelectorAll('[data-app-icon]');
    menuIcons.forEach(element => {
      (id => {
        element.addEventListener('click', () => {
          launcher.openApp(id);
        });
      })(element.getAttribute('id'));
    });
  },

  openApp: (id) => {
    const menuIcons = document.getElementById('menu').querySelectorAll('[data-app-icon]');
    menuIcons.forEach(element => {
      if (element.getAttribute('id') === id) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });    
  }
}

launcher.init();