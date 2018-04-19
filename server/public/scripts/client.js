console.log('client side up');

$(document).ready(onReady);
console.log('JS ready');

function onReady() {
    console.log('jquery ready');

    $.ajax({
        method: 'GET',
        url: '/records'
    })

    .then(function (response) {
        console.log(response); 
        response.forEach(function(record) {
            $('#recordList').append(`<tr>
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost.toLocaleString( 'en', { style: 'currency', currency: 'USD'}).slice(0, -3)}</td>
            </tr>`);
        })
    });
}

// function listRecords() {
//     $.ajax({
//         method: 'GET',
//         url: '/record-collection'
//     })

//     .then(function (response) {
//         console.log(response); 
//     });

// }

// function listRecords() {
//     $.ajax({
//         method: 'GET',
//         url: '/records'
//     })

//     .then(function (response) {
//         console.log(response); 
//     });

// }

