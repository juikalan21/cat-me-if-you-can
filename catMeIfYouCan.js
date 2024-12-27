let score = 0;
const cat = document.getElementById('cat');
const scoreDisplay = document.getElementById('score');
const holes = document.querySelectorAll('.hole');

function getRandomHole(){
    const randomIndex = Math.floor(Math.random()*holes.length);
    return holes[randomIndex];
}
function showCat() {
    const hole = getRandomHole();
    cat.style.left = (hole.offsetLeft + 18) + 'px';
    cat.style.bottom = (hole.offsetTop - 200) + 'px';
    cat.style.display = 'block' ;
}

cat.addEventListener('click' , () =>{
    score++;
    scoreDisplay.textContent = 'Score: ' + score ;
    cat.style.display = 'none' ;
    setTimeout(showCat,500);
})

setInterval(showCat, 1000);
