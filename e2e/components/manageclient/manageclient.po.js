var elements = require('./../elements.js');

var manageClient = function() {
  this.checkForClient = function(clientName) {
    elements.searchClientInput.sendKeys(clientName);

    elements.firstClientName.isPresent().then(function(result) {
      if (result) {
        elements.firstManageButton.click();
        elements.modalDeleteButton.click();
        elements.modalYesButton.click();
      }
    });
  };
};

module.exports = manageClient;
