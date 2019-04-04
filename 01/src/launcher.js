const launcher = {
    toggleMenu: () => {
        const menu = document.getElementById('menu');
        const open = document.getElementById('open');
        
        menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
        open.style.visibility = open.style.visibility === 'visible' ? 'hidden' : 'visible';
    },

    init: () => {
        const menu = document.getElementById('menu');
        const open= document.getElementById('open');
        const container = document.getElementById('container');

        open.style.visibility = 'visible';
        menu.style.visibility = 'hidden';
        container.style.visibility = 'hidden';
    }
}

launcher.init();