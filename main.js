"use strict";
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600, resizable: true });
  win.loadURL(
    url.format({
      // pathname: path.join(__dirname, '/app/index.html'),
      pathname: path.join(__dirname, "/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
// const {app, BrowserWindow} = require('electron');

// // var app = require('app');
// // var BrowserWindow = require('browser-window');
// var globalShortcut = require('global-shortcut');
// var configuration = require('./configuration');
// var ipc = require('ipc');

// var mainWindow = null;
// var settingsWindow = null;

// app.on('ready', function() {
//     if (!configuration.readSettings('shortcutKeys')) {
//         configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
//     }

//     mainWindow = new BrowserWindow({
//         frame: false,
//         height: 700,
//         resizable: false,
//         width: 368
//     });

//     mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

//     setGlobalShortcuts();
// });

// function setGlobalShortcuts() {
//     globalShortcut.unregisterAll();

//     var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
//     var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

//     globalShortcut.register(shortcutPrefix + '1', function () {
//         mainWindow.webContents.send('global-shortcut', 0);
//     });
//     globalShortcut.register(shortcutPrefix + '2', function () {
//         mainWindow.webContents.send('global-shortcut', 1);
//     });
// }

// ipc.on('close-main-window', function () {
//     app.quit();
// });

// ipc.on('open-settings-window', function () {
//     if (settingsWindow) {
//         return;
//     }

//     settingsWindow = new BrowserWindow({
//         frame: false,
//         height: 200,
//         resizable: false,
//         width: 200
//     });

//     settingsWindow.loadUrl('file://' + __dirname + '/app/settings.html');

//     settingsWindow.on('closed', function () {
//         settingsWindow = null;
//     });
// });

// ipc.on('close-settings-window', function () {
//     if (settingsWindow) {
//         settingsWindow.close();
//     }
// });

// ipc.on('set-global-shortcuts', function () {
//     setGlobalShortcuts();
// });
