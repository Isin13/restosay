//header
const hamburgerBtn = document.getElementById('hamburger_menu');
const userLogoHeader = document.getElementById('user_header');

const modalNavPage = document.getElementById('modal_nav_page');
const closeNavPage = document.getElementById('close_nav_page');
const userLogoModal = document.getElementById('user_logo');
const navLink1 = document.querySelector('.link1');
const navLink2 = document.querySelector('.link2');
const navLink3 = document.querySelector('.link3');
const navLink4 = document.querySelector('.link4');
const navLink5 = document.querySelector('.link5');

const modalEnter = document.getElementById('modal_enter');
const closeModalEnter = document.getElementById('close_modal_enter');
const btnRegister = document.getElementById('btn_register');

const modalRegistration = document.getElementById('modal_registration');
const closeModalRegistration = document.getElementById('close_modal_registration');
const btnRegistration = document.getElementById('btn_registration');

//открывает меню 
hamburgerBtn.addEventListener('click', () => {
  modalNavPage.style.display = 'block';
});

userLogoHeader.addEventListener('click', () => {
  modalEnter.style.display = 'block';
});

userLogoModal.addEventListener('click', () => {
  modalEnter.style.display = 'block';
});
 
modalNavPage.addEventListener('click', (event) => {
  if (event.target === modalNavPage || event.target === closeNavPage) {
    modalNavPage.style.display = 'none';
  }
  else if (event.target === navLink1 || event.target === navLink2 || event.target === navLink3 || event.target === navLink4) {
    modalNavPage.style.display = 'none';
  }
  else if (event.target === navLink5) {
    modalNavPage.style.display = 'none';
  }
});

modalEnter.addEventListener('click', (event) => {
  if (event.target === modalEnter || event.target === closeModalEnter ) {
    modalEnter.style.display = 'none';
  }
  else if (event.target === btnRegister) {
    modalRegistration.style.display = 'block';
  }
});

modalRegistration.addEventListener('click', (event) => {
  if (event.target === modalRegistration || event.target === closeModalRegistration ) {
    modalRegistration.style.display = 'none';
  }
  else if (event.target === btnRegistration) {
    alert('регистрация временно недоступна');
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalNavPage.style.display = 'none';
    modalEnter.style.display = 'none';
    modalRegistration.style.display = 'none';
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


//card_user_open
//isi
const cardUserIsi = document.getElementById('card_user_isi');
const userIsi = document.getElementById('user_isi');
const closeUserIsi = document.getElementById('close_user_isi');
cardUserIsi.addEventListener('click', () => {
  userIsi.style.display = 'block';
});
closeUserIsi.addEventListener('click', () => {
  userIsi.style.display = 'none';
});

//kazoku
const cardUserKazoku = document.getElementById('card_user_kazoku');
const userKazoku = document.getElementById('user_kazoku');
const closeUserKazoku = document.getElementById('close_user_kazoku');
cardUserKazoku.addEventListener('click', () => {
  userKazoku.style.display = 'block';
});
closeUserKazoku.addEventListener('click', () => {
  userKazoku.style.display = 'none';
});

//kazoku
const cardUserYoki = document.getElementById('card_user_yoki');
const userYoki = document.getElementById('user_yoki');
const closeUserYoki = document.getElementById('close_user_yoki');
cardUserYoki.addEventListener('click', () => {
  userYoki.style.display = 'block';
}); 
closeUserYoki.addEventListener('click', () => {
  userYoki.style.display = 'none';
});

//restosay
const cardUserRestosay = document.getElementById('card_user_restosay');
const userRestosay = document.getElementById('user_restosay');
const closeUserRestosay = document.getElementById('close_user_restosay');
navLink5.addEventListener('click', () => {
  userRestosay.style.display = 'block';
}); 
close_user_restosay.addEventListener('click', () => {
  userRestosay.style.display = 'none';
});