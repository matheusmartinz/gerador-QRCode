// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQRCode = document.querySelector('#img-QRCode');
const wrapper = document.querySelector('.wrapper');

let valueDefault;

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();

    if (!qrcodeValue || qrcodeValue === valueDefault) return;

    valueDefault = qrcodeValue; 

    btnValue.innerText = 'Gerando QRCode... '
    imgQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`

    imgQRCode.addEventListener('load', () => {
        wrapper.classList.add('active')
        btnValue.innerText = 'Gerar QRCode'
    })

})