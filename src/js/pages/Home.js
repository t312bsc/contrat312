import React, { useEffect, useLayoutEffect, useState } from "react";
import Contrat312 from "../../api/Contrat312";

import Web3 from "web3";

import TxToContract from "../components/TxToContract";

import { isEmpty } from "../utils/utils";

const Home = () => {
  const [radioAbi, setRadioAbi] = useState(Contrat312);
  const [currentAddress, setCurrentAddress] = useState([]);
  const [balance, setBalance] = useState(0);
  const [gas, setGas] = useState(0);
  const [price, setPrice] = useState(0);
  const [uniover, setUniover] = useState(false);
  //*-------------------------------------------------------------------------------------*//
  //*******************  Set Up ************************** */
  //*-------------------------------------------------------------------------------------*//
  // ************* set provider with MetaMask *************************** */
  const web3 = new Web3(window.ethereum);
  //*************** Initialize the Contract Here *********************** */
  const contract = new web3.eth.Contract(radioAbi, radioAbi[0].address);
  //******************************************************************** */
  //******************    Here start your App Logic      ********************* */

  const data = {
    web3,
    currentAddress,
    gas,
    price,
    contract,
    radioAbi,
    uniover,
  };

  useLayoutEffect(() => {
    const getAccounts = async () => {
      const address = await web3.eth.getAccounts();
      setCurrentAddress(address);
      console.log(address);
    };
    getAccounts();

    if (typeof web3 !== "undefined") console.log("MM Connected");
    else console.log("MM not found");
  }, []);

  useEffect(() => {
    const getbalance = async () => {
      await web3.eth.getBalance(currentAddress[0]).then((res) => {
        setBalance(web3.utils.fromWei(res));
      });
    };

    const getGas = async () => {
      const simulGas = await web3.eth.estimateGas({
        to: currentAddress[0],
        // from: contract.address,
      });
      const simulPrice = await web3.eth.getGasPrice();
      setGas(simulGas * 10);
      setPrice(simulPrice);
    };

    if (!isEmpty(currentAddress)) {
      getbalance();
      getGas();
    }
  }, [currentAddress]);

  return (
    <div className="home">
      <div className="user">
        <div>
          <div className="info">
            <p>Wallet Connecté :</p>
            <p>{currentAddress[0]}</p>
          </div>
          <input
            type="button"
            value="refresh"
            onClick={async () => {
              setCurrentAddress(await web3.eth.getAccounts());
            }}
          />
          <div>
            <input type="text" value={balance} readOnly />
            <select name="Currency" size="1">
              <option value="BNB">BNB</option>
              <option value="ETH">ETH</option>
              <option value="USDC">USDC</option>
              <option value="BUSD">BUSD</option>
            </select>
          </div>
        </div>
        <div className="gas">
          <p>Estimate fees :</p>
          <p> Gas : {gas}</p>
          <p>PriceGas : {price}</p>
        </div>
        <div className="contractabi">
          <p>Contract selected : </p>
          <select
            name="contract"
            onChange={(e) => {
              switch (e.target.value) {
                case "1":
                  setRadioAbi(Contrat312);
                  break;
              }
            }}
          >
            <option value="1">Contrat312</option>
          </select>
        </div>
      </div>
      <div className="uniover" onClick={() => setUniover(!uniover)}></div>

      <TxToContract data={data} />
    </div>
  );
};

export default Home;
