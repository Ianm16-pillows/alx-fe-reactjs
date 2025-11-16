import React from 'react'
import ProfileCard from './components/ProfileCard'


const user = {
name: 'Klaus',
role: 'Warehouse Clerk',
bio: 'Learning React — building clean UIs and shipping quality.',
avatar: 'htalx-react-app/src/App.jsx
tps://i.pravatar.cc/150?img=12'
}


export default function App() {
return (
<div className="app-root">
<h1>ALX — React Fundamentals</h1>
<ProfileCard {...user} />
</div>
)
}
