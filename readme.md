## Project Setup

1.  Initiate a node project with default settings

        npm init -y

2.  Install test dependencies

        npm install --save-dev jest jest-cli jsdom

3.  Install Babel

        npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader

4.  Install webpack

            npm install --save-dev webpack webpack-cli

Install jest-environment-jsdom
        npm i jest-environment-jsdom
5.  Create jest.config.js
6.  Create webpack.config.js
7.  Add a babel.config.js
8.  
9.  Create public, public/scripts, src, src/tests folders
10.  Create index.js in src
11. Create index.html in public
12. Install webpack devserver

                npm install --save-dev webpack-dev-server

12. Add the following object to webpack.config.js

                devServer: {
                contentBase: path.resolve(__dirname, "public"),
                publicPath: "/scripts",
                },

13. Update build script in package.json as below

                  "scripts": {
                  "serve": "webpack serve --mode development",
                  "build": "webpack serve --mode production",
                  "test": "jest --watchAll"

    },

14. Add source-map property to webpack config as below. This allows to map the compiled code to the source code

                devtool: "source-map",

15. Create index.js.test
