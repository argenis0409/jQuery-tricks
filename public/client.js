$(function() {

        $(".add-item").on('click', function(event) {
              event.preventDefault();
          var listItem = $('.item-input').val()
              var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
        $('.shopping-list').append(itemHtml);
      
      });
  
        $(".shopping-list").on('click', '.item-remove', function(event) {
        
        var target = event.currentTarget;	
        
        $(target).parent().remove();
        
        });
  
        $(".shopping-list").on('click', '.item-check', function(event) {
        
        var target = event.currentTarget;
        $(target).toggleClass('complete')
        });
      
    });