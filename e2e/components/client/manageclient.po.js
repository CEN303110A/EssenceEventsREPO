var elements = require('./../../elements.js');

var manageClient = function() {
  this.checkForClient = function(clientName) {
    elements.searchClientInput.sendKeys(clientName);

    elements.manageButton.isPresent().then(function(result) {
      if (result) {
        elements.firstManageButton.click();
        elements.modalDeleteButton.click();
        elements.modalYesButton.click();
        elements.searchClientInput.clear();
        elements.searchClientInput.sendKeys(clientName);
      }
    })
  };
};

module.exports = manageClient;
