import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { FaUser } from 'react-icons/fa';
import User from './User';
import { Body } from '../components/Body/Body';
import CanvasJSReact from '@canvasjs/react-charts';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showChartModal, setShowChartModal] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = JSON.parse(localStorage.getItem('token'));
                setUser(response.data);

                const decoded_token = jwtDecode(response.data.token);
                setUser(decoded_token);
            } catch (error) {
                navigate('/login');
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async (e) => {
        try {
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title:{
            text: "Most Cited Category"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 32, label: "CHS" },
                { y: 22, label: "CAF" },
                { y: 15, label: "CTED" },
                { y: 19, label: "CCJE" },
                { y: 5, label: "COE" },
                { y: 7, label: "CCS" },
                { y: 8, label: "CBM" }
            ]
        }]
    }

    const handleShowChartModal = () => {
        setShowChartModal(true);
    };

    const handleCloseChartModal = () => {
        setShowChartModal(false);
    };

    return (
        <div className="dashboard">
            <Navbar bg="transparent" variant="dark" className="dashboard-nav">
                <Navbar.Brand className='dashboard-brand' href="/dashboard">Admin Dashboard</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>

                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text className='nav-text'>
                        Welcome: {user ? user.user_id : 'id'} {user ? user.name : 'name'}
                        <Button variant='secondary' onClick={handleLogout}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>

                <Button variant="primary" onClick={handleShowChartModal}>Citation Chart</Button>
            </Navbar>

            <Modal className='chart-modal' show={showChartModal} onHide={handleCloseChartModal}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <CanvasJSReact.CanvasJSChart options={options} />
                </Modal.Body>
                <Modal.Footer className='btn-modal'>
                    <Button variant="secondary" onClick={handleCloseChartModal}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Body>
                <div className='DASHBOARD flex h-20'></div>
                <User />
            </Body>
            <div></div>
        </div>
    );
}

export default Dashboard;
