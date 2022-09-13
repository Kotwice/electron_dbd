const {app, BrowserWindow} = require('electron')

const fs = require('fs')

app.whenReady().then(() => {

    const window = new BrowserWindow (
		{
			width: 1200,
			height: 700,
			frame: true,
			title: 'Экструдер',
			webPreferences: {
				nodeIntegration: true
			}
		}
    )

    window.webContents.openDevTools()

    window.loadFile('./resources/pages/index.html')
  
})
  
app.on('window-all-closed', () => {

	if (process.platform !== 'darwin') {

		app.quit()

	}

})