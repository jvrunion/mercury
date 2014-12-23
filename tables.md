---
layout: page
title: Tables
tags: [Tables]
---

#TABLES <i class="fa fa-table"></i>

<div>
    <div>
        <h2 id="default-table" class="tables-header">Default Table<a href="#default-table" class="content-link"></a></h2>
        <p>
            To style an HTML table, add the <code>pure-table</code> classname. This class adds padding and borders to table elements, and emphasizes the header.
        </p>
        <table class="pure-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
        <h2 id="bordered-table" class="tables-header">Bordered Table<a href="#bordered-table" class="content-link"></a></h2>
        <p>
            To add horizontal and vertical borders to all cells, add the <code>pure-table-bordered</code> classname to the <code>&lt;table&gt;</code> element.
        </p>
        <table class="pure-table pure-table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
        <h2 id="table-with-horizontal-borders" class="tables-header">Table with Horizontal Borders<a href="#table-with-horizontal-borders" class="content-link"></a></h2>
        <p>
            If you prefer horizontal lines only, add the <code>pure-table-horizontal</code> classname to the <code>&lt;table&gt;</code> element.
        </p>
        <table class="pure-table pure-table-horizontal">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
        <h2 id="striped-table" class="tables-header">Striped Table<a href="#striped-table" class="content-link"></a></h2>
        <p>
            Large tables are easier to parse visually if rows are easily distinguishable. Adding the <code>pure-table-odd</code> class name to every other <code>&lt;tr&gt;</code> element changes the background of the row and creates a zebra-styled effect.
        </p>
        <p>
            <b>Note:</b> In browsers which support the CSS3 <a href="http://caniuse.com/#search=nth-child"><code>nth-child</code> pseudo selector</a> a simpler approach can be used. The <code>pure-table-striped</code> classname can be added to the <code>&lt;table&gt;</code> element and the zebra-styled striping will happen automatically. This approach will <em>not</em> work in Internet Explorer 8 or lower.
        </p>
        <table class="pure-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr class="pure-table-odd">
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ford</td>
                    <td>Focus</td>
                    <td>2008</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>5</td>
                    <td>Nissan</td>
                    <td>Sentra</td>
                    <td>2011</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>BMW</td>
                    <td>M3</td>
                    <td>2009</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>7</td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Kia</td>
                    <td>Soul</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>