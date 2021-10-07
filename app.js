var proizvod3 = document.querySelectorAll('.proizvod3');
var proizvod1 = document.querySelectorAll('.proizvod1');
var proizvod2 = document.querySelectorAll('.proizvod2');
var kat1 = document.getElementById('kat1');
var kat2 = document.getElementById('kat2');
var kat3 = document.getElementById('kat3');
var forma = document.getElementById('forma');
var count = 0;

proizvod1.forEach(function (el){
    el.addEventListener('click', sendProductInfo1);
});

proizvod2.forEach(function (el){
    el.addEventListener('click', sendProductInfo2);
});

proizvod3.forEach(function (el){
    el.addEventListener('click', sendProductInfo3);
});

function sendProductInfo1(e){
    count++;
    proizvod1.forEach(function(e){
        e.style.pointerEvents = "none";
        e.style.background = "#f2f2f2";
    });
    var product = e.currentTarget.getAttribute('data-label');
    var kategorija = e.currentTarget.getAttribute('data-kat')
    gtag('event', product, {'event_category': kategorija, 'event_label': product});
    if(count == 3){
        forma.style.height = 'auto';
        forma.scrollIntoView({
            behavior: 'smooth'
        });
    }else{
        kat2.scrollIntoView({
            behavior: 'smooth'
          });
    }
}


function sendProductInfo2(e){
    count++;
    proizvod1.forEach(function(e){
        e.style.pointerEvents = "none";
        e.style.background = "#f2f2f2";
    });
    var product = e.currentTarget.getAttribute('data-label');
    var kategorija = e.currentTarget.getAttribute('data-kat')
    gtag('event', product, {'event_category': kategorija, 'event_label': product});
    if(count == 3){
        forma.style.height = 'auto';
        forma.scrollIntoView({
            behavior: 'smooth'
        });
    }else{
        kat3.scrollIntoView({
            behavior: 'smooth'
          });
    }
}


function sendProductInfo3(e){
    count++;
    proizvod3.forEach(function(e){
        e.style.pointerEvents = "none";
        e.style.background = "#f2f2f2";
    });
    var product = e.currentTarget.getAttribute('data-label');
    var kategorija = e.currentTarget.getAttribute('data-kat')
    gtag('event', product, {'event_category': kategorija, 'event_label': product});
    if(count == 3){
        forma.style.height = 'auto';
        forma.scrollIntoView({
            behavior: 'smooth'
        });
    }else{
        kat1.scrollIntoView({
            behavior: 'smooth'
          });
    }
    
}
