/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {generatePDF} = require('../src/pdfGenerator')
test('should generate the PDF file for the invoice ',()=>{
    const invoiceData = { id: 'inv_12345', customerId: 'cus_12345', amount_due: 500 };
    const filePath = generatePDF(invoiceData)
    expect(filePath).toBeDefined();
    expect(filePath).toContain('dist/invoices/')
})
