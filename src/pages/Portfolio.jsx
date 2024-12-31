import React from "react";
import

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Project
                title="Project 1"
                image="c:\Users\Gypze\OneDrive\Pictures\Screenshots\Screenshot 2024-12-31 000424.png"
                deployedLink="https://gypzes-tech-blog.onrender.com"
                repoLink="https://github.com/gypze/Gypzes-Tech-Blog.git"
            />
            <Project
                title="Project 2"
                image=""C:\Users\Gypze\OneDrive\Pictures\Screenshots\Screenshot 2024-12-31 001013.png""
                deployedLink="https://gypzes-pwa.onrender.com"
                repoLink="https://github.com/gypze/Gypzes-PWA.git"
            />
            <Project
                title="Project 3"
                image=""C:\Users\Gypze\OneDrive\Pictures\Screenshots\Screenshot 2024-12-31 000743.png""
                deployedLink="https://gypze.github.io/Gypze-s-Amazing-Blog/"
                repoLink="https://github.com/gypze/Gypze-s-Amazing-Blog.git"
            />
        </section>
    );
}
    
export default Portfolio;