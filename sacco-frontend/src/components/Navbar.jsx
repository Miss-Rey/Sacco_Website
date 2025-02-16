import { React, useState, useEffect } from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const endpoint = import.meta.env.VITE_ENDPOINT;
    const userId = localStorage.getItem('UID');
    const role = localStorage.getItem('i');

    useEffect(() => {
        if (userId) {
            fetchUserData(userId);
            setLoggedIn(true);
        } else {
            setError('Please login');
        }
    }, [userId]);

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`${endpoint}/api/profile?userId=${userId}`);
            const data = await response.json();

            if (!response.ok) {
                setError('Error fetching userdata');
                return;
            }

            setUser(data);
        } catch (error) {
            console.error(error);
            setError("Error fetching data");
        }
    };

    const signOut = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <Navbar  rounded className='border-b-2 h-24 flex justify-between items-center' style={{ backgroundColor: '#fff' }}>
            <Navbar.Brand href="#">
                <span className="self-center whitespace-nowrap text-sm lg:text-xl xl:text-xl md:text-xl text-black font-semibold">
                    <Link to={'/'}>SACCO</Link>
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-1 justify-bottom items-bottom text-2xl">
                {loggedIn ? (
                    <div>
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar
                                    alt="User settings"
                                    img="https://upload.wikimedia.org/wikipedia/commons/a/af/Default_avatar_profile.jpg"
                                    rounded
                                />
                            }
                        >
                            {user && (
                                <Dropdown.Header>
                                    <div className='flex gap-1'>
                                        <span className="block text-sm">{user.firstname}</span>
                                        <span className="block text-sm">{user.lastname}</span>
                                    </div>
                                    <span className="block truncate text-sm font-medium">{user.email}</span>
                                </Dropdown.Header>
                            )}
                            <Dropdown.Item><Link to={'/profile'}>Profile</Link></Dropdown.Item>
                            {!role && (
                                <div>
                                    <Dropdown.Item><Link to={'/myloans'}>My Loans</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to={'/savings'}>My Savings</Link></Dropdown.Item>
                                </div>
                            )}
                            {role === '1' && <Dropdown.Item><Link to={'/dashboard'}>Dashboard</Link></Dropdown.Item>}
                            {role === '2' && <Dropdown.Item><Link to={'/admindashboard/manageusers'}>Admin Dashboard</Link></Dropdown.Item>}
                            <Dropdown.Item>Certificates</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                ) : (
                    <div className='flex gap-2'>
                        <Button style={{ backgroundColor: '#AEC671', color: '#fff' }}><Link to={'/login'}>Login</Link></Button>
                        <Navbar.Toggle />
                    </div>
                )}
            </div>

            <Navbar.Collapse className='text-2xl'>
                <Navbar.Link href="/" className='text-black'>
                    Home
                </Navbar.Link>
                <Navbar.Link className='text-black'><Link to={'/loans'}>Loans</Link></Navbar.Link>
                <Navbar.Link className='text-black'><Link to={'/savings'}>Savings</Link></Navbar.Link>
                <Navbar.Link className='text-black'><Link to={'/about'}>About Us</Link></Navbar.Link>
                <Navbar.Link className='text-black'><Link to={'/contact'}>Contact Us</Link></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;