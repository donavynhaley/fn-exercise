## Project Setup

1.  Initiate a node project with default settings

        npm init -y

1.  Install test dependencies

        npm install --save-dev jest jest-cli jsdom

1.  Install Babel

        npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader

1.  Install webpack

        npm install --save-dev webpack webpack-cli
            
1. Install webpack devserver

        npm install --save-dev webpack-dev-server

1.Install jest-environment-jsdom

        npm i jest-environment-jsdom
        
1.  Create jest.config.js
1.  Create webpack.config.js
1.  Add a babel.config.js
1.  Add .gitignore
1.  Create public, public/scripts, src, src/tests folders

1.  Create index.js in src

1. Create index.html in public (note the change in script tag)

1. Create index.js.test

1. Update scripts object in package.json

1. To build new changes

        npm run build
        
1. To start the server 

        npm run serve
        
1. To run test

        npm test
        
1. To run dev server with live reload

        npm run dev
