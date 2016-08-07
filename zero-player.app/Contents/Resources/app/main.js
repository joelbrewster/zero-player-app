const electron=require('electron');const{app}=electron;const{BrowserWindow}=electron;let win;function createWindow(){win=new BrowserWindow({width:700,height:700});win.loadURL(`file:win.on('closed',()=>{win=null;});}
app.on('ready',createWindow);app.on('window-all-closed',()=>{if(process.platform!=='darwin'){app.quit();}});app.on('activate',()=>{if(win===null){createWindow();}});
