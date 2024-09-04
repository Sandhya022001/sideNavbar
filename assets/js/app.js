var cl=console.log;

// const navigationToggle= document.getElementById('navigationToggle');
const sidebar = document.getElementById('sidebar');
// const hideNavbar= document.getElementById('hideNavbar');

const toggleSideBar = [...document.querySelectorAll('.toggleSideBar')];
const backDrop= document.getElementById('backDrop');


// const onNavbarShow = () =>{
//     sidebar.classList.add('active')
// }

// const onNavbarHide = () =>{
//     sidebar.classList.remove('active')
// }

const onNavToggle = () =>{
    sidebar.classList.toggle('active');
    backDrop.classList.toggle('active');
}

toggleSideBar.forEach(ele => {
    ele.addEventListener('click', onNavToggle)
})

// navigationToggle.addEventListener('click',onNavToggle);
// hideNavbar.addEventListener('click', onNavToggle);