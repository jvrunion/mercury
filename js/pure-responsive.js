
/*  Pure script to assign variables to
 *  floating left panel to mimic IOS
 *  style navigation
 */

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

/*  setting data attributes to
 *  be used late with a data store
 */

var dataProvider = document.querySelectorAll("[data-provider]");
var dataEvent = document.querySelectorAll("[data-event]");
var dataService = document.querySelectorAll("[data-service]");

for (var i = dataProvider.length - 1; i >= 0; i--) {
    dataProvider[i].addEventListener('click', function(e) {
        e.preventDefault();
        var makeProviderDynamic = this.innerHTML;
        alert("I have logged this elements innerHTML in console as " + makeProviderDynamic);
        console.log(makeProviderDynamic);
    });
}

for (var i = dataEvent.length - 1; i >= 0; i--) {
    dataEvent[i].addEventListener('click', function(e) {
        e.preventDefault();
        var makeEventDynamic = this.innerHTML;
        alert("I have logged this elements innerHTML in console as " + makeEventDynamic);
        console.log(makeEventDynamic);
    });
}

for (var i = dataService.length - 1; i >= 0; i--) {
    dataService[i].addEventListener('click', function(e) {
        e.preventDefault();
        var makeServiceDynamic = this.innerHTML;
        alert("I have logged this elements innerHTML in console as " + makeServiceDynamic);
        console.log(makeServiceDynamic);
    });
}

/*  YUI menu constructor scripts
 *  @ TODO: need to make call only from
 *  the menus page
 */

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

    /*
     *  set active left panel tabs
     *  using window location to determine
     *  active state
     */

    var lowerTrigger = $('.footer-toggle-control');

    $(lowerTrigger).on('click', function() {
        var footerNode = $('footer');
        var footerControlIcon = $('.footer-toggle-control i');

        $(footerNode).toggleClass('active-toggle');
        $(footerControlIcon).toggleClass('fa-chevron-down');
    });

    /*
     *  set active left panel tabs
     *  using window location to determine
     *  active state
     */

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

    /*
     *  set active left panel tabs
     *  using window location to determine
     *  active state
     */

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