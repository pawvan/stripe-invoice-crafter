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
    doc.pipe(fs.create)

}