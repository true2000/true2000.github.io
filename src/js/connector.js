// Get the Trello API client
var trello = new Trello('96d4cc5b572cddd7e1334f73c48544c0');

// Create a new filter
var filter = {
  name: 'My Custom Filter',
  text: 'This is my custom filter text'
};

// Add the filter to Trello
trello.addFilter(filter);
