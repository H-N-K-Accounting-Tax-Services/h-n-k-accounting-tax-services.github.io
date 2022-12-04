// Start scrolling the banner carousel
(function() {
  $(function() {
    return $('.carousel').each(function() {
      return $(this).carousel({
        cycle: 5000
      });
    });
  });

}).call(this);
