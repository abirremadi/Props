import PropTypes from "prop-types";
import React from 'react'
const Profile =({fullName,bio,profession, children,alert}) =>{
return (
    <div className="container">
        
    <p class='abcd' onClick={alert}> {children}</p>

    <div className="bio">
        {bio}
        <p>Welcome  to my Profile , i m {fullName}  i m  an Mecatronics Engineer and a  Web Developer</p>
    </div>
    <p>Profession : {profession}</p>
    
    </div>
)}

Profile.propTypes ={
    fullName : PropTypes.string,
    bio :PropTypes.string,
    profession:PropTypes.string
}
Profile.defaultProps={
    fullName:'Remadi Abir',
    Profession: 'Mecatronics Engineer/ Web developer'
};
export default Profile