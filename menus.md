---
layout: page
title: Menus
tags: [Menus]
---

#MENUS <i class="fa fa-bars"></i>

####HORIZONTAL MENU

<div class="pure-menu pure-menu-open pure-menu-horizontal">
    <a href="#" class="pure-menu-heading">Site Title</a>
    <ul>
        <li><a href="#">Home</a></li>
        <li class="pure-menu-selected"><a href="#">Flickr</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Finance</a></li>
        <li class="pure-menu-disabled"><a href="#">Disabled</a></li>
    </ul>
</div>

####VERTICAL MENU

<div class="pure-menu pure-menu-open">
    <a href="#" class="pure-menu-heading">Site Title</a>
    <ul>
        <li class="pure-menu-selected"><a href="#">Home</a></li>
        <li><a href="#">Flickr</a></li>
        <li><a href="#">Messenger</a></li>
        <li class="pure-menu-heading">More Sites</li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Finance</a></li>
        <li class="pure-menu-disabled"><a href="#">Disabled</a></li>
    </ul>
</div>

####ADD DROPDOWNS TO MENUS

Adding dropdowns to menus requires the use of JavaScript. The <code>Y.Menu</code> module adds dropdown functionality and the ability to create JavaScript menus. It uses <code>csslist</code> to style these menus, so they look identical.

<div id="horizontal-menu">
    <a href="#" class="pure-menu-heading">Site Title</a>
    <ul id="std-menu-items">
        <li class="pure-menu-selected"><a href="#">Flickr</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Finance</a></li>
        <li class="pure-menu-separator"></li>
        <li>
            <a href="#">Other</a>
            <ul>
                <li class="pure-menu-heading">More Sites!</li>
                <li class="pure-menu-separator"></li>
                <li><a href="#">Autos</a></li>
                <li><a href="#">Flickr</a></li>
                <li><a href="#">Answers</a></li>
                <li>
                    <a href="#">Even More</a>
                    <ul>
                        <li><a href="#">Horoscopes</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">OMG</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>


####FIXED MENUS

Fixed menus can be created by adding the <code>pure-menu-fixed</code> class name to the wrapper. This will fix a menu to the top of the page.

<button class="pure-button" id="showFixedMenuBtn">
    Toggle Fixed Menu
</button>

<div id="fixed-menu" class="pure-menu pure-menu-horizontal pure-menu-fixed">
    <ul>
        <li class="pure-menu-selected"><a href="#">Flickr</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Finance</a></li>
    </ul>
</div>

####PAGINATOR

<ul class="pure-paginator">
    <li>
        <a class="pure-button prev" href="#">&#171;</a>
    </li>
    <li><a class="pure-button" href="#">1</a></li>
    <li><a class="pure-button pure-button-active" href="#">2</a></li>
    <li><a class="pure-button" href="#">3</a></li>
    <li><a class="pure-button" href="#">4</a></li>
    <li><a class="pure-button" href="#">5</a></li>
    <li><a class="pure-button next" href="#">&#187;</a></li>
</ul>