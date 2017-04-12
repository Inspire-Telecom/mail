# Foundation for Emails Template

- Handlebars HTML templates with [Panini](http://github.com/zurb/panini)
- Simplified HTML email syntax with [Inky](http://github.com/zurb/inky)
- Sass compilation
- Image compression
- Built-in BrowserSync server
- Full email inlining process

## Installation

To use this template, your computer needs [Node.js](https://nodejs.org/en/) 6.0.0 or greater.

1. First download it with Git:

```bash
git clone https://github.com/Inspire-Telecom/mail mail-inspire
```

2. Then open the folder in your command line, and install the needed dependencies:

```bash
cd mail-inspire
npm install
```

## Build Commands

Run `npm start` to kick off the build process. A new browser tab will open with a server pointing to your project files.

Run `npm run build` to inline your CSS into your HTML along with the rest of the build process.

Run `npm run dist` to build as above, then move it for publication. 

Run `node ./send.js` to send it. Don't forget to review the sender script options!
