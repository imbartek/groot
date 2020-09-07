const list_item = document.querySelectorAll('.list_item');
const leaves3 = document.querySelector('.image3');
const leaves2 = document.querySelector('.image2');
const leaves4 = document.querySelector('.image4');

list_item.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = '#FF5252';
        element.style.borderBottom = '3px solid #FF5252'
    })
    element.addEventListener('mouseout', () => {
        element.style.color = '#FFF';
        element.style.borderBottom = '1px solid #FFF'
    })
});

setInterval(function () {
    if (leaves3.style.top === "30%") {
        leaves3.style.top = "25%";
        leaves2.style.bottom = "6%";
        leaves4.style.top = "2%";
    }
    else {
        leaves3.style.top = "30%";
        leaves2.style.bottom = "2%";
        leaves4.style.top = "0";
    }
}, 3000)