import './Web3.style.css';
import arb from '../../../../assets/chainLogos/arbitrum-arb-logo.png'
import base from '../../../../assets/chainLogos/base-logo-in-blue.png'
import opt from '../../../../assets/chainLogos/optimism-ethereum-op-logo.png'
import celo from '../../../../assets/chainLogos/celo-celo-logo.png'
import eth from '../../../../assets/chainLogos/ethereum-eth-logo.png'
import polygon from '../../../../assets/chainLogos/polygon-matic-logo.png'
import gnosis from '../../../../assets/chainLogos/gnosis-gno-gno-logo.png'
import avax from '../../../../assets/chainLogos/avalanche-avax-logo.png'
import ipfs from '../../../../assets/ipfs.svg'

import safe from '../../../../assets/safe.svg'
import web3auth from '../../../../assets/web3auth.svg'
import biconomy from '../../../../assets/biconomy.svg'

import { HiOutlineArrowRight } from 'react-icons/hi'

const Web3 = () => {

    return (
        <section className='web3-container'>
            <div>
                <h1>Supported Networks</h1>
            </div>

            <div style={{ display: "flex", alignItems: "center"}}>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={polygon} alt="" />
            <p>Polygon</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={eth} alt="" />
            <p>Ethereum</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={celo} alt="" />
            <p>Celo</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={avax} alt="" />
            <p>Avalanche</p>
            </div>
            </div>

            <div style={{ display: "flex", alignItems: "center"}}>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={gnosis} alt="" />
            <p>Gnosis</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={base} alt="" />
            <p>Base</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={arb} alt="" />
            <p  >Arbitrum</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={opt} alt="" />
            <p>Optimism</p>
            </div>
            </div>
                    </section>
    )
}

export default Web3;
