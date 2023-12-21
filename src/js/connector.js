TrelloPowerUp.initialize({
  "board-buttons": function (t, options) {
    return [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEVHcEwLFVcUHmkUJ38kMnACASESFEQ4Sn8UHFolM3YgLGwHCjYQHGgjMG8NHncGBzUVH1wBDmAUI24ZSLMRQ7IsVrY5YboBClIwXLsmUrYfTbVAaMEEOrABA0kBE3NOcsRJWo5XdrxggMRIa7kGIH0YQaQsN2oSMpADAzwsS6ARI2cAB2JwisRjerJOaKg7PFFveJYEM6VeaIoSEzxXOAyQAAAAE3RSTlMA/fOyMP7wDBtCbqvLWOPIkfZ5N7AxtwAAAe5JREFUOI2Vktd22zAQREVZlKxuBcASAEGw96Li//+37FLFciLnnMwbeYfD3QEmk//ScjPfLP/Bt152ts7PjmXQGM7b6eIH/j5vuDEg2s1rxwI5M1wn6Hhp2Du5YueIq6Ru317wdZALzdtIGImOj7/4x2cOimVB0RsG6Fj9yaszCMYDL7j4Wvhd3W6/8VVVgmQ8DzyviJX0ky63z3Vsq1KC5ly1QVD40g/DNC2nswefuRngAJwLkdl65EJA+Shs5jaQ4gAo6fuIwxQY17LcPQqUV878NIxJKeOMaVWOlS72jR7zOcsLVOMUQhtDDl1SYesjSKG01kplVYBreJFijAKUYBYd7ucluqqoCOOi49Mw9H1ts+XELTBPKyGlzK6G8myMYUIC4FKriXsCjnkStysr4k6K3IzvcpvNcIYef0cGvx4Nzc2AjoxmmGEExgMWIAIasgHaCDHOmFGb+2Pnk0I/HuocRSvQDqK0b9ciT+GoOAapR0r/FEJfA6iJLkkS4mpsEMNH3QLwMrunBC0xXPsmjkMJHPF+4utj0nVJCgL6ISpqRRVIyO3u67gvGJACjF1HtBM6Mvt1qfZHOkIAi1s6vQDSUwBOUV36vusGj7o+xWk6DLW1z/d2NSc5+L1zOExJh92v79f6/a7FTXfwGyK2RV1Epl/lAAAAAElFTkSuQmCC', // Place the path to your icon image,
        text: "Update Cards",
        callback: function (t) {
          return t.popup({
            title: "Estimation",
            url: "estimate.html",
          });
        },
      },
    ];
  },

  "card-buttons": function (t, options) {
    return [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEVHcEwLFVcUHmkUJ38kMnACASESFEQ4Sn8UHFolM3YgLGwHCjYQHGgjMG8NHncGBzUVH1wBDmAUI24ZSLMRQ7IsVrY5YboBClIwXLsmUrYfTbVAaMEEOrABA0kBE3NOcsRJWo5XdrxggMRIa7kGIH0YQaQsN2oSMpADAzwsS6ARI2cAB2JwisRjerJOaKg7PFFveJYEM6VeaIoSEzxXOAyQAAAAE3RSTlMA/fOyMP7wDBtCbqvLWOPIkfZ5N7AxtwAAAe5JREFUOI2Vktd22zAQREVZlKxuBcASAEGw96Li//+37FLFciLnnMwbeYfD3QEmk//ScjPfLP/Bt152ts7PjmXQGM7b6eIH/j5vuDEg2s1rxwI5M1wn6Hhp2Du5YueIq6Ru317wdZALzdtIGImOj7/4x2cOimVB0RsG6Fj9yaszCMYDL7j4Wvhd3W6/8VVVgmQ8DzyviJX0ky63z3Vsq1KC5ly1QVD40g/DNC2nswefuRngAJwLkdl65EJA+Shs5jaQ4gAo6fuIwxQY17LcPQqUV878NIxJKeOMaVWOlS72jR7zOcsLVOMUQhtDDl1SYesjSKG01kplVYBreJFijAKUYBYd7ucluqqoCOOi49Mw9H1ts+XELTBPKyGlzK6G8myMYUIC4FKriXsCjnkStysr4k6K3IzvcpvNcIYef0cGvx4Nzc2AjoxmmGEExgMWIAIasgHaCDHOmFGb+2Pnk0I/HuocRSvQDqK0b9ciT+GoOAapR0r/FEJfA6iJLkkS4mpsEMNH3QLwMrunBC0xXPsmjkMJHPF+4utj0nVJCgL6ISpqRRVIyO3u67gvGJACjF1HtBM6Mvt1qfZHOkIAi1s6vQDSUwBOUV36vusGj7o+xWk6DLW1z/d2NSc5+L1zOExJh92v79f6/a7FTXfwGyK2RV1Epl/lAAAAAElFTkSuQmCC', // Place the path to your icon image,
        text: "Update Cards",
        callback: function (t) {
          return t.popup({
            title: "Estimation",
            url: "estimate.html",
          });
        },
      },
    ];
  },
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