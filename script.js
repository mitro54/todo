const itemsList = [];
const h1 = document.querySelector('h1');
const li = document.querySelector('li');
const userInput = document.querySelector('#input');
const form = document.querySelector('#form');
const list = document.querySelector('#list');
const inputClear = userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' || e.keyCode === 8) {
        userInput.value = '';
    };
});
const inputClick = userInput.addEventListener('click', () => {
    h1.innerText = 'What would you like to do?';
});
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (userInput.value === 'new') {
        let addItem = prompt('What task would you like to add?');
        if (addItem) {
            itemsList.push(addItem);
            console.log(`Added ${addItem} to the list`);
            function itemCreator(addItem) {
                const liCreator = document.createElement('li');
                list.append(liCreator);
                liCreator.innerText = addItem;
                liCreator.id = addItem;
                liCreator.setAttribute('class', 'list-group-item')
                let mouseOver = liCreator.addEventListener('mouseover', () => {
                    liCreator.setAttribute('class', 'list-group-item active')
                })
                let mouseOut = liCreator.addEventListener('mouseout', () => {
                    liCreator.setAttribute('class', 'list-group-item')
                })
                // liCreator.addEventListener('click', () => {
                //     liCreator.setAttribute('class', 'list-group-item disabled')
                // })
            } itemCreator(addItem);
        };
    } else if (userInput.value === 'todo') {
        for (let i = 0; i < itemsList.length; i++) {
            console.log(`CURRENT TO-DO LIST ITEM ${i + 1}:
                ${itemsList[i]}`);
        };
    } else if (userInput.value === 'delete') {
        let deleteItem = prompt('What would you like to delete?');
        if (itemsList.includes(deleteItem)) {
            let deleteIndex = itemsList.indexOf(deleteItem);
            let deleteNum = document.getElementById(deleteItem);
            deleteNum.remove();
            if (deleteItem === '') {
                return;
            } else {
                itemsList.splice(deleteIndex, 1);
                console.log(`Deleted ${deleteItem} from the list`);
            }
        } else if (deleteItem === 'all') {
            for (let l = 0; l < itemsList.length; l++) {
                let deleteSelector = document.querySelector('li')
                deleteSelector.remove();
                userInput.value = '';
            }
            console.log('Deleted the list')
            itemsList.splice(0, itemsList.length);
        } else {
            userInput.value = 'delete';
        }
    };
});
// if (userInput.value === 'new') {
//     let addItem = prompt('What task would you like to add?');
//     if (addItem) {
//         itemsList.push(addItem);
//         console.log(`Added ${addItem} to list`);
//     }
// } else if (userInputValue === 'todo') {
//     for (let i = 0; i < itemsList.length; i++) {
//         console.log(`CURRENT TO-DO LIST ITEM ${i + 1}:
//             ${itemsList[i]}`);
//     }
// } else if (userInputValue === 'delete') {
//     let deleteItem = prompt('What would you like to remove?');
//     let deleteIndex = itemsList.indexOf(deleteItem);
//     if (deleteItem === '') {
//         userInput;
//     } else {
//         itemsList.splice(deleteIndex, 1);
//         console.log(`Deleted ${deleteItem} from list`);
//     }
// }