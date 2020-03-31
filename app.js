const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'none';
lastListItem.style.backgroundColor = 'none';


function attachListIteamButtons(li) {
 

    let click = document.createElement('button');
    click.className = 'click';
    click.textContent = 'click';
    li.appendChild(click);

  
}

for (let i = 0; i < lis.length; i += 1) {
    attachListIteamButtons(lis[i]);

}
listUl.addEventListener('click' , (event) => {
  
    if (event.target.tagName == 'BUTTON') {     
      if (event.target.className == 'click') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLi) {
        ul.insertBefore(nextLi, li);
        }  
      }
    }
});



toggleList.addEventListener('click', () => {

    if (listDiv.style.display == 'none') {
      toggleList.textContent = 'Hide list';        
      listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
    });
    
    descriptionButton.addEventListener('click', () => {
        descriptionP.innerHTML = descriptionInput.value + ':';
        descriptionInput.value = '';
    });

    addItemButton.addEventListener('click', () => {
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.textContent = addItemInput.value;
      attachListItemButtons(li);
       ul.appendChild(li);
       addItemInput.value = '';
    });
