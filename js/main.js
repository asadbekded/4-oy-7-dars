const elList = document.querySelector('.js-list');


books.forEach((film) => {
   newItem = document.createElement('li')
   newTitle = document.createElement('h4')
   newTitl = document.createElement('h5')
   newSpan1 = document.createElement('span')
   newSpan2 = document.createElement('span')
   newText = document.createElement('p')
   newNum = document.createElement('strong')

   newTitle.textContent = film.author
   newTitl.textContent = film.country
   newSpan1.textContent = film.language
   newSpan2.textContent = film.pages
   newText.textContent = film.title
   newNum.textContent = film.year

   elList.appendChild(newItem)
   newItem.appendChild(newTitle)
   newItem.appendChild(newTitl)
   newItem.appendChild(newSpan1)
   newItem.appendChild(newSpan2)
   newItem.appendChild(newText)
   newItem.appendChild(newNum)
})







//------------------------------------------dark and red mode codes btn begin-----------------------------------------

const elModeBtn = document.querySelector('.mode-btn')
var theme = false

elModeBtn.addEventListener('click', function () {
   theme = !theme;
   window.localStorage.setItem('theme', theme ? 'dark' : 'light')
   changTheme()
})

function changTheme() {
   if(window.localStorage.getItem('theme') == 'dark'){
      document.body.style.backgroundColor = '#333'
      elModeBtn.setAttribute('class', 'btn btn-danger')
      elModeBtn.textContent = 'Red'
   }else{
      document.body.style.backgroundColor = '#b12f15'
      elModeBtn.setAttribute('class', 'btn btn-dark')
      elModeBtn.textContent = 'Dark'
   }
}
changTheme()
//------------------------------------------dark and red mode codes btn end-----------------------------------------
