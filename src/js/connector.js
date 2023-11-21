TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'My Button',
      callback: function(t) {
        // Access name of list
        listNamesElement = "KLvU2mDGTQrsWG"
        console.log("Found "+ listNamesElement);
        // Access columns of names
        colContainerElement = "RD2CmKQFZKidd6"
        console.log("Found "+ colContainer);
        // Access cards of columns
        cardsElement = "T9JQSaXUsHTEzk"
        console.log("Found "+ cardsElement);
        // Access completed of cards
        completeElement = "BOkIMdOUAQVOQk i0a3_aIBK1HcUl IRBlPpAzmf7j9R l2mAoxP747LETW"
        console.log("Found "+ completeElement);

        console.log("Hello World");
        // Looks for all lists in the board
        listNames = document.getElementsByClassName(listNamesElement);
        console.log("Assinged listNames: "+ listNames);
        // Looks at all columns in the board
        colContainer = document.getElementsByClassName(colContainerElement);
        console.log("Assinged colContainer: "+ colContainer);
        // for loop iterates through each list name
        for(i = 0; i<listNames.length; i++){
          // Gets the size of all the cards in the current column
          total = colContainer[i].getElementsByClassName(cardsElement).length
          console.log("Total is: "+ total);
          // Gets the size of all the cards marked as complete in the current column
          complete = colContainer[i].getElementsByClassName(completeElement).length
          console.log("Complete is: "+ complete);
          // Updates the html text with current values
          listNames[i].textContent = "Total: "+total+"; Complete: "+complete;
          console.log("New List Title is:\n"+listNames[i].textContent)
        }
      }
    }];
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