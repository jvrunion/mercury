
(function(window, document) {

    var layout = document.getElementById('layout'),
        menu = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }

        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));


var Y = YUI({
    fetchCSS: false,
    classNamePrefix: 'pure'
}).use('gallery-sm-menu', 'event-tap', 'node-base', function (Y) {

    var horizontalMenu = new Y.Menu({
        container: '#horizontal-menu',
        sourceNode: '#std-menu-items',
        orientation: 'horizontal',
        hideOnOutsideClick: false
    });

    horizontalMenu.render();
    horizontalMenu.show();

    Y.one('#showFixedMenuBtn').on('tap', function (e) {
        Y.one('#fixed-menu').toggleClass('pure-menu-open');
    });

});

$(document).ready(function() {

    var lowerTrigger = $('.footer-toggle-control');

    $(lowerTrigger).on('click', function() {
        var footerNode = $('footer');
        var footerControlIcon = $('.footer-toggle-control i');

        $(footerNode).toggleClass('active-toggle');
        $(footerControlIcon).toggleClass('fa-chevron-down');
    });


    $('.hybrid-no-left-panel').on('click', function() {
        $('.hybrid-no-left-panel i').toggleClass('fa-chevron-up');
        $('.combo-respond-left').toggleClass('combo-hide');
        $('.splash-combo-respond').toggleClass('combo-show');
        $('#layout.pure-hybrid .content .content-wrapper').toggleClass('combo-show');
        $('.hybrid-no-left-panel').toggleClass('combo-pin');
        $('footer').toggleClass('active');
        $('.footer-toggle-control').toggleClass('active');
        $('#layout').toggleClass('full-width');
        $('.hybrid-combo-article').toggleClass('full-width');
    });

    $('.combo-pin').on('click', function(){
        $('.content-wrapper').toggleClass('full-width');
        $(this).toggleClass('pin');
    });


    function checkAttr (){

        var attr = window.location.pathname;
        var dashNode = '.dash-link';
        var dashContext = 'active';

        if (attr === '/base.html') {
            if ($(dashNode).hasClass(dashContext)) {
                $(dashNode).removeClass(dashContext);
            }
            $('.base').addClass(dashContext);
        }
        if (attr === '/grids.html') {
            if ($(dashNode).hasClass(dashContext)) {
                $(dashNode).removeClass(dashContext);
            }
            $('.grids').addClass(dashContext);
        }
        if (attr === '/menus.html') {
            if ($(dashNode).hasClass(dashContext)) {
                $(dashNode).removeClass(dashContext);
            }
            $('.menus').addClass(dashContext);
        }
        if (attr === '/index.html') {
            if ($(dashNode).hasClass(dashContext)) {
                $(dashNode).removeClass(dashContext);
            }
            $('.dashboard').addClass(dashContext);
        }

    } checkAttr();

});