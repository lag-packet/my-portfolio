import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_i4qpuec', 'template_r2cpovf', refForm.current, 'a5XXs5J-ctyOXD4YS')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Let's team up and create world-changing software
                        - drop me a line and let's get started!
                    </p>
                    <p>My Email: <a className='contact-email' href='mailto:SatarHassni0@gmail.com'>SatarHassni0@gmail.com</a></p>
                </div>
                <Loader type="pacman" />
            </div>
        </>
    )
}

export default Contact