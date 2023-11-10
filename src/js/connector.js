console.log("test")
var numCards = 0
var cardsComplete = 0
TrelloPowerUp.initialize({
    // Testing code
    'card-buttons': function(t, options){
      return [{
        icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
        text: 'Estimate Size',
      }];
    },
    // Located on the bullet menu on each list
    'list-actions': function (l) {
      // Acesses the name, id and cards for each list
      return l.list('name','id','cards')
      .then(function (list) {
          // Finds the total number of cards for each list
          numCards = list.cards.length;
          // Finds the amount of completed cards from each list
          cardsComplete = list.cards.filter(function(card){
              return card.dueComplete;
          }).length
          // Create a local var that contains the new name
          var newName = list.name + " ("+ numCards + " total) " + " ("+ cardsComplete + " complete)"
        // Returns the following values
        return [{
          // Title of the action in the bullet menu
          text: "Total Cards: "+ numCards + " Completed Cards: " + cardsComplete + " New Name: " + newName,
          // Trello will call this if the user clicks on this action
          callback: function (l) {
            // Prints what the new title should be in the console
            console.log(newName)
            // Should change the title of the list
            // stuck having issues
            //return l.list.name.set(newName);
          }
        }];
      });
    }

    // At the start of each month have a new list appear that contains:
    // *month* *n* *n-i*
  });