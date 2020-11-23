/*global $, window*/
$(window).scroll(function () {
	"use strict";
	if ($(window).scrollTop() >= 700) {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
	}
});



if ($(window).scrollTop() >= 700) {
	$("nav").addClass("sticky");
} else {
	$("nav").removeClass("sticky");
}