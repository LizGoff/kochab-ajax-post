console.log('client side up');

$(document).ready(onReady);
console.log('JS ready');

// put anything you want to happen first should be in onReady

function onReady() {
    console.log('jquery ready');

    $('#addNewSong').on('click', addNew);
    getAllSongs()
} //end of onReady

function addNew() {
    const newSong = {
        title: $('#newSongTitle').val(),
        artist: $('#newSongArtist').val(),
        year: $('#newSongYear').val(),
        cost: $('#newSongCost').val()
    };
    console.log('New song object', newSong);
    $.ajax({
        method: 'POST',
        url: '/record',
        data: newSong
    })
        .then(function (response) {
            console.log(response);
        });
        getAllSongs()
    } // end addNew

    function getAllSongs() {
        $.ajax({
            method: 'GET',
            url: '/record'
        })
            .then(function (response) {
                console.log(response);
                $('#recordList').empty();
                response.forEach(function (record) {
                    $('#recordList').append(`<tr>
                    <td>${record.title}</td>
                    <td>${record.artist}</td>
                    <td>${record.year}</td>
                    <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td>
                </tr>`);
                })
            });
        } 
