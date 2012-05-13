/*global $:false, jQuery:false */
var DS = (function() {
  var _utils,
      _handlers;

  _utils = {
    PubSub : {

    },
    PersistentHeader : {
      init :  function () {
      },
      UpdateTableHeaders : function () {
        $("#header").each(function() {
          var el             = $(this),
          offset         = el.offset(),
          scrollTop      = $(window).scrollTop(),
          floatingHeader = $(".fake-header", this);
          if (scrollTop > offset.top + 160) {
            floatingHeader.css({
              "visibility": "visible"
            });
          } else {
            floatingHeader.css({
              "visibility": "hidden"
            });
          }
        });
      }
    }
  };

  return {
    Utils : _utils
  };
}());

$(document).ready( function () {
  $('#da-slider').cslider();
  DS.Utils.PersistentHeader.init();
  $('.sp-circle-link').on('click', function () {
    $('#intro').fadeOut(2000);
    return false;
  });
});

$(window)
    .scroll(DS.Utils.PersistentHeader.UpdateTableHeaders)
    .trigger("scroll");