import React from 'react';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Name</p>
            <ul>
            <li><a href="https://github.com/your-profile" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
        </footer>
    );
}

export default Footer;