import React from "react";
import

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Project
                title="Project 1"
                image="/path-to-your-image.jpg"
                deployedLink="https://www.example.com"
                repoLink="https://www.github.com"
            />
            <Project
                title="Project 2"
                image="/path-to-your-image.jpg"
                deployedLink="https://www.example.com"
                repoLink="https://www.github.com"
            />
            <Project
                title="Project 3"
                image="/path-to-your-image.jpg"
                deployedLink="https://www.example.com"
                repoLink="https://www.github.com"
            />
        </section>
    );
}
    
export default