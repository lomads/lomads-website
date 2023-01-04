import './Web3.style.css';

import { HiOutlineArrowRight } from 'react-icons/hi';

import ipfs from '../../../../assets/ipfs.svg'
import polygon from '../../../../assets/polygon.svg'
import safe from '../../../../assets/safe.svg'

const Web3 = ({ toggleModal }) => {
    return (
        <section className='web3-container'>
            <div>
                <h1 data-speed="0.8">Built using <span>best-in-class</span> components</h1>
            </div>
            <img className='ipfs-img' src={ipfs} alt="ipfs" data-speed="1" />
            <img className='polygon-img' src={polygon} alt="polygon" data-speed="1" />
            <img className='safe-img' src={safe} alt="safe" data-speed="1" />
            <p data-speed="0.8">More integrations in the pipeline</p>
            <button data-speed="0.8" onClick={() => toggleModal(true)}>join as a partner <HiOutlineArrowRight size={22} /></button>
        </section>
    )
}

export default Web3;