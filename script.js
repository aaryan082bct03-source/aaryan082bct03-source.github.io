const cbt = document.querySelector('#colorButton')
const rbt = document.querySelector('#hoverButton')
const herocontent = document.querySelector('.hero-content')
cbt.addEventListener('click', function(){
    herocontent.style.backgroundColor = 'red';
    console.log('Color button clicked')
})
rbt.addEventListener('mouseover', function(){
    rbt.style.backgroundColor = 'yellow';
    console.log('Reset button hovered')
})
rbt.addEventListener('mouseout', function(){
    rbt.style.backgroundColor = '';
    console.log('Reset button mouseout')
})
const countButton = document.querySelector('#countButton')
const clicksDisplay = document.querySelector('#clicks')
let no_of_clicks = 0;
countButton.addEventListener('click', function(){
    no_of_clicks++;
    clicksDisplay.textContent = `Number of clicks: ${no_of_clicks}`;
    //clicksDisplay.textContent = "Number of clicks:" + no_of_clicks; does same thing
    
});

//loll4

//hello world
