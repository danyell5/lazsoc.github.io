import React from 'react'

export const TeamDisplaySlide = (props) => {
    const { id, profiles } = props;

    return (
        <div id={id} className="team-display">
            <div className="profiles-list">
                {profiles.map((profile, index) => (
                    <a 
                        key={index}
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-link"
                    >
                        <div className="profile-card">
                            <div className="headshot-wrapper">
                                <img 
                                    src={profile.headshot} 
                                    alt={`${profile.name}'s headshot`}
                                    className="headshot"
                                />
                            </div>
                            <div className="text-content">
                                <h3 className="name">{profile.name}</h3>
                                <p className="role">{profile.role}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default TeamDisplaySlide; 