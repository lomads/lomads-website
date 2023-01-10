import React, { useEffect, useState } from "react";
import '../style.css';

import logo from '../../../../assets/logo.svg';

import { IoCloseOutline } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'
import { FaDiscord, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EarlyAccessForm = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState('YES');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [orgName, setOrgName] = useState('');
    const [orgAim, setOrgAim] = useState('');
    const [role, setRole] = useState('');
    const [contributorCount, setContributorCount] = useState('');
    const [priorities, setPriorities] = useState('');
    const [links, setLinks] = useState('');
    const [tool, setTool] = useState('');
    const [how, setHow] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     if (success) {
    //         let time = setTimeout(() => {
    //             navigate(-1);
    //         }, 5000);

    //         return () => {
    //             clearTimeout(time);
    //         }
    //     }
    // }, [success]);

    const handleEraseForm = () => {
        setCheck("YES");
        setName("");
        setEmail("");
        setAddress("");
        setOrgName("");
        setOrgAim("");
        setRole("");
        setContributorCount("");
        setTool("");
        setPriorities("");
        setLinks("");
        setHow("");
    }

    const handleSubmitForm = (e) => {

        if (name === '') {
            const element = document.getElementById('name-error');
            element.innerHTML = 'Enter name';
            setLoading(false);
            return;
        }
        else if (email === '') {
            const element = document.getElementById('email-error');
            element.innerHTML = 'Enter email';
            setLoading(false);
            return;
        }
        else if (address === '') {
            const element = document.getElementById('address-error');
            element.innerHTML = 'Enter eth address';
            setLoading(false);
            return;
        }
        else if (orgAim === '') {
            const element = document.getElementById('orgAim-error');
            element.innerHTML = 'Enter appropriate answer';
            setLoading(false);
            return;
        }
        else if (role === '') {
            const element = document.getElementById('role-error');
            element.innerHTML = 'Enter your role in the organisation';
            setLoading(false);
            return;
        }
        else if (contributorCount === '') {
            const element = document.getElementById('count-error');
            element.innerHTML = 'Enter number of active contributors';
            setLoading(false);
            return;
        }
        else {
            e.preventDefault();
            setLoading(true);
            let formData = {};
            formData.Name = name;
            formData.Tools = tool;
            formData.Funding = check;

            // axios.post("https://sheetdb.io/api/v1/nzz0npcvh322j", formData)
            //     .then((data) => { handleEraseForm(); setLoading(false); setSuccess(true); })
            //     .catch((error) => console.error("Error : ", error));

            axios.post("https://sheetdb.io/api/v1/baw8f8ftnxj6k", formData)
                .then((data) => { handleEraseForm(); setLoading(false); setSuccess(true); })
                .catch((error) => console.error("Error : ", error));
        }
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

                {
                    success
                        ?
                        <div className="msg-container">
                            <p style={{ fontSize: 20, color: '#76808D' }}>Thank you for your interest in Lomads. You will hear from us soon.</p>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 16 }}>
                                Join us on
                                <div className='logo-box' style={{ marginLeft: 8 }} onClick={() => { window.open("https://discord.com/invite/szqhfekbTy") }}>
                                    <FaDiscord size={22} color="#C94B32" />
                                </div>
                                <div style={{ height: 20, width: 1, backgroundColor: '#444', margin: '0 16px' }}></div>
                                Follow us on
                                <div className='logo-box' style={{ marginLeft: 8 }} onClick={() => { window.open("https://twitter.com/lomads_co") }}>
                                    <FaTwitter size={22} color="#C94B32" />
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your name or pseudonym</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={name} onChange={(e) => { setName(e.target.value); document.getElementById('name-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="name-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your email address</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={email} onChange={(e) => { setEmail(e.target.value); document.getElementById('email-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="email-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your ETH address (to add you as an admin in the test dashboard)</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={address} onChange={(e) => { setAddress(e.target.value); document.getElementById('address-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="address-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your organisation's name</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={orgName} onChange={(e) => { setOrgName(e.target.value); document.getElementById('orgName-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="orgName-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>What does your organisation do, or wants to achieve?</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={orgAim} onChange={(e) => { setOrgAim(e.target.value); document.getElementById('orgAim-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="orgAim-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>What is your role in the organisation? (eg. contributor, co-founder, core team member)</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={role} onChange={(e) => { setRole(e.target.value); document.getElementById('role-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="role-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Number of contributors who contribute at least 1 day per week.</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={contributorCount} onChange={(e) => { setContributorCount(e.target.value); document.getElementById('count-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="count-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Which web2 and/or web3 tools are you using for your
                                        organisation/community?</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
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

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>On a scale of 1 to 5 (1- least important, 5-most important), how important are the following for your organisation 'now'?</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row flex-column">
                                    <div className="form-scale-header">
                                        <div></div>
                                        <div><p>1</p></div>
                                        <div><p>2</p></div>
                                        <div><p>3</p></div>
                                        <div><p>4</p></div>
                                        <div><p>5</p></div>
                                    </div>
                                    <div className="form-scale-body">

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Send and receive funds (crypto)</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Divide work as projects with milestones</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Divide work as tasks and bounties</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Keep track of contribution of members</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Manage access across various tools (eg. Google, Notion, Snapshot))</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Managing proposals and voting</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                        <div className="scale-row">
                                            <div className="scale-div">
                                                <p>Launching token (incl. NFT) for your organisation</p>
                                            </div>

                                            <div className="scale-div">
                                                <div className="radio-checked"><div className="inner-circle"></div></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                            <div className="scale-div">
                                                <div className="radio-unchecked"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Please mention any other priorities of your organisation that were covered above.</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={priorities} onChange={(e) => setPriorities(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Link(s) related to your organisation (eg. Twitter, Discord, Website)</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={links} onChange={(e) => setLinks(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>How did you hear about us?<br />(If referred by someone, please include the name)</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={how} onChange={(e) => setHow(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-footer">
                                <button onClick={handleEraseForm} disabled={loading} style={loading ? { cursor: 'not-allowed' } : null}>ERASE FORM</button>
                                <button onClick={handleSubmitForm} disabled={loading} style={loading ? { cursor: 'not-allowed' } : null}>
                                    {
                                        loading
                                            ?
                                            <i class="fa fa-spinner fa-spin"></i>
                                            :
                                            "SEND"
                                    }
                                </button>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default EarlyAccessForm;