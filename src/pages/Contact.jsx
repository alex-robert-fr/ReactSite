import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'

function Contact() {
    return (
        <main>
            <Mouse/>
            <div className="contact">
                <Navigation/>
                <Logo/> {/* conatct form */}
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>12 rue du Code</p>
                            <p>33000 Bordeaux</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0612822371" className="hover">
                                <p style={
                                        {cursor: 'pointer'}
                                    }
                                    className='clipboard'
                                    onClick={
                                        () => {
                                            alert('Téléphone copié')
                                        }
                                }>06 12 82 23 71</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text='contact.alexrobert04@gmail.com'className='hover'>
                            <p style={
                                        {cursor: 'pointer'}
                                    }
                                    className='clipboard'
                                    onClick={
                                        () => {
                                            alert('Email copié')
                                        }
                                }>contact.alexrobert04@gmail.co</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact
