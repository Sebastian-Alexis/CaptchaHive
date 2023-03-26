# CaptchaHive Library

CaptchaHive is a JavaScript library that creates 5 honeypot fields on a web page to deter spam bots from submitting form data. CaptchaHive exports a single function:
> createHoneypotFields() 

Which creates the honeypot fields and adds them to the page.

### How it works: 
The CaptchaHive library is a JavaScript library that aims to solve the problem of CAPTCHA blocking users with visual impairments. CaptchaHive uses a system that looks at how users interact with the site to determine their humanness instead of making them take a CAPTCHA test. It has five layers of protection to differentiate between bots and humans and falls back to CAPTCHA only when the confidence score is low. Once the user solves the CAPTCHA, it stores a session cookie to eliminate further bot checks for that site.

### The 5 stage solution

CaptchaHive follows a five-stage protection system that aims to differentiate, deviate, detect, disengage, and declare the user safe.

Differentiate: The library checks user behavior against bot behavior, including the browser used, pace/sequence of interactions, cookies, and redirect tokens.
Deviate: The library uses dynamic honeypot traps to deviate bots from actual form inputs. It includes honeypot traps using CSS and JavaScript.
Detect: The library's detection algorithm finds bots based on previous checks to differentiate them from actual users.
Disengage: If a bot request is recognized, the library falls back to image captcha with an option for audio captcha for people with disabilities.
Declared Safe: Once the user solves the captcha, the library stores a session cookie in their browser. The cookie eliminates further bot checks for that site, declaring the user safe.

![Graph of Captcha Hive's 5-Layer model to detect bots](https://cdn.discordapp.com/attachments/750817240043094099/1089356218709057697/image.png)

### Testing:
CaptchaHive was tested with 5 trials, each including 600 runs from users and users with disabilities, as well as 100 runs from each of the 5 different bot types. The results showed that the library was able to identify bots with a 95% accuracy rate, with the identification rate being directly related to the sophistication of the bot. The rudimentary bots had the best identification rate, while modern sophisticated bots had the lowest identification rate at 92%. The library identified 97% of users with screen readers as humans and did not require them to fill in CAPTCHA, with only 3% of users with screen readers requiring Audio CAPTCHA. Overall, CaptchaHive is accessible, and private, providing a solution for users with visual impairments without invading a users privacy.


## Installation

You can install CaptchaHive via npm (COMING SOON):
> npm install honeypot-fields

Or you can include CaptchaHive directly by downloading captchahive.js and calling it in your main js file:
> import { createHoneypotFields } from 'captchahive.js';

## Usage

To use CaptchaHive, simply call the createHoneypotFields() function in your JavaScript code. For example:

> import createHoneypotFields from 'honeypot-fields';
createHoneypotFields();

This will create 5 honeypot fields on the web page and add them to the body. The honeypot fields will be hidden from view using CSS, but will be visible to spam bots that ignore CSS rules.

If a spam bot fills in any of the honeypot fields, an alert message will be displayed to the user (COMING SOON-users will be redirected to an aduio/visual captcha, and if that is failed, they will be denied access to site.)

## Contributing

If you find any issues with CaptchaHive or would like to suggest an improvement, please feel free to submit an issue or pull request on GitHub.

## License

CaptchaHive is licensed under the MIT license. See the LICENSE.md for more information.
