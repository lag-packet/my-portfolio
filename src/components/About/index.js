import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Greetings! It's wonderful to see you on my about page. My name is Satar, and
                        I have a computer science degree from Queens College. As a software developer, I'm passionate
                        about coming up with creative solutions to challenging issues,
                        and I think technology has a significant future.
                    </p>
                    <p align="LEFT">
                        Usually, I can be seen playing video games when I'm not coding. In actuality, I fell in love with programming
                        through my love of games. I'm constantly ready to pick up new knowledge and broaden my skill set,
                        and I'm interested to see what the future of my career in technology holds.
                        I would therefore love to hear from you whether you're a fellow player or simply searching for a motivated and smart software engineer.
                    </p>
                    <p>
                        I'm a tech wizard and coding connoisseur who's always hungry for new challenges and
                        eager to create innovative solutions that take software engineering to the next level!
                    </p>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>

                    <div className="project-box">
                        <h2>Full Stack MERN Gym Tracker Website (Javascript, MongoDB)</h2>
                        <p>A full-stack MERN application that serves as an intuitive and efficient workout tracker,
                             demonstrating my proficiency in web development and the MERN technology stack.</p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>User-friendly interface: The application boasts an easily navigable and visually appealing design, allowing users to manage their workouts effortlessly.</li>
                            <li>CRUD functionality: Users can seamlessly add, update, and delete workouts, ensuring complete control over their fitness data.</li>
                            <li>Robust API: The application is powered by a well-designed API, facilitating smooth data management and communication between the front-end and back-end.</li>
                            <li>MongoDB integration: The application leverages MongoDB for efficient and scalable storage and retrieval of workout information.</li>
                            <li>Responsive design: The application is designed to adapt to various screen sizes, ensuring an optimal viewing experience across devices.</li>
                        </ul>
                    </div>

                    <div className="project-box">
                        <h2>Discord API & RuneScape Node.js HTTP Server (Javascript, Node.js)</h2>
                        <p>Efficient Discord-RuneScape integration built with Node.js, showcasing a ability to create real-time data relays between popular platforms.
                            Leveraging robust server-side development,
                            this project highlights key strengths in API usage, secure authentication, and performance optimization.</p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Seamless integration of Discord and RuneScape APIs using native Node.js libraries</li>
                            <li>Real-time data relay with cache optimization for enhanced performance</li>
                            <li>3-legged OAuth (3LO) flow for secure user authentication</li>
                            <li>Efficient server-side handling of HTTP requests and responses</li>
                            <li>Dynamic message creation and redirection in Discord channels</li>
                        </ul>
                    </div>

                    <div className="project-box">
                        <h2>POP3 & SMTP Email Protocol Implementation (Python)</h2>
                        <p>This project showcases the development of a custom, lightweight email server and client system, leveraging the SMTP and POP3 protocols
                            for email transmission and retrieval. By implementing the foundational elements of email communication, this project demonstrates a
                            deep understanding of core Internet protocols, network programming, and socket management.
                            The server-side implementation is designed to handle both SMTP and POP3 connections concurrently using multithreading.
                            The SMTP server accepts and processes email sending commands, while the POP3 server facilitates the retrieval of emails from the mailbox. 
                            The server is capable of responding to various commands, maintaining efficient email processing, and ensuring reliable connections.
                            On the client-side, the system interacts with the server to send and receive emails. It establishes SMTP connections to compose and transmit emails, 
                            and POP3 connections to retrieve emails from the server. The client implementation highlights the ability to handle network communication, encode and 
                            decode email content, and manage secure user authentication.
                            This project demonstrates proficiency in Python programming, network sockets, multithreading, and understanding of core email protocols. 
                            This email server and client system highlights the ability to design and implement efficient, scalable, and reliable networked applications.
                        </p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Custom SMTP and POP3 server implementation: The project demonstrates the development of a 
                                lightweight email server capable of handling SMTP and POP3 protocols for sending and receiving emails.</li>
                            <li>Concurrent server connections: Utilizing multithreading, the server is designed to efficiently manage multiple client connections simultaneously.</li>
                            <li>Network communication: The project showcases the ability to handle socket connections, network programming, and communication between the server and the client.</li>
                            <li>Python programming expertise: The project is developed using Python, demonstrating proficiency in the language and its applications in network programming.</li>
                        </ul>
                    </div>

                    <div className="project-box">
                        <h2>Pascal Syntax Analyzer for Pascal Compiler (Java) </h2>
                        <p>PascalSyntaxAnalyzer is a Java-based application designed to analyze the syntax of Pascal code. The application reads an input file containing Pascal code and
                            tokenizes the input using a custom-built SyntaxAnalyzer class. It then performs various syntax checks on the tokenized input to ensure compliance with Pascal language
                            rules. The checks include validation of if statements, variable declarations, arithmetic operations, boolean expressions, matching parentheses, and matching quotes.
                            The application outputs the results of these checks to the console, indicating whether the syntax is valid or not. Users can easily extend the application
                            to include additional syntax checks for constructs such as while and for loops.</p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Pascal code input: The application reads and processes Pascal code from an input file, allowing users to analyze real-world code samples.</li>
                            <li>Custom-built SyntaxAnalyzer: The SyntaxAnalyzer class tokenizes the input code, providing an organized and structured representation of the code for further analysis.</li>
                            <li>Comprehensive syntax checks: PascalSyntaxAnalyzer performs a wide range of syntax checks, including validation of if statements,
                                variable declarations, arithmetic operations, boolean expressions, matching parentheses, and matching quotes.</li>
                            <li>Clear and informative output: The application outputs the results of the syntax checks to the console,
                                indicating whether the analyzed code is syntactically valid or not. This helps users quickly identify and fix syntax errors in their Pascal code.</li>
                        </ul>
                    </div>

                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About