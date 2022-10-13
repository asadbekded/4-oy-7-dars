const elList = document.querySelector('.js-list');
const elSel1 = document.querySelector('.js-select1')
const elSel2 = document.querySelector('.js-select2')
const elSel3 = document.querySelector('.js-select3')
const elSel4 = document.querySelector('.js-select4')


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

// languageni domga select orqali render qildi
const filterList = new Set()

books.forEach((item) =>{
   filterList.add(item.language)
})
filterList.forEach((el) => {
   var newOption = document.createElement('option')
   newOption.textContent = el;
   newOption.value = el;

   elSel1.appendChild(newOption)
})


elSel1.addEventListener('change', function(evt) {
   evt.preventDefault()
   elSelVal = elSel1.value;
   let newArr = []
   
   elList.innerHTML = '';
   books.forEach((el) =>{
      if(el.language.includes(elSelVal)){
         newArr.push(el)
      }
   });
   
   newArr.forEach((film) => {
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
})
// languageni domga select orqali render qildi tugadi


elSel2.addEventListener('change', function(evt) {
   evt.preventDefault()
   let sortArr = []
   elList.innerHTML = ''

   if(elSel2.value == 'Aa-Zz'){
      var sortA1 = books.sort((a,b) => {
         let diazA = a.title.toUpperCase().charCodeAt(0)
         let diazB = b.title.toUpperCase().charCodeAt(0)

         if(diazA < diazB){
            return -1
         }
         else if (diazA > diazB){
            return 1
         }else{
            return 0
         }
      })

      sortArr = sortA1;
   }
   if(elSel2.value == 'Zz-Aa'){
      var sortB1 = books.sort((a,b) => {
         let diazA = a.title.toUpperCase().charCodeAt(0)
         let diazB = b.title.toUpperCase().charCodeAt(0)

         if(diazA > diazB){
            return -1
         }
         else if (diazA < diazB){
            return 1
         }else{
            return 0
         }
      })

      sortArr = sortB1;
   }

   sortArr.forEach((film) => {
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
})


elSel3.addEventListener('change', function(evt){
   evt.preventDefault()
   let yearName = [];
   elList.innerHTML = '';

   if(elSel3.value == 'min'){
      var minA = books.sort((a,b) => {
         return Math.abs(a.year) - Math.abs(b.year)
      })
      yearName = minA
   }

   if(elSel3.value == 'max'){
      var minB = books.sort((a,b) => {
         return Math.abs(b.year) - Math.abs(a.year)
      })

      yearName = minB
   }

   yearName.forEach((film) => {
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
})


elSel4.addEventListener('change', function(evt) {
   evt.preventDefault()
   let pageArr = [];
   elList.innerHTML = '';

   if(elSel4.value == 'min'){
      var pagesA = books.sort((a,b) => {
         return a.pages - b.pages
      })

      pageArr = pagesA
   }
   if(elSel4.value == 'max'){
      var pagesB = books.sort((a,b) => {
         return b.pages - a.pages
      })

      pageArr = pagesB
   }

   pageArr.forEach((film) => {
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
})


























// ------------------------------------------dark and red mode codes btn begin-----------------------------------------
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
