// Path to CSS of your application
require('../src/index.css')

const Testshot = require('@toptal/testshot')

const scenariosContext = require.context('../src', true, /\/scenarios\.jsx?$/)
scenariosContext.keys().forEach(scenariosContext)

Testshot.init({className: 'testshot'})
