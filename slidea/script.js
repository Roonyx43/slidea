function showAlert() {
    const naoRadio = document.getElementById('nao');
    const simRadio = document.getElementById('sim');
    if (naoRadio.checked) {
        document.getElementById('alert-slime').classList.add('active');
        document.getElementById('overlay').classList.add('active');
    }
    if (simRadio.checked) {
        document.getElementById('image-selection').classList.add('active');
        document.getElementById('overlay').classList.add('active');
    }
}

function closeAlert() {
    document.getElementById('alert-slime').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function closeImageSelection() {
    document.getElementById('image-selection').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.slime').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        showAlert();
    });
});

