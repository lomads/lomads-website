import './Web3.style.css';

import ipfs from '../../../../assets/ipfs.svg'
import polygon from '../../../../assets/polygon.svg'
import safe from '../../../../assets/safe.svg'
import web3auth from '../../../../assets/web3auth.svg'
import biconomy from '../../../../assets/biconomy.svg'
import eth from '../../../../assets/eth.svg'
import { HiOutlineArrowRight } from 'react-icons/hi'

const Web3 = () => {

    return (
        <section className='web3-container'>
            <div>
                <h1 data-speed={window.innerWidth > 1024 ? "0.9" : "1"} >Built using <span>best-in-class</span> components</h1>
            </div>
            <div className='mobile-img'>
                <img className='ipfs-img-1' src={ipfs} alt="" />
                <img className='polygon-img-1' src={polygon} alt="" />
                <img className='safe-img-1' src={safe} alt="safe" />
                <img className='eth-img-1' src={eth} alt="" />
                <img className='web-img-1' src={web3auth} alt="" />
                <img className='biconomy-img-1' src={biconomy} alt="" />
            </div>
            <img className='ipfs-img' src={ipfs} alt="" />
            <img className='polygon-img' src={polygon} alt="" />
            <img className='safe-img' src={safe} alt="" />
            <img className='eth-img' src={eth} alt="" />
            <img className='web-img' src={web3auth} alt="" />
            <img className='biconomy-img' src={biconomy} alt="" />
            <p data-speed={window.innerWidth > 1024 ? "0.9" : "1"}>More integrations in the pipeline</p>
            {<button style={{marginTop:100}} data-speed={window.innerWidth > 1024 ? "0.9" : "1"} onClick={() => { window.location.href = "/partner" }}>JOIN OUR WAITLIST <HiOutlineArrowRight size={22} /></button>}         
            </section>
    )
}

export default Web3;
