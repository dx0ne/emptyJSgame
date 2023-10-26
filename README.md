# emptyJSgame

1. Initialize a New Node.js Project:
Ensure you have Node.js and npm (Node Package Manager) installed
npm init -y
npm install pixi.js
npm install lite-server --save-dev (or LiveServer for VS)

npm start
If you haven't set up a script, you can start lite-server directly with:
npx lite-server

npm install electron --save-dev

1. Install electron-packager:
# Install globally
npm install electron-packager -g
# Or as a dev dependency
npm install electron-packager --save-dev

2. Use electron-packager to Build the Executable:
npx electron-packager . MyElectronApp --platform=win32 --arch=x64 --icon=path/to/your/icon.ico
