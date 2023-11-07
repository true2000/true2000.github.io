console.log("test")
function getSPFromCardName(card) {
  const p = /\((\d+)\)/
  const m = card.match(p)
  if (m)
      return Number(m[1])

  return 0
}

function setColumnName(id, name) {
  Trello.put(`/lists/${id}`, {
      name: name
  })
}


_COLUMN_REGEX = [/^Completed.*/, /^Next.*/, /^In Progress.*/];

(function() {

  Trello.board.get().then((board)=>{

      const lists = board.lists

      lists.forEach(async(list)=>{
          if (list.closed || !_COLUMN_REGEX.some(p=>p.test(list.name)))
              return

          const cards = await Trello.lists.get(`${list.id}/cards`)
          const storyPoints = cards.map(card=>Number(getSPFromCardName(card.name)))

          const total = storyPoints.reduce((a,b)=>a + b, 0)
          const columnName = list.name.replace(/ \(Total SP: \d+\)/, '')

          console.debug("Updating list: ", columnName, list)

          setColumnName(list.id, `${columnName} (Total SP: ${total})`)
      })

  })
}())
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
          callback: function (t) {
            // Trello will call this if the user clicks on this action
            // we could for example open a new popover...
          }
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