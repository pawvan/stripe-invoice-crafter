/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const createCustomer =async(email,name)=>{
try{
    const customer=stripe.customers.create({
email,name
    })
    return customer;
}
catch(error){
    console.error('Error when creating customers',error);
}
}
module.exports={createCustomer}