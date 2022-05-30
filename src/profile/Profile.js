import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({data , message}) => {
  return (
    <div>
        <h1> FullName : {data.FullName}</h1>
        <h2> Bio : {data.Bio}</h2>
        <h3>Profession : {data.Profession}</h3>
        <button onClick={message}>click here</button>
    </div>
  )
}

Profile.prototype = {
       input : PropTypes.object({
       FullName : PropTypes.string,
       Bio : PropTypes.string,
       Profession : PropTypes.string
    }
    )
}
export default Profile