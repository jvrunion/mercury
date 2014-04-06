---
layout: page
title: Base
tags: [Base]
---

#Base

##Typography

To keep Pure lean and extensible, we do not add any typographic styles over the foundational layer provided by Normalize. This means that you get headings with different sizes, blockquotes, lists, definition lists, and more, but their styles are minimal and easy to override.

##Headings

Headings run from 1 to 6 in decreasing size. Font sizes are defined in <code>em</code>.

#Heading 1
##Heading 2
###Heading 3
####Heading 4
#####Heading 5
######Heading 6

##Lists

Lists come in different forms. There are unordered lists, ordered lists, and definition lists. Normalize provides basic styling and cross-browser consistency for these lists. You can style these further in your specific application. If you're looking to use lists to make menus, check out <a href="/menus/">Menu CSS</a>.

<ul>
    <li>list item 1</li>
    <li>list item 1
        <ul>
            <li>list item 2</li>
            <li>list item 2
                <ul>
                    <li>list item 3</li>
                    <li>list item 3</li>
                </ul>
            </li>
            <li>list item 2</li>
            <li>list item 2</li>
        </ul>
    </li>
    <li>list item 1</li>
    <li>list item 1</li>
</ul>

<ol>
    <li>list item 1</li>
    <li>list item 1
        <ol>
            <li>list item 2</li>
            <li>list item 2
                <ol>
                    <li>list item 3</li>
                    <li>list item 3</li>
                </ol>
            </li>
            <li>list item 2</li>
            <li>list item 2</li>
        </ol>
    </li>
    <li>list item 1</li>
    <li>list item 1</li>
</ol>

###Definition Lists</h3>

<dl>
    <dt>Definition term</dt>
    <dd>Definition description</dd>

    <dt>Definition term</dt>
    <dd>Definition description</dd>
    <dd>Definition description</dd>

    <dt>Definition term</dt>
    <dt>Definition term</dt>
    <dd>Definition description</dd>
</dl>

##Blockquotes

Blockquotes encompass text that is meant to represent a quotation. By default, blockquotes look like regular text, except that they are indented. This gives you the freedom to set your own styles on top. Here's a default one:

<blockquote>
    One small step for man, one giant leap for mankind.
</blockquote>

##Addresses

<address>
    <a href="https://github.com/tilomitra">Tilo Mitra</a><br>
    <a href="https://github.com/ericf">Eric Ferraiuolo</a><br>
    <a href="https://github.com/msweeney">Matt Sweeney</a><br>
    <a href="https://github.com/jconniff">Jeff Conniff</a><br>
</address>