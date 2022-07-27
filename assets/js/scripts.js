(function (window, undefined) {
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */
  var basicPickr = $('.flatpickr-basic')
  if (basicPickr.length) {
    basicPickr.flatpickr();
  }

  $("#color_1").on("input", function () {
    let color = $(this).val();
    let el = $("#color_1_preview")[0];
    el.style.setProperty("background-color", color, 'important');
    el.style.setProperty("border-color", color, 'important');
  });
  $("#color_2").on("input", function () {
    let color = $(this).val();
    let el = $("#color_1_preview")[0];
    el.style.setProperty("color", color, 'important');
  })

  $("#color_3").on("input", function () {
    let color = $(this).val();
    let el = $("#color_2_preview")[0];
    el.style.setProperty("background-color", color, 'important');
    el.style.setProperty("border-color", color, 'important');
  });
  $("#color_4").on("input", function () {
    let color = $(this).val();
    let el = $("#color_2_preview")[0];
    el.style.setProperty("color", color, 'important');
  })

  $("#color_5").on("input", function () {
    let color = $(this).val();
    let el = $("#color_3_preview")[0];
    el.style.setProperty("background-color", color, 'important');
    el.style.setProperty("border-color", color, 'important');
  });
  $("#color_6").on("input", function () {
    let color = $(this).val();
    let el = $("#color_3_preview")[0];
    el.style.setProperty("color", color, 'important');
  })
})(window);
