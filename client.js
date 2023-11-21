var authenticationSuccess = function() {
    console.log('Successful authentication');
  };
  
  var authenticationFailure = function() {
    console.log('Failed authentication');
  };

  window.Trello.authorize({
    type: 'popup',
    name: 'Getting Started Application',
    scope: {
      read: 'true',
      write: 'true' },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
  });

var myList = '6532d32a46af4acf8b75d964';

var creationSuccess = function (data) {
  console.log('Card created successfully.');
  console.log(JSON.stringify(data, null, 2));
};

var newCard = {
  name: 'New Test Card',
  desc: 'This is the description of our new card.',
  // Place this card at the top of our list
  idList: myList,
  pos: 'top'
};

window.Trello.post('/cards/', newCard, creationSuccess);
window.Trello.put('/cards/[ID]', {name: 'New Test Card'});