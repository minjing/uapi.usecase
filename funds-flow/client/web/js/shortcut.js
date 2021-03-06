var shortcuts = {
    // currentLanguage: null,

    renderShutcut: function(user, language) {
        var shortcut = document.getElementsByClassName('shortcut')[0];
        shortcut.innerHTML = '';
        // render user shortcut
        var shortcutItem = document.createElement('li');
        shortcutItem.className = 'navItem';
        if (user == null) {
            shortcutItem.setAttribute('data-i18n', 'shortcut.annoymous');
        } else {
            shortcutItem.innerText(user);
        }
        shortcut.appendChild(shortcutItem);
        // render language shortcut
        shortcutItem = document.createElement('li');
        shortcutItem.className = 'navImg';
        var lanImg = document.createElement('img');
        for (var i = 0; i < languages.length; i++) {
            if (languages[i].name === language) {
                context.currentLanguage = languages[i];
                break;
            }
        }
        lanImg.setAttribute('id', 'shortcut_lan');
        lanImg.setAttribute('src', context.currentLanguage.img);
        lanImg.style.width = '24px';
        lanImg.style.height = '24px';
        shortcutItem.addEventListener('mouseover', shortcuts.onMouseOver)
        // shortcutItem.addEventListener('mouseout', this.onMouseOut);
        shortcutItem.appendChild(lanImg);
        shortcut.appendChild(shortcutItem);
    },

    onMouseOver: function(event) {
        // modify context menu items
        var ctxMenu = document.getElementById('contextMenu');
        ctxMenu.innerHTML = '';
        var items = document.createElement('ul');
        items.className = 'language-items';
        for (var i = 0; i < languages.length; i++) {
            if (languages[i] === context.currentLanguage) {
                continue;
            }
            var item = document.createElement('li');
            item.className = 'language-item';
            var lanImg = document.createElement('img');
            lanImg.setAttribute('src', languages[i].img);
            lanImg.className = 'language-img';
            item.appendChild(lanImg);
            var lanLink = document.createElement('a');
            lanLink.setAttribute('href', 'javascript:shortcuts.changeLanguage("' + languages[i].name + '")');
            lanLink.innerText = i18next.t(languages[i].i18key);
            item.appendChild(lanLink);
            items.appendChild(item);
        }
        ctxMenu.appendChild(items);

        // show context menu
        var shortcutLan = document.getElementById('shortcut_lan');
        contextMenu.showMenu(shortcutLan);
    },

    onMouseOut: function(event) {
        contextMenu.hideMenu();
    },

    changeLanguage: function(language) {
        // Change current language image
        for (var i = 0; i < languages.length; i++) {
            if (languages[i].name === language) {
                context.currentLanguage = languages[i];
                break;
            }
        }
        var shortcutLng = document.getElementById('shortcut_lan');
        shortcutLng.setAttribute('src', context.currentLanguage.img);

        i18n.loadLanguage(context.currentLanguage);
    }
}
