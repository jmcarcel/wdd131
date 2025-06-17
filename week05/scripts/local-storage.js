const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getCharterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = "❌";
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function () {
    /*if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        input.value = '';
    }*/
     if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

/*deleteButton.addEventListener('click', function () {
       
    list.removeChild(li);
    input.focus();
    input.value = '';
    li.remove();
    deleteButton.remove();
    input.focus();
});*/
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}
function getCharterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the delete button character
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}