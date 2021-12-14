const sidebar = document.querySelector('#sidebar')
const menuButton = document.querySelector('#menu')
const smallSidebar = document.querySelector('#small-sidebar')
const videosList = document.querySelector('.videos-list')

let isOpened = true

sidebar.style.display = 'none'
menuButton.addEventListener('click',()=>{
    
    if(isOpened){
        smallSidebar.style.display = 'none'
        sidebar.style.display = "block"
        isOpened = false
    }else{
        smallSidebar.style.display = 'block'
        sidebar.style.display = "none"
        isOpened = true
    }
})














    


