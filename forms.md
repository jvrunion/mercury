---
layout: page
title: Forms
tags: [Forms]
---

#FORMS <i class="fa fa-check-square fade-in page-heading"></i>

<div id="main">
    <div class="content">
        <h2 id="default-form" class="forms-heading">Default Form
            <a href="#default-form" class="content-link"></a>
        </h2>
        <p>
            To create a default inline form, add the
            <code>pure-form</code>classname to any
            <code>&lt;form&gt;</code>element.
        </p>
        <form class="pure-form">
            <fieldset>
                <legend>A compact inline form</legend>

                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">

                <label for="default-remember">
                    <input id="default-remember" type="checkbox">Remember me
                </label>

                <button type="submit" class="pure-button pure-button-primary">Sign in</button>
            </fieldset>
        </form>

        <h2 id="stacked-form" class="forms-heading">Stacked Form
            <a href="#stacked-form" class="content-link"></a>
        </h2>
        <p>
            To create a stacked form with input elements below the labels, add the
            <code>pure-form-stacked</code>classname to a
            <code>&lt;form&gt;</code>element alongside
            <code>pure-form</code>.
        </p>
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <legend>A Stacked Form</legend>

                <label for="stacked-email">Email</label>
                <input id="stacked-email" type="email" placeholder="Email">

                <label for="stacked-password">Password</label>
                <input id="stacked-password" type="password" placeholder="Password">

                <label for="stacked-state">State</label>
                <select id="stacked-state">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                </select>

                <label for="stacked-remember" class="pure-checkbox">
                    <input id="stacked-remember" type="checkbox">Remember me
                </label>

                <button type="submit" class="pure-button pure-button-primary">Sign in</button>
            </fieldset>
        </form>

        <h2 id="aligned-form" class="forms-heading">Aligned Form
            <a href="#aligned-form" class="content-link"></a>
        </h2>
        <p>
            To create an aligned form, add the
            <code>pure-form-aligned</code>classname to a
            <code>&lt;form&gt;</code>element alongside
            <code>pure-form</code>. In an aligned form, the labels are right-aligned against the form input controls, but on smaller screens revert to a <a href="#stacked-form">stacked form</a>.
        </p>
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-control-group">
                    <label for="aligned-name">Username</label>
                    <input id="aligned-name" type="text" placeholder="Username">
                </div>

                <div class="pure-control-group">
                    <label for="aligned-password">Password</label>
                    <input id="aligned-password" type="password" placeholder="Password">
                </div>

                <div class="pure-control-group">
                    <label for="aligned-email">Email Address</label>
                    <input id="aligned-email" type="email" placeholder="Email Address">
                </div>

                <div class="pure-control-group">
                    <label for="aligned-foo">Supercalifragilistic Label</label>
                    <input id="aligned-foo" type="text" placeholder="Enter something here...">
                </div>

                <div class="pure-controls">
                    <label for="aligned-cb" class="pure-checkbox">
                        <input id="aligned-cb" type="checkbox">I've read the terms and conditions
                    </label>

                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </div>
            </fieldset>
        </form>

        <h2 id="multi-column-form-with-pure-grids" class="forms-heading">Multi-Column Form (with Pure Grids)
            <a href="#multi-column-form-with-pure-grids" class="content-link"></a>
        </h2>
        <p>
            To create multi-column forms, include your form elements within a <a href="/grids/">Pure Grid</a>. The following example uses Pure Grids with a stacked form.
        </p>
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <legend>Legend</legend>

                <div class="pure-g">
                    <div class="pure-u-1 pure-u-med-1-3">
                        <label for="multi-first-name">First Name</label>
                        <input id="multi-first-name" type="text">
                    </div>

                    <div class="pure-u-1 pure-u-med-1-3">
                        <label for="multi-last-name">Last Name</label>
                        <input id="multi-last-name" type="text">
                    </div>

                    <div class="pure-u-1 pure-u-med-1-3">
                        <label for="multi-email">E-Mail</label>
                        <input id="multi-email" type="email" required="">
                    </div>

                    <div class="pure-u-1 pure-u-med-1-3">
                        <label for="multi-city">City</label>
                        <input id="multi-city" type="text">
                    </div>

                    <div class="pure-u-1 pure-u-med-1-3">
                        <label for="multi-state">State</label>
                        <select id="multi-state" class="pure-input-1-2">
                            <option>AL</option>
                            <option>CA</option>
                            <option>IL</option>
                        </select>
                    </div>
                </div>

                <label for="multi-terms" class="pure-checkbox">
                    <input id="multi-terms" type="checkbox">I've read the terms and conditions
                </label>

                <button type="submit" class="pure-button pure-button-primary">Submit</button>
            </fieldset>
        </form>

        <h2 id="grouped-inputs" class="forms-heading">Grouped Inputs
            <a href="#grouped-inputs" class="content-link"></a>
        </h2>
        <p>
            To group sets of text-based input elements, wrap them in a
            <code>&lt;fieldset&gt;</code>element with a
            <code>pure-group</code>classname. Grouped inputs work well for sign-up forms and look natural on mobile devices.
        </p>
        <form class="pure-form">
            <fieldset class="pure-group">
                <input type="text" class="pure-input-1-2" placeholder="Username">
                <input type="text" class="pure-input-1-2" placeholder="Password">
                <input type="email" class="pure-input-1-2" placeholder="Email">
            </fieldset>

            <fieldset class="pure-group">
                <input type="text" class="pure-input-1-2" placeholder="Another Group">
                <input type="text" class="pure-input-1-2" placeholder="More Stuff">
            </fieldset>

            <button type="submit" class="pure-button pure-input-1-2 pure-button-primary">Sign in</button>
        </form>

        <h2 id="input-sizing" class="forms-heading">Input Sizing
            <a href="#input-sizing" class="content-link"></a>
        </h2>
        <p>
            Input elements have fluid width sizes in a syntax that is similar to <a href="/grids/">Pure Grids</a>. You can apply a
            <code>pure-input-*</code>class to these elements.
        </p>
        <form class="pure-form">
            <input class="pure-input-1" type="text" placeholder=".pure-input-1">
            <br>
            <input class="pure-input-2-3" type="text" placeholder=".pure-input-2-3">
            <br>
            <input class="pure-input-1-2" type="text" placeholder=".pure-input-1-2">
            <br>
            <input class="pure-input-1-3" type="text" placeholder=".pure-input-1-3">
            <br>
            <input class="pure-input-1-4" type="text" placeholder=".pure-input-1-4">
            <br>
        </form>

        <p>
            You can control input sizing even further by wrapping them in grid containers. In the example below, the
            <code>&lt;input&gt;</code>elements have a
            <code>pure-input-1</code>class, but are wrapped in a
            <code>&lt;div&gt;</code>with a specific grid class.
        </p>
        <form class="pure-form pure-g">
            <div class="pure-u-1-4">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-4">
            </div>
            <div class="pure-u-3-4">
                <input class="pure-input-1" type="text" placeholder=".pure-u-3-4">
            </div>

            <div class="pure-u-1-2">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
            </div>
            <div class="pure-u-1-2">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
            </div>

            <div class="pure-u-1-8">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-8">
            </div>
            <div class="pure-u-1-8">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-8">
            </div>
            <div class="pure-u-1-4">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-4">
            </div>
            <div class="pure-u-1-2">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
            </div>

            <div class="pure-u-1-5">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-5">
            </div>
            <div class="pure-u-2-5">
                <input class="pure-input-1" type="text" placeholder=".pure-u-2-5">
            </div>
            <div class="pure-u-2-5">
                <input class="pure-input-1" type="text" placeholder=".pure-u-2-5">
            </div>

            <div class="pure-u-1">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1">
            </div>
        </form>

        <h2 id="required-inputs" class="forms-heading">Required Inputs
            <a href="#required-inputs" class="content-link"></a>
        </h2>
        <p>
            To mark a form control as required, add the
            <code>required</code>attribute.
        </p>
        <form class="pure-form">
            <input type="email" placeholder="Requires an email" required="">
        </form>

        <h2 id="disabled-inputs" class="forms-heading">Disabled Inputs
            <a href="#disabled-inputs" class="content-link"></a>
        </h2>
        <p>
            To disable a form control, add the
            <code>disabled</code>attribute.
        </p>
        <form class="pure-form">
            <input type="text" placeholder="Disabled input here..." disabled="">
        </form>

        <h2 id="read-only-inputs" class="forms-heading">Read-Only Inputs
            <a href="#read-only-inputs" class="content-link"></a>
        </h2>
        <p>
            To make a form input read-only, add the
            <code>readonly</code>attribute. The difference between
            <code>disabled</code>and
            <code>readonly</code>is read-only inputs are still focusable. This allows people to interact with the input and select its text, whereas disabled controls are not interactive.
        </p>
        <form class="pure-form">
            <input type="text" value="Readonly input here..." readonly="">
        </form>

        <h2 id="rounded-inputs" class="forms-heading">Rounded Inputs
            <a href="#rounded-inputs" class="content-link"></a>
        </h2>
        <p>
            To display a form control with rounded corners, add the
            <code>pure-input-rounded</code>classname.
        </p>
        <form class="pure-form">
            <input type="text" class="pure-input-rounded">
            <button type="submit" class="pure-button">Search</button>
        </form>

        <h2 id="checkboxes-and-radios" class="forms-heading">Checkboxes and Radios
            <a href="#checkboxes-and-radios" class="content-link"></a>
        </h2>
        <p>
            To normalize and align checkboxes and radio inputs, add the
            <code>pure-checkbox</code>or
            <code>pure-radio</code>classname.
        </p>
        <form class="pure-form">
            <label for="checkbox-radio-option-one" class="pure-checkbox">
                <input id="checkbox-radio-option-one" type="checkbox" value="">Here's option one.
            </label>

            <label for="checkbox-radio-option-two" class="pure-radio">
                <input id="checkbox-radio-option-two" type="radio" name="optionsRadios" value="option1" checked="">Here's a radio button. You can choose this one..
            </label>

            <label for="checkbox-radio-option-three" class="pure-radio">
                <input id="checkbox-radio-option-three" type="radio" name="optionsRadios" value="option2">..Or this one!
            </label>
        </form>
    </div>
</div>