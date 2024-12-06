/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {createCustomer} = require('../src/stripeApi')
test('should create a customer successfully',async ()=>{
const customer = await createCustomer('test@domain.com','Test Customer');
expect(customer).toHaveProperty('id');
expect(customer.email).toBe('test@domain.com')
})