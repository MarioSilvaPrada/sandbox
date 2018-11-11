let userInput = document.querySelector('.user-input');

// Method 1

// userInput.addEventListener('keyup', (e) => {
//     let term = e.target.value.toLowerCase();
//     let box = document.getElementsByTagName('P');
    
//     for (let i = 0; box.length; i++) {
//         if (box[i].textContent.toLowerCase().includes(term)) {
//             box[i].style.display = '';
//         } else {
//             box[i].style.display = 'none';
//         }
//     }
// });


// Method 2

userInput.addEventListener('keyup', (e) => {
    let term = e.target.value.toLowerCase();
    let boxs = document.getElementsByTagName('P');

    Array.from(boxs).map((box) => {
        let title = box.textContent.toLowerCase();
        if(title.indexOf(term) !== -1) {
            box.style.display = '';
        } else {
            box.style.display = 'none';
        }
    })
});



