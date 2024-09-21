import axios from 'axios'
import React, { useState } from 'react'
import useDate from '../hook/Date';

const Github = ({followers}) => {

    const [userData, setUserData] = useState(null);

    const fetchUserData = (tahaagency) => {
        axios.get(`https://api.github.com/users/${tahaagency}`)
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            setUserData(null)
        });
    };

    React.useEffect(() => {
        fetchUserData('tahaagency')
    }, [])

  return (
    <>
      <div className='user_info'>
        {useDate && userData && (
            <div>
                <h3 style={{color: '#fff'}}>Follows: <strong>{userData.followers}</strong></h3>
            </div>
        )}
      </div>
    </>
  )
}

export default Github
