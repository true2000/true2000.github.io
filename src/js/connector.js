var Trello = require("node-trello");
var t = new Trello('96d4cc5b572cddd7e1334f73c48544c0', 'ATTA724953d7de3fa035c1bc7e117f8043548453603f5fe0068b683f2f7f3cdbfa32358D5658');

t.get("/1/boards/7bZN9C3M/testing-trello-board/lists", { cards: "open" }, function(err, lists) {
  if (err) throw err;
  lists.forEach(function(list) {
    var cardCount = list.cards.length;
    var newListName = list.name.replace(/\(\d+\)$/, '') + `(${cardCount})`;
    t.put(`/1/lists/${list.id}/name`, { value: newListName }, function(err) {
      if (err) throw err;
    });
  });
});
