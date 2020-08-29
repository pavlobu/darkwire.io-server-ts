# darkwire.io-sever-ts

## Description

This is a darkwire.io server translated to typescript, 
right now it only supports
**memory based store** (no Redis support as in original darkwire.io !)

## darkwire.io client that DOES NOT require https and using node-forge instead of window.crypto.subtle can be found [here](https://github.com/pavlobu/darkwire.io/tree/master/client) !

## prerequisites:

you need to have globally installed:

1. yarn
2. tsc (typescript compiler)

```
npm install -g yarn
npm install -g tsc
```

then run this command to install dependencies:

```bash
yarn install
```

## how to use

### run in production
to run in production:

```bash
yarn start:prod
```

to kill server in production:

```bash
yarn stop:prod
```

then you can start your 
[darkwire.io/client](https://github.com/darkwire/darkwire.io/tree/master/client) 
in your different terminal or serve a compiled version of client with
any static file server! (apache, python, node ...)



### run in development

you will need two terminals running.
you will run commands that will watch changes on your .ts files 
and compile them automatically to .js files, then server will be 
restarted

#### in first terminal run:

```bash
yarn start # in first terminal
```

#### in second terminal run:

```bash
tsc -w # in second terminal
```

## Copyright

Copyright (c) 2016-present darkwire.io

