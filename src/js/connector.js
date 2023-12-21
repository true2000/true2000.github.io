/*TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
        text: "Hello World",
        callback: function (t) {
          return t.card('id','name').then(card => alert('Hello from' + card.name + '(id:' + card.id + '!'))
        },
      },
    ];
  },
  "board-buttons": function (t, options) {
    return [
      {
        icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
        text: "Board Button",
        callback: function (t) {
          return t.lists('id','name').then(card => alert('Hello from ' + card[1].name + '(id: ' + card[1].id + '!)'), card[1].name = 'ahi', alert(card.name))
          //return t.board().then(board => alert('Hello World!'))
        },
      },
    ];
  },
});*/

//// <reference path="trello.d.js" />
/** @type {TrelloPowerUp} */
const tpu = window.TrelloPowerUp;
tpu.initialize({ 
  'board-buttons': 
    /**
     * Returns the board button
     * @param {TrelloObject} t 
     * @returns {TrelloBoardButtonOption[]}
     */
    async (t) => {
      /** @type {TrelloMemberObject} */
      const member = await t.member("id");
      /** @type {TrelloBoard} */
      const board = await t.board("memberships");
      /** @type {TrelloMembership} */
      const membership = board.memberships.find(o=>o.idMember === member.id);
      if(!membership || membership.memberType === "observer") {
        t.alert({
          message: "Sorry you are only a guest on this board!",
          duration: 1,
        });
        return []; // no board button for you
      }
      /** @type {TrelloBoardButtonOption} */
      const button = {
        text: "hello",
        icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAF2SURBVDhPtZMxT8JQEMfb0pI2xMbA0JWyNXQEJLHO7VrmfgAHTfgMLMTo0FknDU0TNze+gCbOSmSBwU2hgxMlAevd8wV95GG6+Euu73/v/e/aXlPhX8myrIBBUy4iXRmCIDicTqeeqqoHmKdp+lir1YaDweCeGHZx1u/vHTnOpWEYqSiKGWyRQI17juNc9cFDzNvEUay2ms1bkJtCXjTBE0WRCprFc70TTdO4Rb8DPa7rnoL+odfr6bZtP4HkFm0HeJ+xBrQg4WU+n7eSJLFR5wH8dfC3UJMGy+WyDJNGmQvwC4vFooyaNFAUZVUo/Pm5GdBbLBZXqEkD2Bjpuv6BOg/olSRpRNNv2u32NSzcoW0HeG9gJZAnQOx6/cKsVmc03YlZNWfgPacpi+/7rmma7yC5d8azDnhAb2AmNx6PJ77fGWqaqsmyvF8qleB19c9KpfJqWdZdo9E4juP4gdoJ3J8J6Xa7BgzXQr1er1/CMHwjBwyC8AW6vpgYpmCzMQAAAABJRU5ErkJggg==`, // for card front badges only
        condition: "always",
        callback: (tt) => {
          tt.alert({
            message: "You are all paid up!",
            duration: 1,
          })
        }
      };
      // return the button
      return [button];
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