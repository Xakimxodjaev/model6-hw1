

const btn2 = document.querySelector('#btn2');
const btn = document.querySelector('#btn');

btn2.addEventListener('click', ()=>{
    document.body.classList.add('dark');
    if (document.body.classList.contains('dark')) {
        btn2.style.backgroundColor = '#FA9021';
        btn2.style.color = 'black';
    } else {
        btn2.style.backgroundColor = '';
        btn2.style.color = '';
    }
})

btn.addEventListener('click', ()=>{
    document.body.classList.remove('dark');
    if (document.body.classList.contains('')) {
        btn.style.backgroundColor = '#C4B5A5';
        btn.style.color = '#FA9021';
    } else {
        btn.style.backgroundColor = '';
        btn.style.color = '';
    }
    
})

