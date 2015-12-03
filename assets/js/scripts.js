(function($) {
  $(document).ready(function() {

    // init tabs
    $('.tabs__link').on('click', function(event) {
      event.preventDefault();

      var $tab = $(this).parent('.tabs__toggle');

      if ($tab.hasClass('tabs__toggle--inactive')) {
        var $prev = $('.tabs__toggle--active');

        $('.tabs__item--' + $prev.attr('data-target')).removeClass('tabs__item--visible').addClass('tabs__item--hidden');
        $prev.removeClass('tabs__toggle--active').addClass('tabs__toggle--inactive');

        $('.tabs__item--' + $tab.attr('data-target')).removeClass('tabs__item--hidden').addClass('tabs__item--visible');
        $tab.removeClass('tabs__toggle--inactive').addClass('tabs__toggle--active');
      }
    });

    // add product to bag, update bag amount & counter
    $('#addtobag-submit').on('click', function(event) {
      event.preventDefault();

      var quantity = parseInt($('#addtobag-quantity').val()),
          price = parseFloat($('#price').html()),
          $amount = $('#bag-amount'),
          amount = parseFloat($amount.html()),
          $сount = $('#bag-count'),
          count = parseInt($сount.html());

      if (quantity) {
        $amount.html((amount + price * quantity).toFixed(2));
        $сount.html(count + quantity);
      }
    });

  })
}(jQuery));
