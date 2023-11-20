// Access name of list
listNamesElement = "KLvU2mDGTQrsWG"
// Access columns of names
colContainerElement = "RD2CmKQFZKidd6"
// Access cards of columns
cardsElement = "T9JQSaXUsHTEzk"
// Access completed of cards
completeElement = "BOkIMdOUAQVOQk i0a3_aIBK1HcUl IRBlPpAzmf7j9R l2mAoxP747LETW"

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: './images/icon.svg',
      text: 'Update List Names',
      callback: function(t){
        return t.lists('all')
        .then(function(lists){
          lists.forEach(function(list){
            var total = list.cards.length;
            var complete = list.cards.filter(card => card.badges.checkItemsChecked > 0).length;
            list.name = "Total: "+total+"; Complete: "+complete;
            Trello.put('/lists/'+list.id, {name: list.name});
          });
        });
      }
    }];
  }
});

/*// Looks for all lists in the board
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
}*/