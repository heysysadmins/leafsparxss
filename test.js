// JavaScript does not have a direct equivalent to PyQt5, but you can use Electron or similar frameworks to create desktop applications with web technologies.
// The following is a conceptual translation to JavaScript using Electron.

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

class Leaf {
  constructor() {
    this.createWindow();
  }

  createWindow() {
    this.window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false
      }
    });

    this.window.maximize();
    this.window.loadURL('https://www.google.com');

    this.window.webContents.on('did-finish-load', () => {
      const title = this.window.getTitle();
      this.window.setTitle(`${title} - Leaf`);
    });

    this.window.on('closed', () => {
      this.window = null;
    });

    this.createMenu();
  }

  createMenu() {
    const template = [
      {
        label: 'Navigation',
        submenu: [
          {
            label: 'Go Back One Page',
            click: () => {
              this.window.webContents.goBack();
            }
          },
          {
            label: 'Go Forward One Page',
            click: () => {
              this.window.webContents.goForward();
            }
          },
          {
            label: 'Reload Current Page',
            click: () => {
              this.window.reload();
            }
          },
          {
            label: 'Leaf Home Page',
            click: () => {
              this.window.loadURL('https://www.google.com');
            }
          },
          {
            label: 'Stop loading Current Page',
            click: () => {
              this.window.webContents.stop();
            }
          }
        ]
      }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
}

app.on('ready', () => {
  new Leaf();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (Leaf.window === null) {
    new Leaf();
  }
});
 note

