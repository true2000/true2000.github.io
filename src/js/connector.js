// Access name of list
let listNamesElement = "list-card-title";
// Access cards of columns
let cardsElement = "list-card-details";

// Create a MutationObserver instance
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "childList") {
      updateListNames();
    }
  });
});

// Function to update list names
function updateListNames() {
  // Looks for all lists in the board
  let listNames = document.getElementsByClassName(listNamesElement);
  // for loop iterates through each list name
  for(let i = 0; i<listNames.length; i++){
    // Gets the size of all the cards in the current column
    let total = listNames[i].parentElement.parentElement.getElementsByClassName(cardsElement).length;
    // Updates the html text with current values
    listNames[i].textContent = "Total: "+total;
  }
}

// Configuration of the observer
let config = { childList: true, subtree: true };

// Pass in the target node (in this case, the entire document), as well as the observer options
observer.observe(document, config);

// Call updateListNames initially to update list names at the start
updateListNames();



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