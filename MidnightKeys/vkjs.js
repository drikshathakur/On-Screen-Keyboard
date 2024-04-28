$(document).ready(function () {
    window.onload = function () {
        let input = $("#inputbox").focus();
    }
    
    $('#keyboardBase').ready(function () {
        $(this).css({
            opacity: '1'
        })
        $(this).on('click', '.key.inkey', function () {
            let text = $(this).text();
            // Check if the clicked key is space
            if (text === 'Space') {
                text = ' ';
            }
            $("#inputbox").val($("#inputbox").val() + text).focus();
        });
    });

    // Handling click events for the CapsLock key to toggle its state
    let capsLockActive = false;
    $('#keyboardBase').on('click', '.key.capslock', function () {
        capsLockActive = !capsLockActive;
        $(this).toggleClass('active', capsLockActive);
        // Convert letters to uppercase if CapsLock is active
        $('.key.inkey').each(function () {
            let letter = $(this).text();
            if (capsLockActive && letter >= 'a' && letter <= 'z') {
                $(this).text(letter.toUpperCase());
            } else {
                $(this).text(letter.toLowerCase());
            }
        });
    });

    // Handling click events for the Backspace key
    $('#keyboardBase').on('click', '.key.delete', function () {
        let inputVal = $("#inputbox").val();
        $("#inputbox").val(inputVal.slice(0, -1)).focus();
    });

    // Handling click events for the Enter key
    $('#keyboardBase').on('click', '.key.return', function () {
        $("#inputbox").val($("#inputbox").val() + "\n").focus();
    });

    // Handling keydown events for highlighting pressed keys
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

    // Resetting key styles on blur
    $('#keyboardBase').on('blur', function () {
        let keys = $('.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].setAttribute('style', 'background: #041226; transition: all 0.3s');
        }
    });
});

