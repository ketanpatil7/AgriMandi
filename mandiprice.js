const sellingDetails = {

    crop: crop,

    quantity: Number(quantity),

    unit: unit,

    farmerLocation: location,

    mandiArea: mandiArea

};

localStorage.setItem(
    "sellingDetails",
    JSON.stringify(sellingDetails)
);