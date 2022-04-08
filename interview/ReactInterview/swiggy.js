import React, { useState } from "react";

function TransactionTable({ txns }) {


    const DEFAULT_DATE = "2019-11-29";

    const [tx, setTx] = useState(txns);
    const [date, setDate] = useState(DEFAULT_DATE);

    function setSelectedDate(e) {
        setDate(e.target.value);
    }

    function handleDate(e) {
        setTx(val => val.filter((ele) => ele.date === date));
    }

    function sort() {
        let x = tx.sort((a, b) => a.amount - b.amount)
        setTx([...x]);
    };


    return (
        <div className="layout-column align-items-center mt-50">
            <section className="layout-row align-items-center justify-content-center">
                <label className="mr-10">Transaction Date</label>
                <input id="date" type="date" defaultValue={DEFAULT_DATE} onChange={setSelectedDate} />
                <button className="small" onClick={handleDate} >Filter</button>
            </section>

            <div className="card mt-50">
                <table className="table">
                    <thead>
                        <tr className="table">
                            <th className="table-header">Date</th>
                            <th className="table-header">Description</th>
                            <th className="table-header">Type</th>
                            <th className="table-header">
                                <span role="button" id="amount" onClick={sort}>Amount ($)</span>
                            </th>
                            <th className="table-header">Available Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tx.map((e, i) => (
                            <tr key={e.amount}>
                                <td>{e.date}</td>
                                <td>{e.description}</td>
                                <td>{e.type === 1 ? "Debit" : "Credit"}</td>
                                <td>{e.amount}</td>
                                <td>{e.balance}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionTable;
