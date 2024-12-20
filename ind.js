function toggleRow(row) {
    const nextRow = row.nextElementSibling;
    const expanded = row.getAttribute('aria-expanded') === 'true';
    if (nextRow && nextRow.classList.contains('answer')) {
        nextRow.style.display = expanded ? 'none' : 'table-row';
        row.setAttribute('aria-expanded', !expanded);
    }
}

document.querySelectorAll('.answer').forEach(answer => {
    answer.addEventListener('click', function() {
        const questionRow = this.previousElementSibling;
        toggleRow(questionRow);
    });
});