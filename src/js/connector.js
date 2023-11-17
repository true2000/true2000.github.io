const apiKey = '96d4cc5b572cddd7e1334f73c48544c0';
const token = 'ATTA724953d7de3fa035c1bc7e117f8043548453603f5fe0068b683f2f7f3cdbfa32358D5658';
const boardId = '7bZN9C3M/testing-trello-board';

fetch(`https://api.trello.com/1/boards/${boardId}/lists?cards=open&key=${apiKey}&token=${token}`)
  .then(response => response.json())
  .then(lists => {
    lists.forEach(list => {
      const cardCount = list.cards.length;
      const newListName = list.name.replace(/\(\d+\)$/, '') + `(${cardCount})`;
      fetch(`https://api.trello.com/1/lists/${list.id}/name?key=${apiKey}&token=${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: newListName })
      });
    });
  })
  .catch(error => console.error('Error:', error));
