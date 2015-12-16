#!/usr/bin/env node

const fs   = require('fs')
    , path = require('path')

    , updateAliases = require('./update-aliases')

require('http').globalAgent.maxSockets = 20

if (process.argv.length < 3) {
  console.error('Usage: update <domain>')
  return process.exit(1)
}

const domain    = process.argv[2].replace(/\/$/, '')
    , dir       = path.join(__dirname, '..', domain)


if (!fs.statSync(dir).isDirectory()) {
  console.error(`Usage: update <domain> ("domain" must be a directory above ${__dirname}`)
  return process.exit(1)
}

const credsFile = path.join(dir, 'credentials.json')

var creds;
if (process.env['MAILGUN_API_KEY']) {
  creds = {'api-key': process.env['MAILGUN_API_KEY']}
} else if (fs.existsSync(credsFile)) {
  creds = require(credsFile)

  if (typeof creds['api-key'] != 'string') {
    console.error(`Error: ${credsFile} does not have an "api-key" property`)
    return process.exit(1)
  }
} else {
  console.error(`Error: ${dir} does not have a credentials.json file`)
  return process.exit(1)
}

const aliases = require(path.join(dir, 'aliases.json'))

updateAliases(domain, creds, aliases, function (err) {
  if (err)
    throw err
})
