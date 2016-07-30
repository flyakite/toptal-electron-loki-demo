////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

const {remote} = require('electron');
const {ipcMain} = remote.require('electron');

angular.module('InsertView', ['Utils'])
.controller('InsertCtrl', ['Storage', '$scope', function (Storage, scope) {
  let vm = this;

  vm.loaded = false;
  vm.formData = {};

  function init() {
    // disable formfields if db is not ready
    vm.loaded = false;
    // init the Storage so we can save the docs
    Storage.init().then( () => {
      vm.loaded = true;
    });
  }

  init();
  ipcMain.on('reload-insert-view', init);
}]);
