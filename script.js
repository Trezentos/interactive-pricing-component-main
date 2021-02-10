const priceValue = document.querySelector('.price');
const pageViewsValue = document.querySelector('.pageviewsValue')
const inputValue = document.querySelector('input');
const switcherInput = document.querySelector('#switcher');

const pageViewsDatas = ['10K', '50K', '100K', '500K', '1M']
let costDatas = [8, 12, 16, 24, 36]

switcherInput.addEventListener('click', () => {
    
    if (switcherInput.value == 'on') {
        
        costDatas = [6, 8, 12, 18, 28];
        priceValue.textContent = costDatas[inputValue.value].toFixed(2);
        return switcherInput.value = 'off' 

    }

    if (switcherInput.value == 'off') {
        
        costDatas = [8, 12, 16, 24, 36];
        priceValue.textContent = costDatas[inputValue.value].toFixed(2);
        return switcherInput.value = 'on' 
    }

})

inputValue.addEventListener('click',() => {
    pageViewsValue.textContent = pageViewsDatas[inputValue.value];
    priceValue.textContent = costDatas[inputValue.value].toFixed(2);

})

inputValue.addEventListener('mousemove',() => {
    pageViewsValue.textContent = pageViewsDatas[inputValue.value];
    priceValue.textContent = costDatas[inputValue.value].toFixed(2);

})

inputValue.addEventListener('touchend',() => {
    pageViewsValue.textContent = pageViewsDatas[inputValue.value];
    priceValue.textContent = costDatas[inputValue.value].toFixed(2);

})

inputValue.addEventListener('touchmove',() => {
    pageViewsValue.textContent = pageViewsDatas[inputValue.value];
    priceValue.textContent = costDatas[inputValue.value].toFixed(2);

})

