import { React, useState, useEffect } from 'react';
import TopNav from '../components/Navbar';
import { Label, TextInput } from "flowbite-react";
import { useSnackbar } from 'notistack';
import Loading from '../components/Loading';
import { gsap } from 'gsap';

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const endpoint = import.meta.env.VITE_ENDPOINT;
    const userId = localStorage.getItem('UID');
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (userId) {
            fetchUserData(userId);
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
            setFormData({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
            });
        } catch (error) {
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setEdit(true);
        gsap.to(".form-container", { duration: 0.5, opacity: 1, scale: 1.05 });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${endpoint}/api/profile?userId=${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setUser(result.updatedUser);
                enqueueSnackbar('User details updated successfully', { variant: 'success' });
                setEdit(false);
            } else {
                enqueueSnackbar(result.message || 'Failed to update user details', { variant: 'error' });
            }

        } catch (error) {
            enqueueSnackbar('Error updating user details', { variant: 'error' });
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />;
    if (error) return <div>Error fetching data</div>;

    return (
        <>
            <TopNav />
            <div style={{ backgroundColor: '#F7E895', padding: '20px' }}>
                {!edit ? (
                    <section>
                        <div className='flex justify-between text-xl font-bold mb-5'>
                            <span>User Details</span>
                            <button 
                                onClick={handleEdit} 
                                style={{ backgroundColor: '#AEC671', color: '#fff', padding: '10px', borderRadius: '5px' }}>
                                Edit Details
                            </button>
                        </div>
                        <div className='form-container' style={{ opacity: 0, transition: 'opacity 0.5s' }}>
                            {user && (
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="firstname">Firstname</Label>
                                    <TextInput type="text" id="firstname" value={user.firstName} readOnly style={{ backgroundColor: '#5C593D', color: '#F7E895' }} />
                                    <Label htmlFor="lastname">Lastname</Label>
                                    <TextInput type="text" id="lastname" value={user.lastName} readOnly style={{ backgroundColor: '#5C593D', color: '#F7E895' }} />
                                    <Label htmlFor="email">Email Address</Label>
                                    <TextInput type="text" id="email" value={user.email} readOnly style={{ backgroundColor: '#5C593D', color: '#F7E895' }} />
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <TextInput type="text" id="phone" value={`+245 ${user.phone}`} readOnly style={{ backgroundColor: '#5C593D', color: '#F7E895' }} />
                                </div>
                            )}
                        </div>
                    </section>
                ) : (
                    <section>
                        <div className='flex justify-between text-xl font-bold mb-5'>
                            <span>Edit Details</span>
                        </div>
                        <div className='form-container' style={{ opacity: 0, transition: 'opacity 0.5s' }}>
                            {user && (
                                <div className="flex flex-col gap-4">
                                    <form onSubmit={handleSubmit}>
                                        <Label htmlFor="firstname">Firstname</Label>
                                        <TextInput
                                            name='firstName'
                                            type="text"
                                            id="firstname"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#AEC671' }}
                                        />
                                        <Label htmlFor="lastname">Lastname</Label>
                                        <TextInput
                                            name='lastName'
                                            type="text"
                                            id="lastname"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#AEC671' }}
                                        />
                                        <Label htmlFor="email">Email Address</Label>
                                        <TextInput
                                            name='email'
                                            type="text"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#AEC671' }}
                                        />
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <TextInput
                                            name='phone'
                                            type="text"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            style={{ backgroundColor: '#AEC671' }}
                                        />
                                        <div className='flex justify-center p-5'>
                                            <input type='submit' value={loading ? 'Updating...' : 'Save'} className='text-sm font-semibold rounded-sm' style={{ backgroundColor: '#487827', color: '#fff', padding: '10px 20px' }} />
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};

export default Profile;