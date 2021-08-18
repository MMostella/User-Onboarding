import React from 'react'
import styled from 'styled-components';

const StyledUser = styled.div `
    display: flex;
    justify-content: center;
    margin: 2% auto;
    border: 2px solid lightgray;
    border-radius: 15px;
    width: 50%;

    img {
        position: absolute;
        margin: .5% 0 0 0;
        left: 680px;
    }
`

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <StyledUser className='friend container'>
        <div className='avatar'>
            <img src={details.avatar} alt='avatar'/>
        </div>
        <div className='userCont'>
            <h4>First Name: {details.first_name}</h4>
            <h4>Last Name: {details.last_name}</h4>
            <p>Email: {details.email}</p>
        </div>
    </StyledUser>
  )
}

export default User