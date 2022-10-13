const elList = document.querySelector('.js-list');


books.forEach((film) => {
   newItem = document.createElement('li')
   newTitle = document.createElement('h4')
   newImg = document.createElement('img')
   newTitl = document.createElement('h5')
   newSpan1 = document.createElement('span')
   newSpan2 = document.createElement('span')
   newText = document.createElement('p')
   newSpan3 = document.createElement('span')
   newSpan4 = document.createElement('span')
   newLink = document.createElement('a')

   newTitle.textContent = film.title.toUpperCase()
   newImg.src = `./images/${film.imageLink}`;
   newImg.style.width = "100%";
   newImg.style.height = "350px";
   newTitl.textContent = `Author: ${film.author}`
   newSpan1.textContent = `Country: ${film.country}`
   newSpan2.textContent = `Language: ${film.language}`
   newSpan3.textContent = `Pages: ${film.pages}`
   newSpan4.textContent = `Date: ${film.year} year`
   newLink.textContent = 'Learn-more'
   newLink.href = film.link

   elList.appendChild(newItem)
   newItem.appendChild(newTitle)
   newItem.appendChild(newImg)
   newItem.appendChild(newTitl)
   newItem.appendChild(newSpan1)
   newItem.appendChild(newSpan2)
   newItem.appendChild(newText)
   newItem.appendChild(newSpan3)
   newItem.appendChild(newSpan4)
   newItem.appendChild(newLink)
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
