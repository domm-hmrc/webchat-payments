//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/tax-type-select', function(request, response) {

    var tax = request.session.data['tax-type']
    if (tax == "Self Assessment"){
        response.redirect("/agent/01/sa-details")
    } 
    else if (tax == "Simple Assessment"){
        response.redirect("/agent/01/simp-details")
    } 
    else if (tax == "VAT"){
        response.redirect("/agent/01/vat-type-details")
    } 
    else {
        response.redirect("/agent/01/x-ref-details")
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

