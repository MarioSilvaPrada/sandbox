document.getElementById('button').addEventListener('click', getApi);

function getApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(res => console.log(res))
}
