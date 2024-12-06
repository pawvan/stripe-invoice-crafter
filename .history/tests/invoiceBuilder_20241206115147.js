/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {createInvoice} = require('../src/invoiceBuilder') 
test('should create an invoice successfully',async()=>{
const customerId = 'cus_12345';
const items =[{
    amount:500
}]
const invoice = await createInvoice(customerId,items)
expect(invoice)
})