const child_process = require('child_process');

const macOSChromiumDirection = '/Applications/Chromium.app/Contents/MacOS/Chromium';
const browserListArray = ['type chromium', 'type chromium-browser', 'type google-chrome', 'type chrome'];

let yourAvailableBrowsers = [];

function getOperatingSystemInfo() {
  try {
    return child_process.execSync('uname -s').toString().trim();
  } catch (error) {
    console.error('Something wrong with bash command');
  }
}

function systemSync(cmd) {
  try {
    const stringBashResult = child_process.execSync(cmd).toString();
    return stringBashResult.substring(stringBashResult.indexOf('/') - 1).trim();
  } catch (error) {
    // console.error('Something wrong with bash command');
    // error.status; // Might be 127 in your example.
    // error.message; // Holds the message you typically want.
    // error.stderr; // Holds the stderr output. Use `.toString()`.
    // error.stdout; // Holds the stdout output. Use `.toString()`.
  }
}

if (getOperatingSystemInfo() === 'Darwin') {
  yourAvailableBrowsers.push(macOSChromiumDirection);
} else {
  browserListArray.forEach(function (element) {
    if (systemSync(element) !== undefined) {
      yourAvailableBrowsers.push(systemSync(element));
      console.log('Browser' + element.split('type')[1], 'found');
    } else {
      console.error("Can't find" + element.split('type')[1], 'directory');
    }
  });
}

console.log(getOperatingSystemInfo());

if (yourAvailableBrowsers.length === 0) {
  console.error('No available browser found, check if you have "chrome" or "chromium" installed on your local machine !');
}

module.exports = {
  launch: {
    executablePath: yourAvailableBrowsers[0],
    headless: false,
    timeout: 18000,
    // executablePath: '/usr/bin/google-chrome',
    // args: ['--user-agent=Puppeteer'],
    // slowMo: 0,
    // dumpio: true,
    // defaultViewport: null,
    // devtools: true,
    // browserURL: "Your browser url",
    // browser: 'chromium', // Or Firefox
  },
  // browserContext: 'incognito',
  exitOnPageError: true,
};
