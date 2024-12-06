/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const createInvoice = async (customerId,items)=>{
    try{
const invoice = await stripe.invoices.create({
    customer:customerId,
    auto_advance:true,
    collection_method:'charge_automatically',
    description:'Invocie for your purchases',
    amount_due:items.reduce((acc,item)=>acc+item.amount,0),
    
    currency:'usd'
})
    }
    catch(error){

    }
}