import React, { useState } from "react";
import '../style.css';

import logo from '../../../../assets/logo.svg';

import { IoCloseOutline } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EarlyAccessForm = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState('YES');
    const [name, setName] = useState('');
    const [tool, setTool] = useState('');

    const handleEraseForm = () => {
        setCheck("YES");
        setName("");
        setTool("");
    }

    const handleSubmitForm = () => {
        let formData = {};
        formData.Name = name;
        formData.Tools = tool;
        formData.Funding = check;

        console.log("FormData : ", formData);

        axios.post("https://sheet.best/api/sheets/99493ca4-d6d8-4f73-8018-15a2de80014f", formData)
            .then((data) => { handleEraseForm() })
            .catch((error) => console.error("Error : ", error));
    }

    return (
        <div className="modal-container">
            <div className="form-header">
                <img src={logo} alt="logo" />
                <button onClick={() => navigate(-1)}><IoCloseOutline size={30} color="#C94B32" /></button>
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