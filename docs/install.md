# Web Template Studio Installation Instructions

## Prerequisites

*Web Template Studio* runs as a VSCode extension and hence you'll need to have *VScode* version 1.38 or above installed.

To run the generated templates you'll need some of the followings installed depending on the type of project you´re creating:
- [node](https://nodejs.org/en/download/)
- [python](https://www.python.org/downloads/)
- [ASP.NET](https://dotnet.microsoft.com/download)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install)
- [react native windows prerequisites](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies)

## Installing the official release
Head over to [Visual Studio Marketplace’s Web Template Studio page](https://marketplace.visualstudio.com/items?itemName=WASTeamAccount.WebTemplateStudio-dev-nightly) and click "[install](vscode:extension/WASTeamAccount.WebTemplateStudio-dev-nightly)" 😊.

## Installing the latest Microsoft Web Template Studio release manually

1. Head over to [Visual Studio Marketplace’s Web Template Studio page](https://marketplace.visualstudio.com/items?itemName=WASTeamAccount.WebTemplateStudio-dev-nightly)
2. In the right panel, section Resources, click on "Download Extension" and download the `.vsix` file

<img alt="VSIX Download" src="./resources/vsix-download.png" width="80%" />

3. Open VSCode
4. Open the extensions menu from VSCode sidebar
5. Click on the ellipsis in the upper right hand corner
6. Choose *Install from VSIX*
7. Select the `.vsix` you downloaded earlier. *Web Template Studio* is now ready to use

<img alt="VSIX Install Instructions" src="./resources/vsix-install-instructions.png" width="400px"  />

#### Run the Release

- Open **VSCode**
- Press `Ctrl + Shift ⇧ + P` (Windows/Linux) or `Command ⌘ + Shift ⇧ + P` (Mac) to open VSCode's extension launcher
- Type/Select `Web Template Studio: Create Web App` and press `Enter` to launch the extension
