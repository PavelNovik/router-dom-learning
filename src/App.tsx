import React from 'react';
import './App.css';
import {NavLink, Route, Routes, useNavigate, useParams} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="navigation">
                <NavLink to={'/'}>main</NavLink> ---- -----
                <NavLink to={'/profile'} style={(params) => {
                    return {color: params.isActive ? 'lime' : 'green'}
                }}>profile</NavLink> ---- -----
                <NavLink to={'/profile-1'}>profile-1</NavLink> ---- -----
                <NavLink to={'/profile-2'} className={({isActive}) => isActive ? 'act' : 'def'}>profile-2</NavLink> ----
                -----
                <NavLink to={'/profile/3'}>profile-3</NavLink> ---- -----
                <NavLink to={'/profile/4'}>profile-4</NavLink> ---- -----
                <NavLink to={'/profile/5'}>profile-5</NavLink> ---- -----
                <a href="https://github.com" target={'_blank'} rel={'noreferrer nofollow noopener'}>XXX</a>
            </div>
            <div className="info">
                <Routes>
                    <Route path={'/*'} element={<div>Error 404</div>}/>
                    <Route path={'/'} element={<div>Main</div>}/>
                    <Route path={'/profile'} element={<div>Profile</div>}/>
                    <Route path={'/profile-1'} element={<div>Profile-1</div>}/>
                    <Route path={'/profile-2'} element={<div>Profile-2</div>} />
                    <Route path={'/profile/:id'} element={<Profile/>}/>
                    <Route path={'/login'} element={<div>Login</div>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

const Profile = () => {
    const navigate = useNavigate()
    const params = useParams<'id'>()
    const some = params
    console.log(some)
    return <div>Profiles{some.id}
    <button onClick={()=> {navigate('/login')}}>login</button>
    </div>
}