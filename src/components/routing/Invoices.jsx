import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../../databases/routing-data'

export default function Invoices() {
    let invoices = getInvoices();

    return (
        <div className='invoices'>
            <nav>
                {
                    invoices.map(i => (
                        <Link to={`/invoices/${i.number}`} key={i.number}>
                            {i.name}
                        </Link>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    )
}