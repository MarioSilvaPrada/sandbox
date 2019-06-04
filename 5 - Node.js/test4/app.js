$(function() {
    let output= $('#output')
    $.ajax({
        type: 'GET',
        url: 'https://swapi.co/api/films',
        success: function(data) {
            // console.log(data['results'])
            // output.html(`<p>${data['results'][1]['title']}</p>`)
            let input = '';
            for (let dt of data['results']) {
                console.log(dt)
                input += `<p>${dt['title']}</p>`
            }
            output.html(input)
        }
    });
});