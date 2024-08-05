const btns = document.querySelectorAll('.toast__btn');
const toasts = document.querySelectorAll('.toast');

 btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.parentElement.classList.contains('toast')){
            e.target.parentElement.classList.add('hide');
        }
        show(e);
    })
})

function show(e){
    setTimeout(() => {
        e.target.parentElement.classList.remove('hide');
    }, 2000);
}