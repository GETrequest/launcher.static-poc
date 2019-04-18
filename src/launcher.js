const launcher = {
  toggleMenu: () => {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');
    
    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    // open.style.visibility = open.style.visibility === 'visible' ? 'hidden' : 'visible';
    open.classList.contains('hover-open') ? open.classList.remove('hover-open') : open.classList.add('hover-open');
    menu.classList.contains('hover-open') ? menu.classList.remove('hover-open') : menu.classList.add('hover-open');
  },
  
  toggleClickOnMenu: () => {
    const open = document.getElementById('open');
    const menu = document.getElementById('menu');
    open.classList.contains('click-open') ? open.classList.remove('click-open') : open.classList.add('click-open');
    menu.classList.contains('click-open') ? menu.classList.remove('click-open') : menu.classList.add('click-open');
  },

  close: () => {
    // const menuIcons = document.getElementById('menu').querySelectorAll('[data-app-icon]');
    // menuIcons.forEach(element => {
    //    element.classList.remove('active');
    // });
    launcher.toggleMenu();
  },

  init: () => {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');
    const container = document.getElementById('container');
    
    // open.style.visibility = 'visible';
    menu.style.visibility = 'hidden';
    
    menu.style.padding = '10px'; /* needed for mouseleave event to work correctly! */

    launcher.appendAppIconListener();
  
    open.addEventListener('mouseenter', () => {
      console.log('enter open icon');
      launcher.toggleMenu();
    });
    
    menu.addEventListener('mouseout', (event) => {
      if (event.target.getAttribute('id') === 'menu') {
        launcher.toggleMenu();
      }
    });

    container.addEventListener('click', event => { 
      if (event.target === container) {
        launcher.closeApp();
      }
    });
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
    // const menuIcons = document.getElementById('menu').querySelectorAll('[data-app-icon]');
    // menuIcons.forEach(element => {
    //   if (element.getAttribute('id') === id) {
    //     element.classList.add('active');
    //   } else {
    //     element.classList.remove('active');
    //   }
    // });

    launcher.toggleMenu();

    const contentContainer = document.getElementById('container');
    contentContainer.querySelector('.launcher-content').innerHTML = `<div>Content of app ${id} goes here...</div>`;
    contentContainer.classList.add('active');
  },

  closeApp: () => {
    const contentContainer = document.getElementById('container');
    contentContainer.classList.remove('active');

    contentContainer.querySelector('.launcher-content').innerHTML = '';
  }
}

launcher.init();