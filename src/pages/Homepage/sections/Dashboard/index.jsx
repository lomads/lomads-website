import React from "react";
import './Dashboard.style.css';

import dashboard from '../../../../assets/DASHBOARD.svg';
import dashboardsm from '../../../../assets/dashboard-mobile.svg';
import milestonesm from '../../../../assets/milestone-mobile.svg';
import tasks from '../../../../assets/Tasks.svg';
import payment from '../../../../assets/recurring_payment.svg';
import milestones from '../../../../assets/milestones.svg';
import notify from '../../../../assets/NOTIF.svg';
import project from '../../../../assets/project_card.svg';

const Dashboard = () => {
    return (
        <section className="dashboard-container" data-scroll-section style={{ perspective: '1px' }}>
            <div className="dashboard-header" data-scroll>
                <h1>ONE <span>DASHING</span><br />DASHBOARD</h1>
            </div>

            <div className="dashboard-body" data-scroll>
                <img className="imgSm" src={dashboardsm} alt="" />

                <img className="img1" src={dashboard} alt="" />
                <img className="img2" src={tasks} alt="" />
                <img className="img3" src={payment} alt="" />
                <img className="img4" src={milestones} alt="" />
                <img className="img5" src={notify} alt="" />
                <img className="img6" src={notify} alt="" />
                <img className="img7" src={project} alt="" />

                <div className="dashboard-text pos1">
                    <h1>Easy information access</h1>
                    <p>The Lomads dashboard is expertly designed to help you<br /> focus on tasks that matter,<span> without overwhelming you<br /> with information.</span></p>
                </div>

                <div className="dashboard-text pos2">
                    <h1>Efficient workflow automation</h1>
                    <p>Our in-built automations help you save time by<br /> eliminating repetitive tasks. With just a click, a project<br /> milestone can be approved and in just a snap, a<br /> transaction is created for the respective team,<br /> automatically. <span>Sleek OP!</span></p>
                </div>

                <img className="imgMilestone" src={milestonesm} alt="" />
            </div>
        </section>
    )
}

export default Dashboard;