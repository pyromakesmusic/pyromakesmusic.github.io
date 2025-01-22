---
layout: page
title: P¥RO || Powered Exoskeleton Development
---

Summary
=======

Bionic powered exoskeletons represent an area of significant potential development with respect to both software and
hardware. 

From the hardware angle, existing exoskeletons are often bulky, with few degrees of freedom and major 
restrictions on user movement. Developing a chassis that can deliver augmentations in power, force, speed, or stability 
is a non-trivial task. Additionally, selecting actuators that are lightweight and low-profile while still fulfilling
desired operational characteristics is a potentially complex problem involving numerous tradeoffs. Selecting sensors
that can provide the right kinds of raw signal necessary for control is another problem strongly coupled with both of those.

In terms of software, any set of sensors and actuators will require control logic, in addition to digital signal
processing to ensure the cleanest and most responsive performance. With larger numbers of actuators and sensors, the
problem of coordinating action between all the elements of the exoskeleton grows in complexity. Big data approaches
involving machine learning are a potential aid to this problem, but will likely require tuning and a good deal of trial 
and error to find something both effective and computationally efficient.

Gallery
-------

Fluid muscles, sometimes called McKibben muscles, use a flexible tube constrained by a woven flexible braid structure
that shortens whenever it widens, much like a Chinese finger trap. The pressurization of the tube inside the weave
causes the tube to expand, and consequently shorten, with a given predictable force-pressure relationship for a
particular setup and set of elements. These types of actuators can be highly biomimetic, conforming to the shape of the 
user's body. I created a software library designed to use these types of actuators with a particular structured data
file (a CSV at the moment) that allows the library to calculate various forces given information about a muscle.
![Diagram of a basic fluid muscle](/assets/images/mckibben.png)

The Klampt library allows robot hardware elements, called "links", to be parents of other links. A parent link can have
multiple child links, so the most straightforward design for an exoskeleton is a tree, with the head as the base link.
![Exoskeleton logical structure](/assets/images/X001_structure.png)

Klampt allows the use of meshes for both visualization and collision. For early prototyping, even relatively simple
meshes can help to establish that chassis movement is happening in the right directions and at approximately the correct
angles.
![Early chassis design](/assets/images/chassis.png)