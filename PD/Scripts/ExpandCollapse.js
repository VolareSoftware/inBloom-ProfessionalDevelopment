$(function () {
    var expander = $('.expand-collapse');
    expander.filter('.collapsed').next().hide();
    expander.filter('.expanded').next().show();
    expander.click(function () {
        $(this).toggleClass('expanded collapsed').next().slideToggle('fast', function () {           
            // hack to fix IE rendering issue where padding isn't applied correctly to toggled items until focus is moved elsewhere
            $('body').focus();
        });
    });
});