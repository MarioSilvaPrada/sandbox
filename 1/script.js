document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.getElementById('number').value;
    
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // xhr.onload = function() {
    //     if(this.status === 200) {
    //         const response = JSON.parse(this.responseText);
            
    //         let output = '';
    //         if(response.type === 'success') {
    //             response.value.map(res => {
    //                 output += 
    //                 `<li> Joke ID: ${res.id} | ${res.joke}</li>`
    //             })
    //         }
    //         document.querySelector('.jokes').innerHTML = output;
    //     }
    // }

    // xhr.send();

    fetch('http://api.icndb.com/jokes/random/' + number)
        .then(res => {
            console.log(res);
        })

    e.preventDefault();
}

