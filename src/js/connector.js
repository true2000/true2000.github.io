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

// This is the code for the power up server
// It uses the Express framework to handle the requests from Trello
const express = require("express");
const app = express();

// This is the URL of the Trello client library, which we need to load in our power up
const trelloClientUrl = "https://p.trellocdn.com/power-up.min.js";

// This is the function that will be called when the board button is clicked
// It uses the Trello client library to create a new card on the board
const onBoardButtonClick = async (t) => {
  // Get the board id and name from the power up context
  const boardId = t.getContext().board;
  const boardName = await t.board("name").get("name");

  // Create a new card with a default title and description
  // You can customize these values as you want
  const cardTitle = "New card from power up";
  const cardDescription = `This card was created by the power up on the board ${boardName}`;

  // Use the Trello client library to create the card
  // You can also specify other properties, such as list, labels, members, etc.
  // See the documentation for more details: https://developer.atlassian.com/cloud/trello/guides/power-ups/client-library/#trello-client-js-library
  const card = await t.post(`/cards`, {
    name: cardTitle,
    desc: cardDescription,
    idBoard: boardId,
  });

  // Return a response to the power up
  // You can either return a simple message, or a URL to redirect the user to the card
  // See the documentation for more details: https://developer.atlassian.com/cloud/trello/guides/power-ups/capabilities/#board-buttons
  return {
    text: `Created card: ${cardTitle}`,
    url: card.url,
  };
};

// This is the main function that handles the power up initialization and requests
// It uses the power up API to register the capabilities and settings of the power up
// See the documentation for more details: https://developer.atlassian.com/cloud/trello/guides/power-ups/initializing/
const powerUpHandler = (t, options) => {
  return {
    // This is the board button capability
    // It defines the icon, text, and callback function of the board button
    // See the documentation for more details: https://developer.atlassian.com/cloud/trello/guides/power-ups/capabilities/#board-buttons
    "board-buttons": () => {
      return [
        {
          icon: {
            dark: `${t.signUrl("./images/icon-white.svg")}`,
            light: `${t.signUrl("./images/icon-black.svg")}`,
          },
          text: "Create Card",
          callback: onBoardButtonClick,
        },
      ];
    },
  };
};

// This is the endpoint that serves the power up client library
app.use("/power-up.js", (req, res) => {
  res.redirect(trelloClientUrl);
});

// This is the endpoint that serves the power up handler function
app.use("/power-up", (req, res) => {
  res.json(powerUpHandler);
});

// This is the endpoint that serves the power up icon
app.use("/images", express.static("images"));

// This is the endpoint that serves the power up index page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// This is the code that starts the server and listens for requests
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
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