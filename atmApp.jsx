const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["deposit", "withdrawal"];
  return (
    <label className="label huge">
    <br></br>
    <h6>Please enter the amount of your {choice[Number(!isDeposit)]}:</h6>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0;
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, SetIsDeposit] = React.useState(true);
  const [transactionState, setTransactionState] = React.useState(0);
  let status = `Your account balance is: $${totalState}`;
  console.log("Render Account");

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number (event.target.value);
    setTransactionState (Number(event.target.value));
  };

  const handleSubmit = () => {
    let newTotal;
    if (isDeposit)
      newTotal = totalState + transactionState;
    else if (transactionState <= totalState)
      newTotal = totalState - transactionState;
    else {
      alert ("Withdrawal denied. Not enough funds");
      newTotal = totalState;
    }
    setTotalState(newTotal);
    console.log(`handleSubmit isDeposit: ${isDeposit} newTotal: ${newTotal}`);
    event.preventDefault();
  };
  return (
    <>
    <div className="title">
      <h1>Welcome to TropiCaliBank!</h1>
    </div>
      <form className="form" onSubmit={handleSubmit}>
        <h4 id="total">{status}</h4>
        <button className="button-d" onClick={()=>SetIsDeposit(true)}>Deposit</button>
        <button className="button-w" onClick={()=>SetIsDeposit(false)}>Withdrawal</button>
        <br></br>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit</ATMDeposit>
      </form>
    </>  );
};
// ========================================
ReactDOM.render(<Account/>, document.getElementById("root"));
