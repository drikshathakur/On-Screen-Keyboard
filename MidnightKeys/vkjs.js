$(document).ready(function () {
  $("#inputbox").focus();

  $('#keyboardBase').css({
      opacity: '1'
  });

  // Handling key press
  $('#keyboardBase').on('click', '.key.inkey', function () {
      let text = $(this).text();
      if ($(this).hasClass('space')) {
          text = ' ';
      }
      $("#inputbox").val($("#inputbox").val() + text).focus();
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

  // Handling Shift
  let shiftActive = false;
  $('#keyboardBase').on('mousedown', '.key.shift', function (e) {
      e.preventDefault();
      shiftActive = !shiftActive;
      $(this).toggleClass('active', shiftActive);
      // Toggle uppercase if Shift is active, otherwise toggle based on Caps Lock
      $('#keyboardBase').toggleClass('uppercase', shiftActive || capsLockActive);
  });

  // Handling Backspace
  $('#keyboardBase').on('click', '.key.delete', function () {
      let inputVal = $("#inputbox").val();
      $("#inputbox").val(inputVal.slice(0, -1)).focus();
  });

  // Handling Enter
  $('#keyboardBase').on('click', '.key.return', function () {
      $("#inputbox").val($("#inputbox").val() + "\n").focus();
  });

  // Highlighting pressed key
  $('#keyboardBase').on('keydown', function (event) {
      event.preventDefault();
      let keyCode = event.keyCode;
      let keyElement = $('[data="' + keyCode + '"]');
      keyElement.addClass('highlight');
      setTimeout(function () {
          keyElement.removeClass('highlight');
      }, 1000);
  });

  // Show emoji panel when clicking on emoji button
$('#showEmojiPanel').on('click', function() {
  $('#emojiPanel').toggle();
});

// Insert selected emoji into the input field
$('.emoji-btn').on('click', function() {
  let emoji = $(this).data('emoji');
  let inputVal = $("#inputbox").val();
  $("#inputbox").val(inputVal + emoji).focus();
  $('#emojiPanel').hide(); // Hide emoji panel after selecting
});


  // Resetting key styles on blur
  $('#keyboardBase').on('blur', function () {
      $('.key').removeClass('highlight');
  });
});
