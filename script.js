const homeworkItems = document.querySelectorAll('.homework-item');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const hwDropdown = document.querySelector('#hwDropdown');
const countElement = document.querySelector('#count');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

homeworkItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'blue';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'black';
    });
});

hwDropdown.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

incrementButton.addEventListener('click', () => {
    countElement.textContent = parseInt(countElement.textContent) + 1;
});

decrementButton.addEventListener('click', () => {
    const currentCount = parseInt(countElement.textContent);
    if (currentCount > 0) {
        countElement.textContent = currentCount - 1;
    }
});
