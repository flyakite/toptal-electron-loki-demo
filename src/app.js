////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

/**
 * Main process
 */
const {app, ipcMain, BrowserWindow} = require('electron');

let mainWindow = null,
  insertWindow = null;

function createInsertWindow() {
  insertWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false
  });

  insertWindow.loadURL(`file://${__dirname}/windows/insert/insert.html`);
  insertWindow.openDevTools();
  insertWindow.on('closed',() => {
    insertWindow = null;
  });
}

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  });

  mainWindow.loadURL(`file://${__dirname}/windows/main/main.html`);
  mainWindow.openDevTools();

  ipcMain.on('toggle-insert-view', () => {
    if(!insertWindow) {
      createInsertWindow();
    }

    return (insertWindow.isVisible()) ? insertWindow.hide() : insertWindow.show();
  });
});
