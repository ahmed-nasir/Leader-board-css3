const topPlayers = document.getElementById('top-players-id');
topPlayers.style.color = 'purple'
const topBlogs = document.getElementById('top-blogs-id');
topBlogs.style.color = 'purple'

// select all element of class player
// const player = document.querySelectorAll('.player div');
const player = document.getElementsByClassName('player');
for (const play of player) {
    play.style.backgroundColor = 'rgba(23,67,88,0.1)';
    play.style.margin = '2px';
    play.style.padding = '5px';


}

// add element
document.getElementById('addBtn').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = Math.round(Math.random() * 10);
    const ul = document.getElementById('unorderedList');
    ul.appendChild(li)

});
function add() {

}
document.getElementById('addBtn2').addEventListener('click', function () {
    const input = document.getElementById('inputField');
    // const inputText = ;

    let sum = parseInt(input.value) + 1;
    input.value = sum;
    if (sum == 5) {
        const addBtb2 = document.getElementById('addBtn2')
        addBtb2.disabled = true;
    }
});