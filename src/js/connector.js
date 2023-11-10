console.log("test")
TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
      return [{
        icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
        text: 'Estimate Size',
      }];
    },
    // When a card is added to the list 
    // list total name will update by n + 1
    'list-actions': function(t, options){
      return t.list('name', 'id')
      .then(function (list) {
        var numCards = list.cards.length;
        var completedCards = list.cards.filter(function(card) {
          return card.completed.length;
        });
        return [{

          text: "Total Cards: "+numCards,
          text: "Total Complete: "+completedCards
        }];
      });
    }

    
    // When a card is removed from the list
    // list total name will update by n - 1

    // When a card due date is complete
    // list completed name will update by i + 1

    // At the start of each month have a new list appear that contains:
    // *month* *n* *n-i*
  });