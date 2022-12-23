import React from "react";
import './Dashboard.style.css';

import dashboard from '../../../../assets/DASHBOARD.svg';
import tasks from '../../../../assets/Tasks.svg';
import payment from '../../../../assets/recurring_payment.svg';
import milestones from '../../../../assets/milestones.svg';
import notify from '../../../../assets/NOTIF.svg';
import project from '../../../../assets/project_card.svg';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>ONE <span>DASHING</span><br />DASHBOARD</h1>
            </div>

            <div className="dashboard-body">
                <img className="img1" src={dashboard} alt="" />
                <img className="img2" src={tasks} alt="" />
                <img className="img3" src={payment} alt="" />
                <img className="img4" src={milestones} alt="" />
                <img className="img5" src={notify} alt="" />
                <img className="img6" src={notify} alt="" />
                <img className="img7" src={project} alt="" />
            </div>
        </div>
    )
}

export default Dashboard;