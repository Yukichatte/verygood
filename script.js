document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById('textInput');
    const confirmButton = document.getElementById('confirmButton');
    const message = document.getElementById('message');

    confirmButton.addEventListener('click', function () {
        const inputValue = textInput.value.toLowerCase();

        if (inputValue === 'joão') {
            message.innerHTML = 'NZSXMZLSEBTW63TOMEQGO2LWMUQHS33VEB2XA===';
        } else if (inputValue === 'never gonna let you down') {
            message.innerHTML = '<p>Muito bem! Para continuar, clique <a href="https://imgur.com/a/OYRethr">aqui</a>.</p>';
        } else {
            message.innerHTML = '';
        }
    });
});
