console.log("test")
var btnCallback = function (t, opts) {
  return t.popup({
    title: 'Snooze Card',
    items: [{
      text: 'Total Cards '+opts.cards.toString(),
      callback: function (t, opts) {

      }
    }, {
      text: 'In 1 hour',
      callback: function (t, opts) {

      }
    }, {
      text: 'In 2 hours',
      callback: function (t, opts) {

      }
    }]
  });
};
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
        return [{
          text: "Get List Stats",
          callback: btnCallback
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