////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

const {remote, ipcRenderer} = require('electron');
const {Menu} = remote;

module.exports = {
  create: ()=> {
    const appMenu = Menu.buildFromTemplate([
      {
        label: 'Electron',
        submenu: [{
          label: 'Credits',
          click: ()=> {
            alert('Built with Electron & Loki.js.');
          }
        }]
      },
      {
        label: 'File',
        submenu: [
          {
            label: 'Create Password',
            accelerator: 'CmdOrCtrl+N',
            click: ()=> {
              // alert('Create new password');
              ipcRenderer.send('toggle-insert-view');
            }
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            selector: 'terminate:' //osx only
          }
        ]
      }
    ]);

    Menu.setApplicationMenu(appMenu);
  }
};
