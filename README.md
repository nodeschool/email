# nodeschool/email [![Build Status](https://travis-ci.org/nodeschool/email.svg?branch=master)](https://travis-ci.org/nodeschool/email)
### (forked from [nodejs/email](https://github.com/nodejs/email))

**MX server management for nodeschool.io**

## Email aliases

The [nodeschool.io](./nodeschool.io) directory contains an [aliases.json](./nodeschool.io/aliases.json) file that provides email mappings for the nodeschool.io domain. It maps `"from"` usernames @nodeschool.io to `"to"` email addresses.

A `MAILGUN_API_KEY` environment variable should be set or a _credentials.json_ file needs to exist in the same directory containing an `"api-key"` property for the [mailgun](http://www.mailgun.com/) account managing the nodeschool.io MX servers.

## Updating

### Automatic

**Merges to `master` should be automatically deployed**.

Give it a few minutes, then send a test email. Wait a few more minutes to receive it. If it doesn't come through, ping **@brianloveswords** on the PR that merged the new address to confirm everything is set up correctly.

### Manual

The [update](./update) directory contains a simple node program that you run and provide a domain (`update/update.js nodeschool.io`) which will read the aliases, fetch the list of mail routes from mailgun and update the routes to make sure they match the required aliases.

## License & copyright

The contents of this repository is Copyright (c) 2015 The Node.js Foundation and licensed under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.
