

var button = document.createElement("button");
button.innerHTML = "CNN";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("News update");
});

var button = document.createElement("button");
button.innerHTML = "BBC";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("News update");
});

var button = document.createElement("button");
button.innerHTML = "CNBC";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("News update");
});


var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=926ea2a6d4474d838091fd2e96217ef0';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })


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

    