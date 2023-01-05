import React, { useState } from "react";

import logo from '../../../../assets/logo.svg';

import { IoCloseOutline } from 'react-icons/io5'
import { HiOutlinePlus } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

const PartnerForm = ({ toggleModal }) => {
    const navigate = useNavigate();
    const [check, setCheck] = useState('YES');
    const [name, setName] = useState('');
    const [orgName, setOrgName] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('')

    const handleEraseForm = () => {
    }

    const handleSubmitForm = () => {
    }

    return (
        <div className="modal-container">
            <div className="form-header">
                <img src={logo} alt="logo" />
                <button onClick={() => navigate(-1)}><IoCloseOutline size={30} color="#C94B32" /></button>
            </div>
            <div className="form-container">
                <div className="form-title">
                    <h1>JOIN US</h1>
                </div>
                <div className="form-title" style={{ marginBottom: '60px' }}>
                    <h1>AS A <span>PARTNER</span></h1>
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
                        <h1>Your email address</h1>
                        <div className="form-tag required">
                            <p>Required</p>
                        </div>
                    </div>
                    <div className="form-input-row">
                        <input type="text" placeholder="Answer" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="form-input-wrapper">
                    <div className="form-input-row">
                        <h1>Your organisation’s name</h1>
                        <div className="form-tag">
                            <p>Optionnal</p>
                        </div>
                    </div>
                    <div className="form-input-row">
                        <input type="text" placeholder="Answer" value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                    </div>
                </div>

                <div className="form-input-wrapper">
                    <div className="form-input-row">
                        <h1>{`Link(s) related to your organisation`}</h1>
                        <div className="form-tag">
                            <p>Optionnal</p>
                        </div>
                    </div>
                    <div className="form-input-row mt-15">
                        <input className="box-input md" placeholder="Title" />
                        <input className="box-input lg" placeholder="Link" />
                        <button className="form-add-btn"><HiOutlinePlus size={24} color="#FFF" /></button>
                    </div>
                </div>

                <div className="form-input-wrapper">
                    <div className="form-input-row">
                        <h1>Long description</h1>
                        <div className="form-tag">
                            <p>Optionnal</p>
                        </div>
                    </div>
                    <div className="form-input-row">
                        <textarea placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)} />
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

export default PartnerForm;