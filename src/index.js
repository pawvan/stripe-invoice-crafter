/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {createInvoice}=require('./invoiceBuilder')
const {generatePDF} =require('./pdfGenerator')
module.exports={
    createInvoice,generatePDF
}
