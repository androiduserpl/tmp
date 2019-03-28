var hange, hange2, changeStatus, element, clasToRemove;
hange = 'to jest zmieniony tekst'
hange2 = 'to jest inna zmiana'

document.getElementById('element_1').title = hange;
document.getElementById('element_2').title = hange2;

element = document.getElementsByClassName('btn-danger');

clasToRemove = 'btn-danger';

function changeStatus() {
    if (element.classList.contains(clasToRemove)) {
        element.classList.remove(clasToRemove);
        element.classList.add('btn-success');
    } else {
        console.log('nic do zmiany')
    }
}

document.getElementById('dropdownMenuButton').addEventListener('click', changeStatus);
