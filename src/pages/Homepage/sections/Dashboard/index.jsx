import React from "react";
import './Dashboard.style.css';

import dashboard from '../../../../assets/DASHBOARD.svg';
import dashboardsm from '../../../../assets/MobileDash.svg';
import milestonesm from '../../../../assets/milestone-mobile.svg';
import tasks from '../../../../assets/Tasks.svg';
import payment from '../../../../assets/recurring_payment.svg';
import milestones from '../../../../assets/milestones.svg';
import notify from '../../../../assets/NOTIF.svg';
import notify2 from '../../../../assets/NOTIF2.svg';
import project from '../../../../assets/project_card.svg';

const Dashboard = () => {
    return (
        <section className="dashboard-container panel">
            <div className="dashboard-header">
                <h1>ONE <span>DASHING</span><br />DASHBOARD</h1>
            </div>

            <div className="dashboard-text-container" style={{"width" : "70%"}}>
            {
                 <div className="dashboard-text pos1">
                    <h1>A one-glance dashboard that cuts through data silos, creating a central source of truth.</h1>
                    <p></p>
                </div>}
                
            </div>

            <div className="dashboard-text-container">
      

            <div className="dashboard-body">
                <img className="imgSm" src={dashboardsm} alt="" />
                <img className="img1" src={dashboard} alt="" />
                <img className="img2" src={tasks} alt="" />
                <img className="img3" src={payment} alt="" />
                <img className="img4" src={milestones} alt="" />
                <img className="img5" src={notify} alt="" />
                <img className="img6" src={notify2} alt="" />
                <img className="img7" src={project} alt="" />
                {/* <img className="imgMilestone" src={milestonesm} alt="" /> */}
            </div>



            </div>

            <img className="imgMilestone" src={milestonesm} alt="" />

        </section>
    )
}

export default Dashboard;
