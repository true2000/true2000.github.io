// Load the Trello client.js library
TrelloPowerUp.initialize({
  // Define the callback function for the board button
  'renameList': function(t, options){
    // Get the current board and list id from the context
    var boardId = options.context.board;
    var listId = options.context.list;
    // Prompt the user to enter a new name for the list
    return t.popup({
      title: 'Rename List',
      items: [{
        text: 'Enter a new name',
        type: 'input',
        callback: function(t, input){
          // Update the list name using the Trello REST API
          return t.put('/1/lists/' + listId, {name: input})
          .then(function(){
            // Close the popup
            return t.closePopup();
          });
        }
      }]
    });
  }
});





/* WORKING CODE
// Access name of list
listNamesElement = "KLvU2mDGTQrsWG"
// Access columns of names
colContainerElement = "RD2CmKQFZKidd6"
// Access cards of columns
cardsElement = "T9JQSaXUsHTEzk"
// Access completed of cards
completeElement = "BOkIMdOUAQVOQk i0a3_aIBK1HcUl IRBlPpAzmf7j9R l2mAoxP747LETW"

// Looks for all lists in the board
listNames = document.getElementsByClassName(listNamesElement);
// Looks at all columns in the board
colContainer = document.getElementsByClassName(colContainerElement);
// for loop iterates through each list name
for(i = 0; i<listNames.length; i++){
  // Gets the size of all the cards in the current column
  total = colContainer[i].getElementsByClassName(cardsElement).length
  // Gets the size of all the cards marked as complete in the current column
  complete = colContainer[i].getElementsByClassName(completeElement).length
  // Updates the html text with current values
  listNames[i].textContent = "Total: "+total+"; Complete: "+complete;
}
*/