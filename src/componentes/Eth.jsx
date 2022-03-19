import React from 'react'
import { useEffect, useState } from 'react';
import { ethers, utils } from 'ethers';

export default function Eth() {

    const [cuenta, setCuenta] = React.useState(null);
    const [balance, setBalance] = React.useState(null);

    useEffect(() => {
        window.ethereum && window.ethereum.request({ method: 'eth_requestAccounts' }).then(i => {
            console.log('cuenta cuando entro',i)
            setCuenta(i[0])
            ethereum.on('accountsChanged', (i) => {
                console.log('cambiado', i)
                setCuenta(i[0])
            })
        });
    }, [])

    useEffect(() => {
        if (cuenta) {
          const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
          provider.getBalance(cuenta).then(i => {
            console.log(ethers.utils.formatEther(i))
            setBalance(ethers.utils.formatEther(i))
          })
        }
      }, [cuenta]);

    return (
        <div>
            {
                cuenta && <div>
                    <h2>{cuenta}</h2>
                    <p>{balance}</p>
                </div>
            }
        </div>
    )
}
