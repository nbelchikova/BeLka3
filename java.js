let view=document.getElementById('obrsvyaz');
let close=document.getElementById('send');
let form=document.getElementById('form1');

let open=function(){
    form.style.display='block';
    close.style.display='block';
}

let hide=function(){
    form.style.display='none';
    close.style.display='none';
}
view.addEventListener('click', open);
close.addEventListener('click', hide);