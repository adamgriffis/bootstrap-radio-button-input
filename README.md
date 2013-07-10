bootstrap-radio-button-input
============================

Jquery plugin using bootstrap's radio button to implement a radio input like JQuery UI's.

JQuery UI and Bootstrap don't work well together. In particular, JQuery UI and Bootstrap both implement the "button" JQuery function, so anything in the "button" family of JQuery UI won't work. Normally this isn't too much of a problem, but one nice feature of JQuery UI is the radio button implementation which allows using radio buttons in a form, which bootstrap's normal radio button implementation does not. 

This plugin seeks to fill that gap, when it is pointed at an existing radio input set (which should be set up similar to those used by the JQuery UI radio button set) it will build a bootstrap style radio button set which will keep the underlying radio input in sync. 
