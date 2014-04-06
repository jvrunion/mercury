// pure.io js script for the left panel 

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
        // the className is not found
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

// data attribute logic

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

// Menu Builders


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

// jQuery selectors

$(document).ready(function() {
    // footer panel controls
    $('.footer-toggle-control').on('click', function() {
        $('footer').toggleClass('active-toggle');
        $('.footer-toggle-control i').toggleClass('fa-chevron-down');
    });
    // left panel controls
    $('.hybrid-no-left-panel').on('click', function() {
        $('.hybrid-no-left-panel i').toggleClass('fa-chevron-up');
        $('.combo-respond-left').toggleClass('combo-hide');
        $('.splash-combo-respond').toggleClass('combo-show');
        $('#layout.pure-hybrid .content .content-wrapper').toggleClass('combo-show');
        $('.hybrid-no-left-panel').toggleClass('combo-pin');
        $('footer').toggleClass('active');
        $('.footer-toggle-control').toggleClass('active');
    });

    var setActive = $('title');

//    if ($(setActive).has('Base')) {
//        alert($(setActive));
//    }

});