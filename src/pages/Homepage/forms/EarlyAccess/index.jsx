import React, { useState } from "react";

import logo from '../../../../assets/logo.svg';

import { IoCloseOutline } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'

const EarlyAccessForm = ({ toggleModal }) => {
    const [check, setCheck] = useState('YES');
    const [name, setName] = useState('');
    const [tool, setTool] = useState('');

    const handleEraseForm = () => {
        setCheck("YES");
        setName("");
        setTool("");
    }

    const handleSubmitForm = () => {
        console.log(check, name, tool);
    }

    return (
        <div className="modal-container">
            <div className="form-header">
                <img src={logo} alt="logo" />
                <button onClick={() => toggleModal(false)}><IoCloseOutline size={30} color="#C94B32" /></button>
            </div>
            <div className="form-container">
                <div className="form-title">
                    <h1>GET <span>EARLY ACCESS</span></h1>
                </div>
                <div className="form-title" style={{ marginBottom: '60px' }}>
                    <h1>TO LOMADS BETA</h1>
                </div>

                <div className="form-input-wrapper">
                    <div className="form-input-row">
                        <h1>Your name or pseudonym</h1>
                        <div className="form-tag required">
                            <p>Required</p>
                        </div>
                    </div>
                    <div className="form-input-row">
                        <input type="text" placeholder="Answer" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>

                <div className="form-input-wrapper">
                    <div className="form-input-row">
                        <h1>Which web2 and/or web3 tools are you using for your
                            organisation/community?</h1>
                        <div className="form-tag">
                            <p>Optionnal</p>
                        </div>
                    </div>
                    <div className="form-input-row">
                        <input type="text" placeholder="Answer" value={tool} onChange={(e) => setTool(e.target.value)} />
                    </div>
                </div>

                <div className="form-input-wrapper">
                    <div className="form-input-row">
                        <h1>Has your organisation received any external funding?</h1>
                        <div className="form-tag required">
                            <p>Required</p>
                        </div>
                    </div>
                    <div className="form-input-row flex-column">
                        <div className="form-checkbox-row">
                            <div className="form-checkbox" onClick={() => setCheck("YES")}>
                                {
                                    check === 'YES' ? <div className="checked"><FiCheck color="#FFF" /></div> : <div className="unchecked"></div>
                                }
                            </div>
                            <label>YES</label>
                        </div>
                        <div className="form-checkbox-row">
                            <div className="form-checkbox" onClick={() => setCheck("NO")}>
                                {
                                    check === 'NO' ? <div className="checked"><FiCheck color="#FFF" /></div> : <div className="unchecked"></div>
                                }
                            </div>
                            <label>NO</label>
                        </div>
                    </div>
                </div>

                <div className="form-footer">
                    <button onClick={handleEraseForm}>ERASE FORM</button>
                    <button onClick={handleSubmitForm}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default EarlyAccessForm;