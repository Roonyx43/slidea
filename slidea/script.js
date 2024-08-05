function showAlert() {
    const naoRadio = document.getElementById('nao');
    const simRadio = document.getElementById('sim');
    const url = 'https://wa.me/5541985190602?text=Eu%20lhe%20dou%20esta%20honra%20amor%20da%20minha%20vida!'
    if (naoRadio.checked) {
        document.getElementById('alert-slime').classList.add('active');
        document.getElementById('overlay').classList.add('active');
    }if (simRadio.checked) {
        window.location.href = url;
    }
}

function closeAlert() {
    document.getElementById('alert-slime').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.slime').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        showAlert();
    });
});
