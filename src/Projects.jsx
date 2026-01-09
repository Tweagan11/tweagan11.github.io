import './projects.css';

const projects = [
    {
        title: "HackUSU Winner: Drunken Sailors", id: 1,
        description: "Description for project one.",
        link:"https://github.com/Tweagan11/HackUSU2025-Drunken-Sailors",
        imgSrc: "img/drunk_sail_thumbnail.png"
    },
    {
        title: "Project Two", id: 2,
        description: "Description for project two.",
        link:"https://github.com/Tweagan11/resume",
        imgSrc: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
    },
    {
        title: "Project Three",
        id: 3, description: "Description for project three.",
        link:"https://github.com/Tweagan11/resume",
        imgSrc: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
    }
];

function projectCard(project) {
    return (
        <>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-card">
                    <img src={project.imgSrc} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                        <h3 className = "project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

// const listItems = projects.map((project) =>
//     // <li key={project.id} style={{cursor: 'pointer', marginBottom: '10px'}}>
//     <projectCard project={...project} />
//     {/* </li> */}
// );

export default function Projects() {
    return (
        <div>
            <h1 className="p_header">Projects</h1>
            <section className = "projects-section">
                {projects.map(projectCard)}
            </section>
        </div>
    );
}