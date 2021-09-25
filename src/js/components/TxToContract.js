import React, { useState } from "react";

const TxToContract = (props) => {
  const [excludeAddr, setExcludeAddr] = useState();
  const [excludeAddrCall, setExcludeAddrCall] = useState();
  const [excludeAddrBool, setExcludeBool] = useState();
  const [disableFeesBool, setDisableFeesBool] = useState();
  const [disableFeesBoolCall, setDisableFeesBoolCall] = useState();
  const [liquidityFees, setLiquidityFees] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [blacklistAddress, setBlacklistAddress] = useState();
  const [blacklistAddressBool, setBlacklistAddressBool] = useState();
  const [withdrawRecipient, setWithdrawRecipient] = useState();
  const [withdrawERC20, setWithdrawERC20] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState();

  // const web3 = props.data.web3;
  const contract = props.data.contract;
  const address = props.data.currentAddress;
  // const gas = props.data.gas;
  // const price = props.data.price;
  // const Abi = props.data.radioAbi;

  const excludeFromFees = async () => {
    await contract.methods
      .excludeFromFee(excludeAddr, excludeAddrBool)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  const excludeFromFeesCall = async () => {
    await contract.methods
      .excludeFromFee(excludeAddr)
      .call()
      .then((res) => console.log(res));
  };

  const disableFees = async () => {
    await contract.methods
      .desableFees(disableFeesBool)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  const disableFeesCall = async () => {
    await contract.methods.desableFeesCall().then((res) => console.log(res));
  };
  // disableFeesCall();

  const SetLiquidityFees = async () => {
    await contract.methods
      .setLiquidityFees(liquidityFees)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  const Setx = async () => {
    await contract.methods
      .setx(x)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  const Sety = async () => {
    await contract.methods
      .sety(x)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  const blacklisted = async () => {
    await contract.methods
      .balcklistAddress(blacklistAddress, blacklistAddressBool)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  const withdrawToken = async () => {
    await contract.methods
      .withdrawAnyToken(withdrawRecipient, withdrawERC20, withdrawAmount)
      .send({
        from: address[0],
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="txtocontract">
      <div className="methods">
        <input
          type="button"
          value="LogMethods"
          onClick={() => console.log(contract)}
        />
      </div>

      <div className="txsetup">
        <div className="contract"></div>
        <div className="tx">
          <div>
            <h3>Exclure une addresse des Fees</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => {
                  console.log(e.target.value);
                  setExcludeAddr(e.target.value);
                }}
                placeholder="addresse"
              />
              <input
                type="text"
                onChange={(e) => setExcludeBool(e.target.value)}
                placeholder="true of false"
              />

              <input
                type="button"
                value="Send"
                onClick={() => excludeFromFees()}
              />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>Désactiver les Fees</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => setDisableFeesBool(e.target.value)}
                placeholder="true or false"
              />
              <input type="button" value="Send" onClick={() => disableFees()} />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>Parametrer le montant de Fees prélever</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => setLiquidityFees(e.target.value)}
                placeholder="Montant des Fees a prélever"
              />
              <input
                type="button"
                value="Send"
                onClick={() => SetLiquidityFees()}
              />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>setUp l'address X</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => setX(e.target.value)}
                placeholder="Address X"
              />
              <input type="button" value="Send" onClick={() => Setx()} />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>setUp l'address Y</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => setY(e.target.value)}
                placeholder="Address Y"
              />
              <input type="button" value="Send" onClick={() => Sety()} />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>BLACKLIST</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => {
                  setBlacklistAddress(e.target.value);
                }}
                placeholder="addresse"
              />
              <input
                type="text"
                onChange={(e) => setBlacklistAddressBool(e.target.value)}
                placeholder="true of false"
              />
              <input type="button" value="Send" onClick={() => blacklisted()} />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>retirer n'importe quel token du contract</h3>
            <div className="sendtx">
              <input
                type="text"
                onChange={(e) => setWithdrawRecipient(e.target.value)}
                placeholder="Addresse du receveur"
              />
              <input
                type="text"
                onChange={(e) => setWithdrawERC20(e.target.value)}
                placeholder="Addresse du token / lp"
              />
              <input
                type="text"
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="Montant"
              />
              <input
                type="button"
                value="Owner"
                onClick={() => withdrawToken()}
              />
            </div>
            <div className="data">
              <p></p>
            </div>
            <div className="describ">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxToContract;
