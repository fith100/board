const board = document.querySelector('.board');

// console.log(document);



for(let i = 0; i < 500; i++) {
    let block = document.createElement('div');

    block.classList.add('box');
    
    board.appendChild(block);


    block.addEventListener('mouseover', () => {
        block.style.background ='#' + (Math.random().toString(16) + '000000').substring(2,8)

    })

    block.addEventListener('mouseleave', () => {
        block.style.background = '#1d1515';
    })
}