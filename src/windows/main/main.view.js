////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

const {ipcMain} = require('electron').remote;

angular
  .module('MainView', ['Utils'])
  .controller('MainCtrl', ['Storage', '$scope', function(Storage, scope) {
    let vm = this;
    vm.keychain = null;

    Storage
      .init()
      .then((db) => {
        vm.keychain = db.getDocs();

        ipcMain.on('update-main-view', () => {
          Storage
            .reload()
            .then(() => {
              vm.keychain = db.getDocs();
            });
        });
      });
  }]);
