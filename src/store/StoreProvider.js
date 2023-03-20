import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../axios/requests';
import {StoreContext} from './StoreContext'

const StoreProvider = ({children}) => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/')
    }

    const getData = () => {
        fetchUsers().then((data) => {setUsers(data) 
            console.log(data)})
    }

    const value = {
        handleGoBack, handleLogin,
        users, getData
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;