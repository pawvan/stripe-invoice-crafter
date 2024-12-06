/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is li
 * LICENSE file in the ro
 */
const PDFDocument = require('pdfkit');
const fs = require('fs')


const generatePDF=(invoiceData)=>{
    const doc = new PDFDocument()
    const filePath =`./dist/invoices/${invoiceData.id}.pdf`;
    doc.pipe(fs.createWriteStream(filePath));
    doc.fontSize(25).text('Invoice', { align: 'center' });
    doc.text(`Customer: ${invoiceData.customerId}`, 100, 100);
    doc.text(`Amount Due: $${invoiceData.amount_due}`, 100, 120);
doc.end()
return filePath;
}