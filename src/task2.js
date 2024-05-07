const textContainer = document.querySelector('.text-container');
const editButton = document.getElementById('edit-button');
const deleteButton = document.getElementById('delete-button');

editButton.addEventListener('click', () => {
    const textElement = textContainer.querySelector('p');
    const textarea = document.createElement('textarea');
    textarea.value = textElement.textContent;
    textContainer.replaceChild(textarea, textElement);
    editButton.focus();

    editButton.style.backgroundColor = 'red';

    textarea.addEventListener('focus', () => {
        textarea.style.outlineColor = 'orange';
    });

    textarea.addEventListener('blur', () => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = textarea.value;
        textContainer.replaceChild(newParagraph, textarea);
        editButton.style.backgroundColor = '#D9D9D9';
    });
});

deleteButton.addEventListener('click', () => {
    textContainer.parentNode.removeChild(textContainer);
    
});