//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/how-to-pay', function(request, response) {

    var howtoPay = request.session.data['choose-a-way-to-pay']
    if (howtoPay == "Pay by bank account"){
        response.redirect("/taxpayer/01/search-bank")
    }
    else {
        response.redirect("/taxpayer/01/card-fees")
    }
})

router.post('/vat-type-select', function(request, response) {

    var vatType = request.session.data['vat-payment']
    if (vatType == "VAT bill"){
        response.redirect("/agent/01/vat-details")
    } else {
        response.redirect("/agent/01/vat-details-penalty")
    }
})

module.exports = router

