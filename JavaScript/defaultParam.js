// Default Parameters.

//You can use Default value if value is not passed.
//Total Price = Cost of food + delivery charges + texes.

function calculateToatalPrice(costOfFood, taxes, deliveryCharges=10){
    const result = costOfFood + deliveryCharges + taxes
    console.log(result)
}

// general membership.
calculateToatalPrice(400,20,30)

calculateToatalPrice(400,20)