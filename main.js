const hamburgerBtn = document.getElementById('hamb_btn');
const userLogoBtn = document.querySelector('.user_logo');
const modalNavPage = document.querySelector('.modal_nav_page');
const popupEnter = document.querySelector('.popup_enter');
const navCloseBtn = document.querySelector('.close_btn');
const enterCloseBtn = popupEnter.querySelector('.close_btn');
const popupLink = document.querySelector ('.popup_link');
const navLink1 = document.querySelector('.link1');
const navLink2 = document.querySelector('.link2');
const navLink3 = document.querySelector('.link3');
const navLink4 = document.querySelector('.link4');

hamburgerBtn.addEventListener('click', () => {
  modalNavPage.style.display = 'block';
});

userLogoBtn.addEventListener('click', () => {
  popupEnter.style.display = 'block';
});


modalNavPage.addEventListener('click', (event) => {
  if (event.target === modalNavPage || event.target === navCloseBtn || event.target === popupLink ) {
    modalNavPage.style.display = 'none';
  }
});

modalNavPage.addEventListener('click', (event) => {
  if (event.target === navLink1 || event.target === navLink2 || event.target === navLink3 || event.target === navLink4 ) {
    modalNavPage.style.display = 'none';
  }
});

popupEnter.addEventListener('click', (event) => {
  if (event.target === popupEnter || event.target === enterCloseBtn) {
    popupEnter.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalNavPage.style.display = 'none';
    popupEnter.style.display = 'none';
  }
});


// выборка Vacancy
function appVacancy() {
  const buttons = document.querySelectorAll('.btn_vacancy')
  const cards = document.querySelectorAll('.card_vacancy')

  function filter(category, items) {
      items.forEach((item) => {
          const isItemFiltered = !item.classList.contains(category)
          const isShowAll = category.toLowerCase() === 'all'
          if (isItemFiltered && !isShowAll) {
              item.classList.add('anime')
          } else {
              item.classList.remove('hide')
              item.classList.remove('anime')
          }
      })
  }

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          const currentCategory = button.dataset.filter
          filter(currentCategory, cards)
      })
  })

  cards.forEach((card) => {
      card.ontransitionend = function() {
          if (card.classList.contains('anime')) {
              card.classList.add('hide')
          }
      }
  })

  for (const btn_vacancy of buttons){
    btn_vacancy.addEventListener('click',() => {
      noneActivClass()
      btn_vacancy.classList.add('is_active')
    })
  }
  
  function noneActivClass() {
    buttons.forEach( (btn_vacancy) => {
      btn_vacancy.classList.remove('is_active')
    })
  }

  for (const btn_vacancy of buttons){
    btn_vacancy.addEventListener('click',() => {
      noneActivClass()
      btn_vacancy.classList.add('is_active')
    })
  }
}

appVacancy()

// выборка suppliers
function appSuppliers() {
  const buttons = document.querySelectorAll('.btn_suppliers')
  const cards = document.querySelectorAll('.card_suppliers')

  function filter(category, items) {
      items.forEach((item) => {
          const isItemFiltered = !item.classList.contains(category)
          const isShowAll = category.toLowerCase() === 'all'
          if (isItemFiltered && !isShowAll) {
              item.classList.add('anime')
          } else {
              item.classList.remove('hide')
              item.classList.remove('anime')
          }
      })
  }

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          const currentCategory = button.dataset.filter
          filter(currentCategory, cards)
      })
  })

  cards.forEach((card) => {
      card.ontransitionend = function() {
          if (card.classList.contains('anime')) {
              card.classList.add('hide')
          }
      }
  })

  for (const btn_suppliers of buttons){
    btn_suppliers.addEventListener('click',() => {
      noneActivClass()
      btn_suppliers.classList.add('active_suppliers')
    })
  }
  
  function noneActivClass() {
    buttons.forEach( (btn_suppliers) => {
      btn_suppliers.classList.remove('active_suppliers')
    })
  }

  for (const btn_suppliers of buttons){
    btn_suppliers.addEventListener('click',() => {
      noneActivClass()
      btn_suppliers.classList.add('active_suppliers')
    })
  }
}

appSuppliers()

