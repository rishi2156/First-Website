var form= document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter=document.getElementById('filter');
const done = document.querySelectorAll(".done");
done.forEach(
  function(done) {
   done.addEventListener("click", checked,false);
  }
);

// var DLT=document.querySelectorAll(".delete");
//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);
//filter elements
filter.addEventListener('keyup',filterItems)
//Add item
function addItem (e){
    e.preventDefault();
    
    //get input value
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    var newItemtext=document.createTextNode(newItem);
    li.appendChild(newItemtext);
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

//remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filtering items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  function checked(e){
    if(e.target.checked){
      e.target.parentElement.classList.add("checkthrough");
      console.log(e.target.parentElement.className);
    }else{
      e.target.parentElement.className="list-group-item";
    }
  }