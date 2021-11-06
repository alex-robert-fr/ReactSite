import React from 'react'
import DynamicText from '../components/DynamicText'
import Navigation from '../components/Navigation'
import SocialNetwork from '../components/SocialNetwork'

function Home() {
    return (
        <div className="home">
            <Navigation/>
            <SocialNetwork/>
            <div className="home-main">
                <div className="main-content">
                    <h1>FS AGENCY</h1>
                    <h2><DynamicText /></h2>
                </div>
            </div>
        </div>
    )
}

export default Home
