import { useState } from "react";

function Main() {
    return(
        <section className="main-section">
            <form action="" className="loan">
                <label htmlFor="loanAmount">Loan Amount</label>
                <input type="number" name="loanAmount"/>
                <label htmlFor="loanTerm">Loan Term</label>
                <input type="number" name="loanTerm"/>
                <label htmlFor="interestRate">Interest Rate</label>
                <input type="number" name="interestRate"/>
            </form>
            <div className="loan-results">
                
            </div>
        </section>
    )
}

export default Main;