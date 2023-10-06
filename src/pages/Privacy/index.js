import './style.css';
import { IoCloseOutline } from 'react-icons/io5';

import { useNavigate } from "react-router-dom";

import logo from '../../assets/logo.svg';

import { HiOutlineArrowLeft } from 'react-icons/hi'
import { MetaHeader } from '../../components/Meta';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className='page-container'>
            <div className="page-header">
                <img src={logo} alt="logo" />
                <button onClick={() => navigate(-1)}><IoCloseOutline size={30} color="#C94B32" /></button>
            </div>
            <h1><span>Privacy</span> Policy</h1>

            <div className='page-section'>
                <h3 className='page-h'>Plain English Version of Our Privacy Policy​</h3>
                <p className='page-p'>
                    We keep your email and electronic wallet address so you can use our system. We place cookies on your browser to make our system faster. We may use your email to send you information about our system. Please keep your personal information up to date. We do not and will not sell Your Data, individually or in aggregated form. You may stop receiving information from us at any time. You may access your personal data at any time. You are responsible for maintaining the privacy of the data you enter into our system. You may delete your data in our system at any time. We keep your data private on our cloud providers. At present, we use AWS and IPFS. Lomads is a French company. We follow the laws of all the countries where we operate. More information is below.
                </p>
                <p className='page-p'>Effective Date: 15/02/2023.</p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍About This Privacy Policy</h3>
                <p className='page-p'>
                    This Privacy Policy (the “Policy”) applies to the website https://lomads.xyz and various related services (collectively, the “Sites”, “Services”, “we”, “us”, or “our”) to you (“You”), the user (“User”). This Policy describes how we collect, use and disclose information, and what choices you have with respect to the information. This Policy should be read in conjunction with our Terms of Service.
                </p>
                <p className='page-p'>
                    We handle your personal information following the rules set by data protection laws, especially the GDPR and Swiss Federal Data Protection Act. We understand that by choosing Lomads, you are placing some of your important data in our hands. We are only in business if you trust us, so your privacy means everything to us! Here are the key things you should know:
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍Information We Collect and Receive</h3>
                <p className='page-p'>
                    Our primary goals in collecting information are to provide and improve our Services, to administer your use of the Services, and to enable you to enjoy and easily navigate our Services. We collect and use this information to provide, improve and protect our Services.
                </p>
                <div className='page-subSection'>
                    <h5 className='sub-h'>A. Information Related to Your Account and Interaction with Lomads.</h5>
                    <p>Registration and Contact Information. We collect certain “Personally Identifiable Information” from you when you sign up to our Services, that can be used to identify you, such as your email address, electronic wallet address, and any other information that we deem relevant for the purpose of providing you with our Services or which you provided to us voluntarily. This category also includes information tied to your identity that you provide us through other means, such as emails to our support service. Community Information. When one creates an account using the Services, we collect an email address, domain details, and electronic wallet address for the individual setting up the account. This person may create an identity on your behalf and may provide your information, including Personal Information (e.g., email address). We collect this information under the direction of our Users. If you are an employee/contributor of one of our Users and would no longer like us to process your information, please contact the User who submitted your information. If you are providing information (including Personal Information) about someone else, you must have the authority to provide this information on their behalf and consent to the collection and use of their Personal Information as described in this Privacy Policy. Technical, Usage, and Location Information. Whenever you visit our Site, we may collect ”Non-identifying Information” from you, such as your referring URL, browser, operating system, cookie information, and Internet Service Provider. Without a subpoena, voluntary compliance on the part of your Internet Service Provider, or additional records from a third party, this information alone cannot usually be used to identify you. Other Information. We receive additional information provided to us when submitted to our Sites or if you participate in a focus group, contest, activity, or event, apply for a job, or otherwise communicate with Lomads.</p>
                </div>

                <div className='page-subSection'>
                    <h5 className='sub-h'>B. Information Related to Our Service</h5>
                    <p> Notion Information. In order to perform the Services, we ask for administrative privileges in your Notion Workspace and Discord. We only leverage these privileges to manage user and group access. We read and present Notion metadata as part of the services including your Notion ID, email, and electronic wallet address. We do not read or edit any content in your public or private workspace. We do not collect additional information from your workspace other than what is stated in this policy.</p>
                </div>

                <div className='page-subSection'>
                    <h5 className='sub-h'>C. Cookies</h5>
                    <p>We use cookies, tracking pixels, and related technologies. Cookies are small data files that are served by our platform and stored on your device. Our Site uses cookies dropped by us or third parties for a variety of purposes including to operate and personalize the Site. We use technologies like cookies and pixel tags to provide, improve, protect and promote our Services. For example, cookies help us with things like remembering your electronic wallet address for your next visit, understanding how you are interacting with our Services, and improving them based on that information. Cookies are small pieces of information that are stored as text files by your Internet browser on your computer’s hard drive. Most Internet browsers are initially set to accept cookies. You can set your browser to refuse cookies from websites or to remove cookies from your hard drive, but this may limit your ability to use the Services.</p>
                </div>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍​How We Use the Information We Collect​</h3>
                <p className='page-p'>
                    We use your information in the following ways:<br />
                    ‍1. To provide, update, maintain, improve and protect our Services, including operating certain features and functionality of the Services, preventing or addressing service errors, security or technical issues, analyzing and monitoring usage, trends, and other activities.<br />
                    2. For billing, account management, and other administrative matters, we share and use Payment Information as described in Section Payment Information. To respond to your support requests, comments, and questions.To control unauthorized use or abuse of the Services, if we have a good faith belief, or have received a complaint alleging that Your Data is in violation of our Acceptable Use Guidelines.<br />
                    3. To communicate directly with you, including by sending you newsletters, promotions, and special offers or information about new products and services. You may, at any time, request to opt-out of receiving future emails or notifications from us, by contacting us.<br />
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍How We Share And Disclose Information</h3>
                <p className='page-p'>
                    ‍We do not and will not sell Your Data, individually or in aggregated form. We may share or transfer your personal information to third parties only in the following limited circumstances: We will display your Account information on your https://app.lomads.xyz page and elsewhere through the Services in accordance with the preferences you set in your Account. You can review and revise your Account information at any time. We will display Your Data within the Services as directed by you. If you elect to use a third-party application through the Services, then we may share or disclose Your Data with that third-party application as directed by you. Please remember that we are not responsible for the privacy practices of such third parties so you should make sure you trust the application and that it has a privacy policy acceptable to you. With Trusted Service Providers and Business Partners. We may utilize trusted third-party service providers to assist us in delivering, improving, protecting, and promoting the Services. For example, we may use third parties to help host our Services, send out email updates, perform analyses related to the operation of the Services, or process payments. These third-party service providers may have access to Your Data for the limited purpose of providing the service we have contracted with them to provide. They are required to have a privacy policy and security standards in place that are at least as protective of your information as is this Privacy Policy.  In Connection With a Sale or Change of Control. If the ownership of all or substantially all of our business changes, we may transfer your information to the new owner so that the Services can continue to operate. In such case, your information would remain subject to the promises and commitments contained in this Privacy Policy until such time as this Privacy Policy is updated or amended by the acquiring party upon notice to you.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Other Access to or Disclosure of Your Information</h3>
                <p className='page-p'>
                    ‍We restrict access to any data and content you transmit to Lomads or is otherwise made available via the Services to Lomads employees, payment processors, contractors, and agents who need to know that information in order to perform the Services. All of these individuals are subjected to strict contractual confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Security and Information Protection</h3>
                <p className='page-p'>
                    We take security seriously. We take various steps to protect the information you provide to us from loss, misuse, and unauthorized access or disclosure. These steps take into account the sensitivity of the information we collect, process, and store, and the current state of technology. We use commercially reasonable and industry-standard physical, managerial, and technical safeguards to preserve the integrity and security of your information.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍‍Payment Information</h3>
                <p className='page-p'>
                    ‍Currently, we do not collect payments.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Your Controls and Choices</h3>
                <p className='page-p'>
                    Lomads provides you with the opportunity to choose (opt-out) whether your personal information is to be disclosed to a third party or to be used for a purpose that is incompatible with the purpose(s) for which it was originally collected or subsequently authorized. You may exercise your choice by contacting us at: info@lomads.co. If you decide to opt-out, we may not be able to provide certain features of the Services to you. Communication Preferences. If you receive commercial emails from us, you may unsubscribe at any time by following the instructions contained within the email. You may also opt-out from receiving commercial e-mail from us, and any other promotional communications that we may send to you from time to time by sending your request to us by e-mail at info@lomads.co. Additionally, we may allow you to view and modify settings relating to the nature and frequency of promotional communications that you receive from us. Please be aware that if you opt-out of receiving commercial e-mail from us, it may take up to ten business days for us to process your opt-out request, and you may receive commercial e-mail from us during that period. Additionally, even after you opt-out from receiving commercial messages from us, you will continue to receive administrative messages from us regarding our Service. Blocking Cookies. You can remove or block certain cookies using the settings in your browser but the Offerings may cease to function properly if you do so. You may also change or withdraw your cookie consent from this Privacy Policy.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍Changes to the Privacy Policy</h3>
                <p className='page-p'>
                    We reserve the right to change our Privacy Policy at any time. If we make changes, we will post them and will indicate on this page the policy’s new effective date. If we make material changes to this policy, we will notify you by email or through a notice on the Services.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍No Children Under Age 13</h3>
                <p className='page-p'>
                    The Services are not intended for use by anyone under the age of 13, nor does Lomads knowingly collect or solicit personal information from anyone under the age of 13. If you are under 13, you may not attempt to register for the Services or send any information about yourself to us, including your name, address, telephone number, or email address. In the event that we confirm that we have collected personal information from someone under the age of 13 without verification of parental consent, we will delete that information promptly. If you are a parent or legal guardian of a child under 13 and believe that we might have any information from or about such a child, please contact us at the email address provided at the end of this Privacy Policy.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍‍Contact Us</h3>
                <p className='page-p'>
                    ‍If you have questions or need to contact us about this Privacy Policy, please email us at<br /><span style={{ fontWeight: '800' }}>info@lomads.co</span>.
                </p>
            </div>

            <div className='page-section'>
                <button onClick={() => navigate(-1)}><HiOutlineArrowLeft size={22} color="#FFF" style={{ marginRight: '10px' }} /> GO BACK</button>
            </div>

        </div>
    )
}

const PrivacyPolicyWrapper = () => (
    <>
        <MetaHeader />
        <PrivacyPolicy />
    </>
);

export default PrivacyPolicyWrapper;