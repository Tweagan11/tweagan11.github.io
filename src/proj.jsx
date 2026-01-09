function Projects() {
  const projects = [
    {
      title: "Esports Match Prediction",
      description: "Built an end-to-end ML model using GRU neural networks to predict esports match outcomes, improving accuracy from ~50% baseline to ~70%. Created custom dataset with historical matchups and player metrics.",
      tech: ["PyTorch", "NumPy", "Neural Networks", "GRU"],
      link: "https://github.com/Tweagan11",
      date: "December 2025",
      highlight: "70% Accuracy"
    },
    {
      title: "HackUSU Winner: Drunken Sailors",
      description: "🏆 1st Place out of 40+ teams. Developed and delivered a complete game prototype within 18 hours, learning new tools and technologies under pressure.",
      tech: ["Game Dev", "Rapid Prototyping", "Team Collaboration"],
      link: "https://github.com/Tweagan11/HackUSU2025-Drunken-Sailors",
      date: "February 2025",
      highlight: "1st Place"
    },
    {
      title: "Magic the Gathering Tutorial",
      description: "Led a 6-person Agile development team building a full-stack MTG tutorial application. Architected MVC design with C++ backend and Qt frontend, implementing game logic and bot AI.",
      tech: ["C++", "Qt", "MVC", "Agile", "Jira"],
      link: "https://github.com/Tweagan11",
      date: "April 2025",
      highlight: "Team Lead"
    },
    {
      title: "Multiplayer Snake Game",
      description: "Designed MVC architecture with client-server communication for multiplayer gameplay. Built C# GUI rendering at 50 FPS, plus web server syncing with SQL database for high scores.",
      tech: ["C#", "SQL", "Networking", "Unit Testing"],
      link: "https://github.com/Tweagan11",
      date: "December 2024",
      highlight: "50 FPS"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-light text-stone-800 dark:text-stone-100 mb-8 tracking-tight">Projects</h2>
      <div className="w-16 h-0.5 bg-emerald-700 dark:bg-emerald-500 mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-stone-50 dark:bg-stone-800 hover:bg-white dark:hover:bg-stone-750 
                     border border-stone-200 dark:border-stone-700 hover:border-emerald-700 dark:hover:border-emerald-500
                     transition-all duration-300 p-8 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-700 dark:bg-emerald-500 transform -translate-x-full 
                          group-hover:translate-x-0 transition-transform duration-300"></div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-light text-stone-800 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              {project.highlight && (
                <span className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">
                  {project.highlight}
                </span>
              )}
            </div>
            
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">{project.date}</p>
            <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-600 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;