var $$ = function () { };
$$.prototype = {
    $id: function (id) {
        return document.getElementById(id)
    },
    ltrim: function () {
        return str.replace(/(^\s*)/g, '');
    },
    rtrim: function () {
        return str.replace(/(\s*$)/g, '');
    },
    trim: function () {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    formateString: function (str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    },
    bindTemplate: function (data, Template) {
        var html = template(Template, data);
        return html
    },
    artTemplate: function (str, data) {
        var render = template.compile(str);
        return render(data)
    }
}
$$ = new $$();