const rows = [...document.querySelectorAll('tr td.table-item')];
const form = document.querySelector('.form');
const search = document.querySelector('#search');

search.focus();

function filterName() {
    const value = this.value.toUpperCase();
    rows.forEach(rowItem =>
        rowItem.innerHTML.toUpperCase().includes(value) 
        ? rowItem.parentElement.classList.remove('hide') 
        : rowItem.parentElement.classList.add('hide')
    );
}

search.addEventListener('change', filterName);
search.addEventListener('keyup', filterName);
form.addEventListener('submit', function(e) {
    e.preventDefault();
});