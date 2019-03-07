const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {

  win = new BrowserWindow({width: 800, height: 600 });

  win.loadURL(`file://${__dirname}/ui_dist/index.html`);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

  if (process.plantform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (win === null) {
    createWindow();
  }
});