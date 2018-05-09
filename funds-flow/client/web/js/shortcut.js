var languages = [{
    name: 'en-US',
    i18key: 'shortcut.lan.en_US',
    img: 'img/country/us.png'
},{
    name: 'zh-CN',
    i18key: 'shortcut.lan.zh_CN',
    img: 'img/country/cn.png'
}];

var shortcuts = {
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
        var currentlan = null;
        for (var i = 0; i < languages.length; i++) {
            if (languages[i].name === language) {
                currentlan = languages[i];
                break;
            }
        }
        lanImg.setAttribute('src', currentlan.img);
        lanImg.style.width = '24px';
        lanImg.style.height = '24px';
        shortcutItem.appendChild(lanImg);
        shortcut.appendChild(shortcutItem);
    }
}
