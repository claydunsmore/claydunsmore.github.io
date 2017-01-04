/**
 * Created by User on 12/28/2016.
 */

$(function(){

    // email/phone cleass hover effect
    $('a.phone, a.email').on('mouseover', function(){
        $(this).animate({fontSize: "1.05em"});
    });
    $('a.phone, a.email').on('mouseout', function(){
        $(this).animate({fontSize: "1em"});
    });

    // Stop the carousel
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});
