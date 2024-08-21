---
title: The Monotyper Manifesto
author: John Doe
date: August 2024
---

## Abstract

In this design, the use of monospace fonts and a monochrome color palette is deliberate to enhance clarity and legibility, especially in environments where precision and readability are paramount.
Monospace fonts, where each character occupies the same horizontal space, ensure uniformity and predictability in text alignment, making them ideal for coding interfaces, technical documentation, and tabular data displays.

The consistent spacing prevents text from becoming jumbled or misaligned, which can be critical when differentiating between similar-looking characters, such as '1' and 'l' or '0' and 'O'.
This uniformity contributes to an overall sense of order and structure within the design, aiding users in quickly scanning and understanding the information presented.

## The Basics

I mean, look at this lovely horizontal break:

<hr>

Or a plain old bulleted list:

* Banana
* Paper boat
* Cucumber
* Rocket

## Trees

It's nice to visualize trees.
This is a regular unordered list with a _tree_ class:

<ul class="tree">
<li>

**/dev/nvme0n1p2**

* usr                               
    * local                         
    * share                         
    * libexec                       
    * include                       
    * sbin                          
    * src                           
    * lib64                         
    * lib                           
    * bin                           
    * games                         
        * gamemode-simulate-game 
        * gamemoderun
        * gamemodelist
    * media                         
* media                             
* run                               
* tmp                               
</li>
</ul>

## Tables

We can use regular tables that automatically adjust to the monospace grid.
They're responsive. 

<table>
<thead>
  <tr>
    <th class="width-min">Name</th>
    <th class="width-auto">Dimensions</th>
    <th class="width-min">Position</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Boboli Obelisk</td>
    <td>1.41m &times; 1.41m &times; 4.87m</td>
    <td>43°45'50.78"N 11°15'3.34"E</td>
  </tr>
  <tr>
    <td>Pyramid of Khafre</td>
    <td>215.25m &times; 215.25m &times; 136.4m</td>
    <td>29°58'34"N 31°07'51"E</td>
  </tr>
</tbody>
</table>

Note that only one column is allowed to grow.

## ASCII Drawings

We can draw in `<pre>` tags using [box-drawing characters](https://en.wikipedia.org/wiki/Box-drawing_characters):

```
╭─────────────────╮
│ MONOSPACE ROCKS │
╰─────────────────╯
```

To have it stand out a bit more, we can wrap it in a `<figure>` tag, and why not also add a `<figcaption>`.

<figure>
<pre>
┌───────┐ ┌───────┐ ┌───────┐
│Actor 1│ │Actor 2│ │Actor 3│
└───┬───┘ └───┬───┘ └───┬───┘
    │         │         │    
    │         │  msg 1  │    
    │         │────────►│    
    │         │         │    
    │  msg 2  │         │    
    │────────►│         │    
┌───┴───┐ ┌───┴───┐ ┌───┴───┐
│Actor 1│ │Actor 2│ │Actor 3│
└───────┘ └───────┘ └───────┘</pre>
<figcaption>Example: Message passing.</figcaption>
</figure>

Let's go wild and draw a chart!

<figure><pre>
                  Things I have.
                                              ████ Usable
    │
15  │                                         ░░░░ Broken
    │
    │
12  │             ░            
    │             ░            
    │   ░         ░              
 9  │   ░         ░              
    │   ░         ░              
    │   ░         ░                    ░
 6  │   █         ░         ░          ░
    │   █         ░         ░          ░
    │   █         ░         █          ░
 3  │   █         █         █          ░
    │   █         █         █          ░
    │   █         █         █          ░
 0  └───▀─────────▀─────────▀──────────▀─────────────
      Socks     Jeans     Shirts   USB Drives
</pre></figure>
