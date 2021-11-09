
import { faAd, faEraser, faPersonBooth, faRegistered, faSignOutAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box,Divider, Drawer, Grid, List,ListItem, ListItemIcon,ListItemText, makeStyles,CssBaseline } from '@material-ui/core';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const drawerWidth=240;



const Dashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState('');
    
    const [userStatus, setUserStatus] = useState('Contractor');//change from []
    const signOut = ()=>{
        console.log('signout');
    }
    

    return (
        <div>
            <CssBaseline />
            <Grid item xs={12} sm={12}>
            <Box>
            <Drawer
                style={{marginTop:"500px",}}
                zIndex={2}
                variant="permanent"
                anchor="left"
            
            >
                <div>
               123
                </div>
            </Drawer>
            </Box>
            </Grid>





            <div className="container-fluid">
                <header className="navbar navbar-light sticky-top bg-dark mt-4 p-0 shadow">                    
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </header>
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav nav-pills flex-column mb-auto">                                
                                {userStatus === 'Contractor' && <div>
                                    <li onClick={() => setSelectedMenu('POSTJOB')}>
                                        <Link className={selectedMenu === 'POSTJOB' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faAd} /></svg>
                                                Post a job
                                        </Link>
                                    </li>
                                    <li onClick={() => setSelectedMenu('DELETEPOST')}>
                                        <Link className={selectedMenu === 'DELETEPOST' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'} >
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faEraser} /></svg>
                                                Delete Post
                                        </Link>
                                    </li>
                                    <li onClick={() => setSelectedMenu('CONTRACTEE')}>
                                        <Link className={selectedMenu === 'CONTRACTEE' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faPersonBooth} /></svg>
                                                Available Contractee
                                        </Link>
                                    </li>
                                </div>}
                                {userStatus === 'Contractee' && <div>
                                    <li onClick={() => setSelectedMenu('AVAILABLEJOBS')}>
                                        <Link className={selectedMenu === 'AVAILABLEJOBS' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faTasks} /></svg>
                                                Available Jobs
                                        </Link>
                                    </li>
                                </div>}
                                {userStatus === 'NEWUSER' && <div>
                                    <li onClick={() => setSelectedMenu('REGISTRATION')}>
                                        <Link className={selectedMenu === 'REGISTRATION' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faRegistered} /></svg>
                                                Registration
                                        </Link>
                                    </li>
                                </div>}
                            </ul>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto shadow">
                                <li onClick={signOut}>
                                    <Link className="nav-link text-dark ">
                                        <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faSignOutAlt} /></svg>
                                        SignOut
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Client Dashboard</h1>
                        </div>
                        {selectedMenu === 'POSTJOB' && <div>post job</div>}
                        {selectedMenu === 'DELETEPOST' && <div>delete post</div>}
                        {selectedMenu === 'REGISTRATION' && <div>registration</div>}
                        {selectedMenu === 'CONTRACTEE' && <div>contractee</div>}
                        {selectedMenu === 'AVAILABLEJOBS' && <div>available jobs</div>}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;