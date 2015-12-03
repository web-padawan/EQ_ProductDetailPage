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

  })
}(jQuery));
