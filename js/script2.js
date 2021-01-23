const tab_btn = document.querySelectorAll('.catalog__tab'),
      catalogMain = document.querySelectorAll('.catalog-item__content'),
      catalogList = document.querySelectorAll('.catalog-item__list'),
      btnDetails = document.querySelectorAll('.catalog-item__link'),
      btnBack = document.querySelectorAll('.catalog-item__back');

// Ниже код на переключение информации в каждом табе аля ПОДРОБНЕЕ/НАЗАД. Какраз вот он и срабатывает всего 2-3 раза , а после уже не реагирует на клик.

function showMainCatalog(){
  catalogMain.forEach(item =>{
    item.classList.add('catalog-item__content_active');
  });
}
showMainCatalog();

function scrollCatalog(i){
  catalogMain[i].classList.toggle('catalog-item__content_active');
  catalogList[i].classList.toggle('catalog-item__list_active');
}

function switchingCatalog(btnDescr){
  btnDescr.forEach((btn,i)=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      scrollCatalog(i);
    });
  });
}
switchingCatalog(btnDetails);
showMainCatalog(btnBack);




// Этот код на переключение активности разделов табов.

function activeBtn(i = 0){
  tab_btn[i].classList.toggle("catalog__tab_active");
}
activeBtn();

function unactiveBtn(){
  tab_btn.forEach(item =>{
    item.classList.remove("catalog__tab_active");
  });
}

tab_btn.forEach((item, i)=>{
  item.addEventListener("click", ()=>{
    unactiveBtn();
    activeBtn(i);
  });
});
