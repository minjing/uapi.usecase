var context = {
    showMenu: function(element) {
        var ctxMenu = document.getElementById('contextMenu');

        var x = utils.getLeft(element) - (ctxMenu.offsetWidth - element.offsetWidth) / 2;
        var y = utils.getTop(element) + element.offsetHeight + 10;

        ctxMenu.style.top = y + 'px';
        ctxMenu.style.left = x + 'px';
        ctxMenu.style.visibility = 'visible';
    },

    hideMenu: function() {
        var ctxMenu = document.getElementById('contextMenu');
        ctxMenu.style.top = '-1000px';
        ctxMenu.style.left = '-1000px';
        ctxMenu.style.visibility = 'hidden';
    }
}
