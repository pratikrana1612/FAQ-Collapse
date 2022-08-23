const btns = document.querySelectorAll('button');
const divs= document.querySelectorAll('.main_container div');
const p= document.querySelectorAll('.main_container div p');


for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',() =>
    {
        divs[i].classList.toggle('active');
        if(btns[i].innerHTML === '<i class="fa-solid fa-xmark fa-2x"></i>')
        {
            btns[i].innerHTML = '<i class="fas fa-chevron-down fa-2x"></i>';
        }
        else{
            btns[i].innerHTML =  '<i class="fa-solid fa-xmark fa-2x"></i>';
        }
    })
}

