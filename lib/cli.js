#!/usr/bin/env node

const program = require('commander')
const minimist = require('minimist')

const github = require('./github')
const folder = require('./folder')
const config = require('./config')
const pkg = require('../package.json')
const generate = require('./generate')
const { homeScreen } = require('./view')
const postcreate = require('./postcreate')

homeScreen()

program
  .version(pkg.version, '-v, --version')

program
  .command('github <user/repo>')
  .description('Generate scaffold from github user/repo')
  .action(github)

program
  .command('gh <user/repo>')
  .description('(alias) like github but shorter')
  .action(github)

program
  .command('folder <path>')
  .description('Generate scaffold from folder path')
  .action(folder)

program
  .command('f <path>')
  .description('(alias) like folder but shorter')
  .action(folder)

program
  .command('config <key>')
  .description('Generate scaffold from config file key')
  .action(config)

program
  .command('c <key>')
  .description('(alias) like config but shorter')
  .action(config)

program.parse(process.argv)