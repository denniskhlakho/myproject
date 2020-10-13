window.addEventListener('scroll',function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})


function togglemanu()
{
    var manuToggle = document.querySelector('.toggle');
    var manu = document.querySelector('.manu');
    manuToggle.classList.toggle('active')
    manu.classList.toggle('active')
}