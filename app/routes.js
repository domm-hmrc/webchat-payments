//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Add your routes here
router.use('/01', require('./views/agent/01/_routes'));
router.use('/02', require('./views/taxpayer/01/_routes'));

module.exports = router
