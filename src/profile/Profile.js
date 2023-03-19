import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const style = {
    textAlign: 'center',
    margin: '20px auto',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px grey',
    width: '80%',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '50%',
  };

  return (
    <div style={style}>
      {children && <div style={imageStyle}>{children}</div>}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Unkown',
  bio: 'No bio ',
  profession: 'No profession '
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Profile;
