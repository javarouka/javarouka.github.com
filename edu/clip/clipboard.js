;(function(exports, $) {

    if(!exports || !$) {
        return {};
    }

    var copiedText = 'copy to click',
        autoApplySelectMarker = '[data-require-clipboard]',
        copyInfo = $('<div style="position:absolute;">' + copiedText + '</div>'),
        clipboard = {},
        TOP = $(document.body),
        clipboardClaz = 'click-to-copy';

    clipboard.canCopyClipboard = function() {
        return !!(window.clipboardData && window.clipboardData.setData);
    };

    clipboard.clipboardTextIE = function(text, callback, fail) {
        try {
            if (window.clipboardData) {
                window.clipboardData.setData('Text', String(text || '').trim());
                return (callback || function(){ alert(text + '\n' + copiedText + '') })();
            }
        }
        catch(ignore) {}
    };

    clipboard.enableSelectable = function(content, markSelector) {

        (content || $("body"))
            .find(markSelector || autoApplySelectMarker).not('.clipboard-applied').each(function() {
                var target = $(this).addClass('clipboard-applied'),
                    clickToCopy = $('<i class="fa fa-copy ' + clipboardClaz + '" title="click to copy" style="cursor: pointer; margin-left: 3px;"></i>');
                clickToCopy.insertAfter(target);
            });
    };

    clipboard.selectText = function() {
        if (document.selection) {
            return function(containerSelector) {
                document.selection.empty();
                var target = containerSelector;
                if(typeof containerSelector === 'string') {
                    target = $(containerSelector);
                }
                if(target.size() < 1) {
                    return;
                }
                var range = document.body.createTextRange();
                range.moveToElementText(target[0]);
                range.select();
            }
        }
        else if (window.getSelection) {
            return function(containerSelector) {
                window.getSelection().removeAllRanges();
                var target = containerSelector;
                if(typeof containerSelector === 'string') {
                    target = $(containerSelector);
                }
                if(target.size() < 1) {
                    return;
                }
                var range = document.createRange();
                range.selectNode(target[0]);
                window.getSelection().addRange(range);
            }
        }
    }();

    (function initialize() {
        TOP.on('click', '.' + clipboardClaz,
            clipboard.canCopyClipboard() ? function (e) {
                var target = $(e.target).prev(),
                    text = target.text(),
                    timeId = copyInfo.data('hideTimeout');
                copyInfo.stop(true, true).show();
                if(timeId) {
                    clearTimeout(timeId);
                }
                clipboard.clipboardTextIE(text, function () {
                    copyInfo.css({
                        left: e.pageX,
                        top: e.pageY,
                        textAlign: 'center',
                        zIndex:999999999,
                        padding: '8px 10px',
                        'border-radius': '5px',
                        color: '#ccc',
                        backgroundColor: '#333'
                    }).html(text + '<br/>' + copiedText + '').appendTo('body').show();
                    copyInfo.data('hideTimeout', setTimeout(function() {
                        copyInfo.fadeOut(900);
                    }, 2000));
                });
            } : function (e) {
                clipboard.selectText($(e.target).prev());
            }
        );
    })();

    var _clipboard = exports.clipboard;

    clipboard.noConflict = function() {
        exports.clipboard = _clipboard;
        return this;
    };

    exports.clipboard = clipboard;

})(this, jQuery);