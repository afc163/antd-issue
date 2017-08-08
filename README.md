Antd Issue
==========

Get Start
---------

```bash
$ yarn
$ npm start
```

Reproduction Step
-----------------

Just modify `App.js` file, and browser will reload, then you will see the error in `console`.

remove the `webpack.optimize.ModuleConcatenationPlugin` in `webpack.config.js`, try it again.
