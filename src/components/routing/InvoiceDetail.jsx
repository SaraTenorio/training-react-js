import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getInvoice } from '../../databases/routing-data';

export default function InvoiceDetail() {

    let params = useParams();
    let navigate = useNavigate();
    let invoiceDetails = getInvoice(parseInt(params.InvoiceId, 10));

    return (
        <div className='invoice-detail'>
            <h2>Total Due: {invoiceDetails.amount}</h2>
            <p>{InvoiceDetail.name} - {invoiceDetails.number}</p>
            <p>Due Date: {invoiceDetails.due}</p>

            <button className='btn-search' onClick={() => navigate("/expenses")}>See Expenses</button>
        </div>
    )
}