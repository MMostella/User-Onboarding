import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h4>First Name: {details.first_name}</h4>
      <h4>Last Name: {details.last_name}</h4>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User