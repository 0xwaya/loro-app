<p align='center'>
<img alt="Logo" align="justify-center"  src="./frontend/public/loro-logo.png" width="20%" />
</p><br>


# Loro DApp - Pandemonium Squad 


-   [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create Web3 DApp works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/alchemyplatform/create-web3-dapp/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/alchemyplatform/create-web3-dapp/discussions).


## Quick Overview

```sh
npx create-web3-dapp
cd my-dapp
npm run dev
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, the CLI builder will notify you if a new version has been released. We always suggest you to run using the latest available version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like Rainbowkit, Phantom connect, Hardhat, or Anchor<br>
They will be automatically added and preconfigured so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, go through the following steps:

1. Create a new account on [Alchemy.com](https://alchemy.com)
2. Create a new Alchemy application.

3. In your terminal run:

```sh
  npx create-web3-dapp
```

4. The first time you run this command, it will install the package.

5. Once installed, run the following command again - This will start the DApp creation flow.:

```sh
    npx create-web3-dapp
```

6. Select the dependencies and components you want to include in your web3 application:
   ![product-screenshot-2]


It will create a directory called with the give name inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

Without Blockchain Development Environment
```
my-dapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

With Blockchain Development Environment
```
my-dapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your DApp.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-dapp
```
And, in case you've installed a blockchain development environment, navigate to the frontend folder.

Inside the newly created project, you can run some built-in commands:

### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

## User Guide

You can find detailed instructions on using Create Web3 DApp and many tips in [its documentation]().

