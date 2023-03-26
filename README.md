### Honeypot Fields Library

This is a JavaScript library that creates 5 honeypot fields on a web page to deter spam bots from submitting form data. The library exports a single function createHoneypotFields() that creates the honeypot fields and adds them to the page.

## Installation

You can install this library via npm (COMING SOON):
> npm install honeypot-fields

Or you can include the library directly by downloading captchahive.js and calling it in your main js file:
import { createHoneypotFields } from 'captchahive.js';

## Usage

To use this library, simply call the createHoneypotFields() function in your JavaScript code. For example:

> import createHoneypotFields from 'honeypot-fields';
>createHoneypotFields();

This will create 5 honeypot fields on the web page and add them to the body. The honeypot fields will be hidden from view using CSS, but will be visible to spam bots that ignore CSS rules.

If a spam bot fills in any of the honeypot fields, an alert message will be displayed to the user (COMING SOON-users will be redirected to an aduio/visual captcha, and if that is failed, they will be denied access to site.)

## Contributing

If you find any issues with this library or would like to suggest an improvement, please feel free to submit an issue or pull request on GitHub.

##License

This library is licensed under the MIT license. See the LICENSE file for more information.
