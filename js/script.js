const item = document.querySelectorAll('.item')

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('mouseenter', () => {
        item[i].style.animation = `Color .5s infinite ease`
    console.log(item[i]);
    })
}