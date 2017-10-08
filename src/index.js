module.exports = {
    label: function (caption) {
        var tpl = require('./templates/label.hbs.html');
        return tpl({
            caption: caption
        });
    }
};