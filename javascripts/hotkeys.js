$(function() {
  var firstmove = true;
  $(document).bind('keydown', 'j', function(){
    if (firstmove) { firstmove = false; $('#firstmove').focus(); return; }
    $(".move:focus").closest('li').next().find('a.move').focus();
  })
  $(document).bind('keydown', 'k', function(){      
    if (firstmove) { firstmove = false; $('#firstmove').focus(); return; }
    $(".move:focus").closest('li').prev().find('a.move').focus();
  })
    $(document).bind('keydown', 'ctrl+[', function(){      
        document.location.href = '/';
    })
  $('.move').click(function() {
    this.focus();
  });
});

})(jQuery);
