const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

function createWindow() {
  const { width: screenWidth } = screen.getPrimaryDisplay().workAreaSize;

  const winWidth = 360;
  const winHeight = 360;
  const margin = 20;

  const win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: screenWidth - winWidth - margin,
    y: margin,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    movable: true,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Keep it only above desktop icons, NOT above other app windows
  win.setAlwaysOnTop(true, "desktop");
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
