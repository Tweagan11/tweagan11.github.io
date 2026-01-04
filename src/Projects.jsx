import './projects.css';

const projects = [
    {
        title: "Project One", id: 1,
        description: "Description for project one.",
        link:"https://github.com/Tweagan11/resume",
        imgSrce:"https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
    },
    {
        title: "Project Two", id: 2,
        description: "Description for project two.",
        link:"https://github.com/Tweagan11/resume",
        imgSrce:"https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
    },
    {
        title: "Project Three",
        id: 3, description: "Description for project three.",
        link:"https://github.com/Tweagan11/resume",
        imgSrce:"https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
    }
];


function handleClick(link) {
    window.open(link, '_blank');
}

function projectCard(project) {
    return (
        <>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-card">
                    <img src={project.imgSrce} alt={project.title} className="project-image" />
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
            <h2>Projects</h2>
            <section className = "projects-section">
                {projects.map(projectCard)}
            </section>
        </div>
    );
}