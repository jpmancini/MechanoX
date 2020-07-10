import React, {useState, createContext} from 'react';
import { useLinkProps } from '@react-navigation/native';

export const AccountContext = createContext();

const AccountProvider = () => {
    const [account, setAccount] = useState([
    {
        name: '',
        email: '',
        phone: '',
        password: ''
    }
    ]);

    return(
        <AccountContext.Provider>
            {useLinkProps.children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;