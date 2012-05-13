/*global $:false, jQuery:false */
var DS = (function() {
  var _utils,
      _handlers;

  _utils = {
    PubSub : {

    },
    PersistentHeader : {
      init :  function () {
        var clonedHeaderRow;
        $(".persist-area").each(function() {
          clonedHeaderRow = $(".persist-header", this);
          clonedHeaderRow
            .before(clonedHeaderRow.clone())
            .css("width", clonedHeaderRow.width())
            .addClass("floatingHeader");
         });
      },
      UpdateTableHeaders : function () {
        $(".persist-area").each(function() {
          var el             = $(this),
          offset         = el.offset(),
          scrollTop      = $(window).scrollTop(),
          floatingHeader = $(".floatingHeader", this);
          if (scrollTop > offset.top) {
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
  DS.Utils.PersistentHeader.init();
  $('.changetheme').on( 'click', '.theme', function () {

    var $body = $('body'),
        oldClasses = $body.attr('class');
    $('.changetheme').find('.theme').removeClass('active');
    $(this).addClass('active');
    $body.removeClass(oldClasses);
    $body.addClass($(this).data('theme') + ' clearfix');
  });
  $('.changefonth1').on( 'click', '.theme', function () {

    var $h1 = $('h1'),
        oldClasses = $h1.attr('class');
    $('.changefonth1').find('.theme').removeClass('active');
    $(this).addClass('active');
    $h1.removeClass(oldClasses);
    $h1.addClass($(this).data('font'));
  });
  $('.changefontp').on( 'click', '.theme', function () {

    var $p = $('p'),
        oldClasses = $p.attr('class');
    $('.changefontp').find('.theme').removeClass('active');
    $(this).addClass('active');
    $p.removeClass(oldClasses);
    $p.addClass($(this).data('font'));
  });

  $('.sp-circle-link').on('click', function () {
    $('#intro').fadeOut(2000);
    return false;
  });
});

$(window)
    .scroll(DS.Utils.PersistentHeader.UpdateTableHeaders)
    .trigger("scroll");