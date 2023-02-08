// Wait for the window to load completely
window.addEventListener("load", function() {
    // Get the add item div element and attach a click event listener
    const addItemButton = document.querySelector("DIV#add_item");
    addItemButton.addEventListener("click", function() {
      // Get the unordered list element with class "my_list" and append a new list item
      const myList = document.querySelector("UL.my_list");
      const newItem = document.createElement("li");
      newItem.textContent = "Item";
      myList.appendChild(newItem);
    });
  
    // Get the remove item div element and attach a click event listener
    const removeItemButton = document.querySelector("DIV#remove_item");
    removeItemButton.addEventListener("click", function() {
      // Get the last list item of the unordered list element with class "my_list" and remove it
      const myList = document.querySelector("UL.my_list");
      const lastItem = myList.querySelector("li:last-child");
      myList.removeChild(lastItem);
    });
  
    // Get the clear list div element and attach a click event listener
    const clearListButton = document.querySelector("DIV#clear_list");
    clearListButton.addEventListener("click", function() {
      // Get all the list items of the unordered list element with class "my_list" and remove them
      const myList = document.querySelector("UL.my_list");
      const listItems = myList.querySelectorAll("li");
      listItems.forEach(function(item) {
        myList.removeChild(item);
      });
    });
  });