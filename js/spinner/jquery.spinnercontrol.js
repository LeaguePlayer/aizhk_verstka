$(document).ready(function(){

    var startNumber = 120;
    var sid;

    $('.price_slider').each(function(){

        sid++;

        $(this).noUiSlider({
             range: [0,150]
            ,start: [startNumber]
            ,handles: 1
            ,step: 1
            ,slide: function(){
                $('.calc').each(function(){
                    $(this).find('.ValueDisplay').val(Math.round($(this).find('.price_slider').val(), 2));
                });
            }
        });
    });

    $('.SpinnerControl').each(function(){

        $(this).find('.ValueDisplay').val(startNumber);

        $(this).find('.RightButton').click(function(){
            var current = parseInt($(this).parent().find('.ValueDisplay').val());
            $(this).parent().find('.ValueDisplay').val(current+1);
             $(this).find('.price_slider').val(current+1);
        });

        $(this).find('.LeftButton').click(function(){
            var current = parseInt($(this).parent().find('.ValueDisplay').val());
            $(this).parent().find('.ValueDisplay').val(current-1);
            $(this).find('.price_slider').val(current-1);
        });

    });
    

});