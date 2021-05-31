if (
    window.hasOwnProperty('jQuery') && 'function' === typeof window.jQuery &&
    window.hasOwnProperty('_') && 'function' === typeof window._
) {
    (function ($, _) {
        var win = $(window),
            newContent;

        function getScreenInfoText() {
            return window.outerWidth + '×' + window.outerHeight;
        }

        function getLeftSize() {
            return  newContent.offset().left + newContent.width();
        }

        $(document).ready(function () {
            newContent = $('#wp-admin-bar-new-content');
            if (newContent.length) {
                var body = $(document.body),
                    info = $('<div>', {
                        id: 'nsi-info',
                        text: getScreenInfoText()
                    }).appendTo(body);

                win.resize(_.throttle(function () {
                    info.css({
                        left: getLeftSize()
                    }).text(getScreenInfoText());
                }, 250)).trigger('resize');
            }
        });
    })(window.jQuery, window._);
}
