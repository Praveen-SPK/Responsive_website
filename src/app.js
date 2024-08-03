
const menu=document.getElementById('menu-btn');
const menu_items=document.getElementById('menu-items');

menu.addEventListener('click',()=>{
   menu_items.classList.toggle('hidden');
});