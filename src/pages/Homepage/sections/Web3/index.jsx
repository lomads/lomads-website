import './Web3.style.css';

import { HiOutlineArrowRight } from 'react-icons/hi';

import ipfs from '../../../../assets/ipfs.svg'
import polygon from '../../../../assets/polygon.svg'
import safe from '../../../../assets/safe.svg'
import { useEffect } from 'react';

const Web3 = () => {

    return (
        <section className='web3-container'>
            <div>
                <h1 data-speed={window.innerWidth > 1024 ? "0.9" : "1"} >Built using <span>best-in-class</span> components</h1>
            </div>
            <img className='ipfs-img' src={ipfs} alt="ipfs" />
            <img className='polygon-img' src={polygon} />
            <img className='safe-img' src={safe} alt="safe" />
            <p data-speed={window.innerWidth > 1024 ? "0.9" : "1"}>More integrations in the pipeline</p>
            <button data-speed={window.innerWidth > 1024 ? "0.9" : "1"} onClick={() => { window.location.href = "/partner" }}>join as a partner <HiOutlineArrowRight size={22} /></button>
        </section>
    )
}

export default Web3;