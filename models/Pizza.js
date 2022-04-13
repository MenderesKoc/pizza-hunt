const { schema, model } = require('mongoose');

const PizzaSchema = new schema({
    pizzaName: {
        type: String
    },

    createdBy: {
        type: String
    },

    createdAt: {
        type: String
    },

    size: {
        type: String,

        default: Date.now
    },

    toppings: []
});

//create the Pizza model using the pizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the pizza model

modele.exports = Pizza;