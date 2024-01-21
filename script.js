const product1=document.getElementById('product1');
const product2=document.getElementById('product2');
const product3=document.getElementById('product3');

function newPage(){
    window.location.href = 'product.html'}
function newPage2(){
        window.location.href = 'product2.html'}
function newPage3(){
            window.location.href = 'product3.html'}

product1.addEventListener('click',newPage);
product2.addEventListener('click',newPage2);
product3.addEventListener('click',newPage3);