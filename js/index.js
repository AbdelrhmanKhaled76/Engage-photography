'use strict'
/// <reference types="../@types/jquery" />

AOS.init();


$(document).ready(function(){
    $('.news').owlCarousel({
        loop : true,
        margin : 25,
        items : 1,
        responsive : {
            767 : {
                items : 2
            },
            991 : {
                items : 3
            }
        }
    });
});

$(document).ready(function(){
    $('.card-images').owlCarousel({
    loop: true,
    margin: 10,
    dots:true,
    items: 1,
    slideTransition : `linear`,
    smartSpeed : 500,
    startPosition: 2
    });
});





function ourGoals(){
    
    $('.our-methods').hide();
    $('.our-goal').show();
    
    
    $('#goalsBtn').on('click', ()=>{
        if ($('#goalsBtn').hasClass('active')) {
            return;
        }
        $('.our-methods').slideUp(500, ()=>{
            $('.our-goal').slideDown(500);
        });
        $('#goalsBtn').addClass('active');
        $('#methodsBtn').removeClass('active');
    });
    
    
    $('#methodsBtn').on('click', ()=>{
        if ($('#methodsBtn').hasClass('active')) {
            return;
        }
        $('.our-goal').slideUp(500, ()=>{
            $('.our-methods').slideDown(500);
        });
        $('#methodsBtn').addClass('active');
        $('#goalsBtn').removeClass('active');
    });

}

ourGoals();




function searchMenu(){
    $('.search-link').on('click', (e)=>{
        e.stopPropagation();
        $('#layer').fadeIn(500).css({
            'display' : 'flex'
        });
        $('#main-search').focus();
    });
    $(document).on('click', (e)=>{
        if (!$(e.target).closest('#main-search,#search-result').length) {
            $('#layer').fadeOut(500);
        }
    });
    $('#main-search').on('click', (e) => {
        e.stopPropagation(); // Prevents click event from bubbling up to the document
    });
}

searchMenu();


function gallary(){
    $('.gallary-link').on('click', (e)=>{
        $(e.target).siblings().removeClass('activated');
        $(e.target).addClass('activated');
        if(e.target.innerHTML === "show all"){
            $('.photo').fadeIn(500);
        }
        else if(e.target.innerHTML === "landscape"){
            $('.photo').fadeOut(500);
        }
        else if(e.target.innerHTML === "mountains"){
            $('.photo').fadeIn(0);
            $('.photo').not('#4').fadeOut(500);
        }
        else if (e.target.innerHTML === "nature"){
            $('.photo').fadeIn(0);
            $('.photo').not('#1, #3').fadeOut(500);
        }
        else if (e.target.innerHTML === "photography"){
            let src = $('#5').attr('src');
            $('#1').attr('src' , src);
            $('.photo').fadeIn(0);
            $('.photo').not('#1 , #3, #5').fadeOut(500);
        }
        else {
            $('.photo').fadeIn(0);
            $('.photo').not('#2').fadeOut(500);
        }
    })

}

gallary();

function blogForm(){
    let bInput = document.getElementById('blog-input');
    let bForm = document.getElementById('blog-form');


    bInput.addEventListener('focus', ()=>{
        bForm.style.borderColor = '#606060';
    });


    bInput.addEventListener('blur', ()=>{
        bForm.style.borderColor = 'white';
    })
}

blogForm();