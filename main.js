const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

let win

//Menu.setApplicationMenu(false)

function CreateWindow() {
    win = new BrowserWindow({width: 1440, height: 900, resizable: false})

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file',
        slashes: true,
        
    }))

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', CreateWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        CreateWindow()
    }
})