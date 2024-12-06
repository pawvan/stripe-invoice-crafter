/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {createInvoice }= require('../../src/invoiceBuilder')
const {createCustomer} =require('../../src/stripeApi')
test('should create an invoice for a customer',async()=>{
    const customer = await createCustomer('test@example.com','John doe')
    const items =[
        {
            amount:500
        }
    ]
    const invoice = await createInvoice(customer.id,items);
    expect(invoice).toHaveProperty('id')
    expect(invoice.amount_due).toBe(500)
})