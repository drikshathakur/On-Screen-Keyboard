$(document).ready(function () {
    window.onload = function() {
        let input = $("#inputbox").focus();
    }

    $('#keyboardBase').ready(function () {
        $(this).css({
            opacity: '1'
        })
        $(this).on('click', '.key.inkey', function () {
            let text = $(this).text();
            $("#inputbox").val($("#inputbox").val() + text).focus();
        });
    });

    $('#keyboardBase').on('keydown', function (event) {
        event.preventDefault();
        let keys = $('.key');
        let unicode = event.keyCode;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].getAttribute('data') == unicode) {
                keys[i].setAttribute('style',
                    'background: #39EC8B; border-color: #7d14ac; color: #141A73'
                    )
            } else {
                keys[i].setAttribute('style',
                    'background: #041226; transition: all 0.3s')
            }
            setTimeout(function () {
                keys[i].setAttribute('style',
                    'background: #041226; transition: all 0.3s')
            }, 1000)
        }
    });

    $('#keyboardBase').on('blur', function () {
        let keys = $('.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].setAttribute('style', 'background: #041226; transition: all 0.3s');
        }
    });
});
