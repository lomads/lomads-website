import './Web3.style.css';

import { HiOutlineArrowRight } from 'react-icons/hi';

import ipfs from '../../../../assets/ipfs.svg'
import polygon from '../../../../assets/polygon.svg'
import safe from '../../../../assets/safe.svg'

const Web3 = () => {
    return (
        <div className='web3-container'>
            <div>
                <h1>Built using <span>best-in-class</span> components</h1>
            </div>
            <img className='ipfs-img' src={ipfs} alt="ipfs" />
            <img className='polygon-img' src={polygon} alt="polygon" />
            <img className='safe-img' src={safe} alt="safe" />
            <p>More integrations in the pipeline</p>
            <button>join as a partner <HiOutlineArrowRight size={22} /></button>


        </div>
    )
}

export default Web3;