if (
    window.hasOwnProperty('jQuery') && 'function' === typeof window.jQuery &&
    window.hasOwnProperty('_') && 'function' === typeof window._
) {
    (function ($, _) {
        function getScreenInfoText() {
            return window.outerWidth + 'px';
        }

        $(document).ready(function () {
            var win = $(window),
                body = $(document.body),
                info = $('<div>', {
                    id: 'nsi-info',
                    text: getScreenInfoText()
                }).appendTo(body);

            win.resize(_.throttle(function () {
                info.css({
                    left: win.width() / 2 - info.width() / 2
                }).text(getScreenInfoText());
            }, 250)).trigger('resize');
        });
    })(window.jQuery, window._);
}
