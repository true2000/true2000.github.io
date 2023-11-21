// Access name of list
var listNamesElement = "KLvU2mDGTQrsWG";
// Access columns of names
var colContainerElement = "RD2CmKQFZKidd6";
// Access cards of columns
var cardsElement = "T9JQSaXUsHTEzk";
// Access completed of cards
var completeElement = "BOkIMdOUAQVOQk i0a3_aIBK1HcUl IRBlPpAzmf7j9R l2mAoxP747LETW";

var x = TrelloPowerUp.iframe();

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      text: 'Update List Names',
      callback: function(t){
        return t.lists('all')
        .then(function(lists){
          lists.forEach(function(list){
            var total = list.cards.length;
            var complete = list.cards.filter(card => card.badges.checkItemsChecked > 0).length;
            list.name = "Total: "+total+"; Complete: "+complete;
            return x.set(list.name)
            t.render(function () {
                return t
                  .get("card", "shared", "estimate")
                  .then(function (estimate) {
                    window.estimateSize.value = estimate;
                  })
                  .then(function () {
                    t.sizeTo("#estimate").done();
                  });
              });
          });
        });
      }
    }];
  }
});
