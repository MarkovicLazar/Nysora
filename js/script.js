function showSubMenu(x) {
    for (i = 1; i <= 7; i++) {
        $('#sm' + i.toString()).hide();
    }
    $('#sm' + x.toString()).show();
}
function menuClick(x) {
    let menu = $('#menu')
    let nav = $('nav')
    menu.offset({top: (menu.position().top + Math.floor(menu.height() / 2))})
    nav.animate({height: 300}, "fast")
    nav.addClass('active')
    showSubMenu(x)
}
$(function () {
    let menu = $('#menu')
    let nav = $('nav')
    $(document).on('click', function(event) {
       if (!$(event.target).closest('nav').length) {
           if (nav.hasClass('active')) {
               nav.animate({height: 60}, "fast");
               nav.removeClass('active');
               $('.nav-submenu').hide();
           }
       }
    });
});
