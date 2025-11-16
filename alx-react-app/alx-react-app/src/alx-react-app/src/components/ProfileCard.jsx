import React from 'react'


export default function ProfileCard({ name, role, bio, avatar }) {
return (
<div className="profile-card">
<img className="avatar" src={avatar} alt={name} />
<div>
<h2>{name}</h2>
<p>{role}</p>
<p>{bio}</p>
</div>
</div>
)
}
