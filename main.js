var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({ 
        width: 400,
        height: 600,
        frame: true,
        resizable: true,
        transparent: false,
        icon: 'img/icon.png',
        minHeight: 250,
        minWidth: 360,
        center: true,
        alwaysOnTop: false,
        fullscreen: false,
        title: "Facebook Camouflage",
        acceptFirstMouse: true,
        autoHideMenuBar: true,
        //maxHeight: 500,
        //maxWidth: 500,
        //x: 600,
        //y: 250,
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow == null) {
        createWindow();
    }
});