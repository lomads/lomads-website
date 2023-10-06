import './style.css';
import { IoCloseOutline } from 'react-icons/io5';

import { useNavigate } from "react-router-dom";

import logo from '../../assets/logo.svg';

import { HiOutlineArrowLeft } from 'react-icons/hi'
import { MetaHeader } from '../../components/Meta';

const TermsOfService = () => {
    const navigate = useNavigate();

    return (
        <div className='page-container'>
            <div className="page-header">
                <img src={logo} alt="logo" />
                <button onClick={() => navigate(-1)}><IoCloseOutline size={30} color="#C94B32" /></button>
            </div>
            <h1><span>Terms</span> of Service</h1>

            <div className='page-section'>
                <h3 className='page-h'>Last modified: February 15, 2023</h3>
                <p className='page-p'>
                    Lomads, fully owned by Lomads Technologies SAS (“Us” or “We”) provides the Lomads.xyz site and various related services (collectively, the “Site”) to you (“You”), the user (“User”), subject to your compliance with all the terms, conditions, and notices contained or referenced herein (the “Terms of Service” or “TOS”), as well as any other written agreement between us and you. In addition, when using particular services or materials on or related to this Site, users shall be subject to any posted rules applicable to such services or materials that may contain terms and conditions in addition to those in these Terms of Service. All such guidelines or rules are hereby incorporated by reference into these Terms of Service.
                </p>
                <p className='page-p' style={{ fontWeight: '700' }}>BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT WISH TO BE BOUND BY THE THESE TERMS OF SERVICE, PLEASE EXIT THE SITE NOW. YOUR REMEDY FOR DISSATISFACTION WITH THIS SITE, OR ANY PRODUCTS, SERVICES, CONTENT, OR OTHER INFORMATION AVAILABLE ON OR THROUGH THIS SITE, IS TO STOP USING THE SITE AND/OR THOSE PARTICULAR PRODUCTS OR SERVICES. YOUR AGREEMENT WITH US REGARDING COMPLIANCE WITH THESE TERMS OF SERVICE BECOMES EFFECTIVE IMMEDIATELY UPON COMMENCEMENT OF YOUR USE OF THIS SITE.</p>
                <p className='page-p'>These Terms of Service are effective as of the “Last Modified” date identified at the top of this page. However, for any material modifications to the Terms of Service or in the event that such modifications materially alter your rights or obligations hereunder, such amended Terms of Service will automatically be effective upon the earlier of (i) your continued use of this Site and related services with actual knowledge of such modifications, or (ii) 30 days from publication of such modified Terms of Service on this service. Notwithstanding the foregoing, the resolution of any dispute that arises between you and us will be governed by the Terms of Service in effect at the time such dispute arose.</p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Overview of our Services</h3>
                <p className='page-p'>
                    Lomads provides an access management service for the User's productivity suites (e.g., Notion, Google Workspace) and other web applications. The “Service” does not include Your Data (as defined below) or any software application or service that is provided by you or a third party, which you use in connection with the Service. Any modifications and new features added to the Service are also subject to this TOS. Lomads reserves the right to modify or discontinue the Service (or any Service plan) or any feature or functionality thereof at any time without notice to you. All rights, title and interest in and to the Service and its components (including all intellectual property rights) will remain with and belong exclusively to Lomads.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Minimum Configuration Requirements</h3>
                <p className='page-p'>
                    To use the Service, the User must first create a User account by following the procedure described for this purpose on the Site or received by email. To be able to use a User account, the User must enter a valid email address and smart contract address throughout the entire duration of the Service usage period, and provide us with access to the User’s productivity suites. The User alone is responsible for keeping the access codes to their email account and other 3rd party accounts private, and Lomads declines all liability if the Service is used by a person other than the User or a person authorized by the latter, possessing the usernames and passwords to the User’s email account.User account is non-transferrable.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Term and Termination</h3>
                <p className='page-p'>
                    This TOS will continue in full effect unless and until your account or this TOS is terminated as described herein. You have the right to deactivate your account at any time by using the account deactivation interface provided at app.lomads.xyz. ‍
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Termination of Service</h3>
                <p className='page-p'>
                    We may modify, replace, refuse access to, suspend or discontinue the Services, partially or entirely, or add, change and modify prices for all or part of the Services for you or for all our users at any time and in our sole discretion. All of these changes shall be effective upon their posting on the Site or by direct communication to you unless otherwise noted. We may cancel your membership for any or no reason immediately upon notice to you.Services may be terminated by us, without cause, at any time. Services may be terminated by you, without cause, by following the cancellation procedures set forth in the Term and Termination section. Lomads may terminate Services at any time, without penalty and without notice, if you fail to comply with any of the terms of this Agreement or the intellectual property protections applicable to these Services. Notice of termination of Services by Lomads may be sent to the contact email associated with your account. Upon termination, Lomads has the right to delete all data, files, or other information that is stored in your account.

                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Rules</h3>
                <p className='page-p'>
                    To ensure the quality of the Lomads experience, we have established our Terms of Service for our mutual benefit. If you breach these terms, it will be deemed a violation of the Terms of Service, which may result in the termination of your account. By using our Services, you agree to the following:<br />
                    1. You certify that you are at least 13 years of age. Use of the Site and Services by individuals under the age of 13 is strictly prohibited.<br />
                    2. You will maintain the validity of the email address and smart contract address provided during account registration and keep your contact information accurate and up-to-date at all times.<br />
                    3. You will not use the Services for any illegal purposes or engage in any illegal activities, including but not limited to fraud, embezzlement, money laundering, and insider trading.<br />
                    4. You will not use the Services or Site if you are located in a country subject to an embargo by the UK or if you are on the UK Treasury's list of Specially Designated Nationals.<br />
                    5. You will not impersonate another person through the use of the Services or Site.<br />
                    6. You will not use the Services or Site to upload, post, transmit, or otherwise make available any unsolicited or unauthorized advertising, cold sales emails, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation. You must accurately identify the sender of messages sent using the Service and must not alter the attribution of origin in electronic mail messages or postings.<br />
                    7. You will not share your password or allow anyone else to access your account, and you will take steps to maintain the security of your account.<br />
                    8. Lomads has a zero-tolerance policy for abusive language and behavior towards the company, its Services, and employees. Any customer deemed to be abusive, in Lomads' sole discretion, will result in the immediate and irrevocable termination of the customer's account without refund. Threats of legal action, slander, libel, and other forms of abuse will be considered violations of these policies.<br />
                    9. Lomads reserves the right to determine, in its sole discretion, whether or not an account is in violation of any of these policies. If an account is found to be in violation, Lomads may store user information for the purpose of tracking and identifying the offending user, and the offending user may be permanently restricted from holding an account or using the Services.<br />
                    10. If Lomads reasonably determines that your account is being used for illegal or fraudulent activity, the account may be immediately terminated, and your financial data may be erased. Lomads may also report the matter to law enforcement officials in the appropriate jurisdictions.<br />
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Age Requirements And Responsibility Of Parents And Guardians</h3>
                <p className='page-p'>
                    By accessing our services, you confirm that you’re at least 18 years old and meet the minimum age of digital consent in your country. If you are old enough to access our services in your country, but not old enough to have authority to consent to our terms, your parent or guardian must agree to our terms on your behalf. Please ask your parent or guardian to read these terms with you. If you’re a parent or legal guardian, and you allow your teenager to use the services, then these terms also apply to you and you’re responsible for your teenager’s activity on the services.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍Privacy</h3>
                <p className='page-p'>
                    We encourage you to read the Privacy Policy and to use the information it contains to help you make informed decisions. You acknowledge, consent and agree that we may access, preserve, and disclose your registration and any other information you provide if required to do so by law or in a good faith belief that such access preservation or disclosure is reasonably necessary in our opinion Disclosures of user information to third parties are further addressed in the Privacy Policy.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>Your Data Rights and Related Responsibilities</h3>
                <p className='page-p'>
                    Lomads is by design exposed to various types of information and data into the Services for access management purposes (“Your Data”). Your Data means any data and content you transmit to Lomads or is otherwise made available via the Services. Your Data includes metadata such as profile and anything else you enter or upload into the Service or Site. Lomads will make commercially reasonable efforts to ensure that all facilities used to store and process Your Data meet a high standard for security. For more information on our current practices and policies regarding data privacy, security and confidentiality, please see our privacy policy; we keep that document updated as these practices and policies evolve over time. In order for us to provide the Service to you, we require that you grant us certain rights with respect to Your Data. For example, we need to be able to transmit, store and copy Your Data in order to display it to you, to make backups to prevent data loss, and so on. Your acceptance of this TOS gives us the permission to do so and grants us any such rights necessary to provide the Service to you, only for the purpose of providing the Service (and for no other purpose). This permission includes allowing us to use third-party service providers (such as Amazon Web Services and IPFS) in the operation and administration of the Service and the rights granted to us are extended to these third parties to the degree necessary in order for the Service to be provided.If any Users send us any feedback or suggestions regarding the Service, you grant Lomads an unlimited, irrevocable, perpetual, free license to use any such feedback or suggestions for any purpose without any obligation to you.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍Disputes</h3>
                <p className='page-p'>
                    The formation, interpretation and performance of this Agreement and any disputes arising from it shall be governed by the substantive and procedural laws of England and Wales. The exclusive jurisdiction and venue for any actions related to the subject matter of this Agreement shall be the courts of England and Wales, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceedings arising from or related to this Agreement.
                </p>
            </div>

            <div className='page-section'>
                <h3 className='page-h'>‍Notices</h3>
                <p className='page-p'>
                    Any notices or other communications permitted or required hereunder, including those regarding modifications to these Terms of Service, will be in writing and given: by Lomads (i) via email (in each case to the address that you provide) or (ii) by posting to the Application or Site. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted.
                </p>
            </div>

            <div className='page-section'>
                <button onClick={() => navigate(-1)}><HiOutlineArrowLeft size={22} color="#FFF" style={{ marginRight: '10px' }} /> GO BACK</button>
            </div>

        </div>
    )
}

const TOCWrapper = () => (
    <>
        <MetaHeader />
        <TermsOfService />
    </>
);

export default TOCWrapper;