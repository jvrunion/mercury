---
layout: page
title: Grids
tags: [Grids]
---

#Boundary <i class="fa fa-desktop fade-in page-heading"></i>

A boundary refers to a block that is at the highest level in the DOM tree.  All of its children will be able to reset their block dimension in ratio to this parent block's declartaion.  This is usefull when defining small area's with meaningfull and targeted content.

Declares an area that exists as contstant to another area.

    <section class="boundary-three line-two">
        Your new boundary area.
    </section>

##Boundary 

###This class uses units of 1-5.

    Calculation: $base-width: percentage(64/320);
    
    Example: .boundary-two { width: $base-width * 2 }
 
##Line

###This class uses units of 1-8.

    Calculation: $base-height: percentage(80/480);
    
    Example: .line-two { height: $base-height * 2 }

##Edge

###Standard presentation box with paddings and margins.

    .edge {
        margin: 3.35% 5.35%;
        padding: 5.35% 3.35%;
    }