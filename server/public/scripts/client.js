console.log('client side up');

$(document).ready(onReady);
console.log('JS ready');

function onReady() {
    console.log('jquery ready');
    
    $.ajax({
        type: 'GET',
        url: '/record-collection'
    })

    .then(function (response) {
        console.log(response); 
    });

}

function listRecords() {
    $.ajax({
        type: 'GET',
        url: '/records'
    })

    .then(function (response) {
        console.log(response); 
    });

}

