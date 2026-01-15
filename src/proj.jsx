function Projects() {
  const projects = [
    {
      title: "HackUSU Winner: Drunken Sailors",
      description: "1st Place Winner out of 40+ teams. Architected and implemented core game mechanics including collision detection, physics systems, and score logic in Godot—a language learned during the competition. Designed synchronized rhythm-based input system using custom BPM timing. Successfully led technical integration of independent components across 3-person team under 18-hour overnight constraints. Game features intentionally complex cooperative controls that reward teamwork and communication.",
      image: "/img/drunk_sail_thumbnail.png",
      outcome: "Won 1st Place in Games Category out of 550+ competitors and 40+ teams",
      challenge: "Learning Godot's signal/slot architecture and implementing physics systems from scratch while integrating with team components under extreme time pressure",
      tech: ["Godot 4.3", "GDScript", "Physics Systems", "Game Design", "Real-time Sync", "Signals & Slots"],
      link: "https://github.com/Tweagan11/HackUSU2025-Drunken-Sailors",
      date: "February 2025",
      highlight: "1st Place"
    },
    {
      title: "Esports Match Prediction",
      description: "Built an end-to-end ML model using GRU neural networks to predict esports match outcomes, improving accuracy from ~50% baseline to ~70%. Created custom dataset with historical matchups and player metrics.",
      image: "/img/ssbm_pred.png",
      outcome: "Achieved 70% prediction accuracy on professional esports matchups",
      challenge: "Engineering a feature extraction pipeline that effectively captured player skill variance and team dynamics from raw tournament data",
      tech: ["PyTorch", "NumPy", "Neural Networks", "GRU"],
      link: "https://github.com/Tweagan11/MeleeMatchPredictor",
      date: "December 2025",
      highlight: "70% Accuracy"
    },
    {
      title: "Magic the Gathering Tutorial",
      description: "Led a 6-person Agile development team building a full-stack MTG tutorial application. Architected MVC design with C++ backend and Qt frontend, implementing game logic and bot AI.",
      image: "/img/magic_ui.png",
      outcome: "Delivered a fully functional tutorial system with adaptive difficulty and AI-powered gameplay",
      challenge: "Coordinating 6 developers on a complex game logic system while maintaining code quality and meeting sprint deadlines",
      tech: ["C++", "Qt", "MVC", "Agile", "Jira"],
      link: "https://github.com/chammond123/Magic-Tutorial",
      date: "April 2025",
      highlight: "Team Lead"
    },
    {
      title: "Multiplayer Snake Game",
      description: "Designed MVC architecture with client-server communication for multiplayer gameplay. Built C# GUI rendering at 50 FPS, plus web server syncing with SQL database for high scores.",
      image: "/img/snake_game.png",
      outcome: "Achieved consistent 50 FPS rendering with real-time multiplayer synchronization and persistent leaderboards",
      challenge: "Optimizing network latency and managing state synchronization between clients without sacrificing frame rate",
      tech: ["C#", "SQL", "Networking", "Unit Testing"],
      link: "https://github.com/Tweagan11/Multiplayer-Snake-Game",
      date: "December 2024",
      highlight: "50 FPS"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-light text-stone-800 dark:text-stone-100 mb-8 tracking-tight">Projects</h2>
      <div className="w-16 h-0.5 bg-emerald-700 dark:bg-emerald-500 mb-12"></div>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block bg-stone-50 dark:bg-stone-800 hover:bg-white dark:hover:bg-stone-750 
                       border border-stone-200 dark:border-stone-700 hover:border-emerald-700 dark:hover:border-emerald-500
                       transition-all duration-300 rounded-sm relative overflow-hidden`}
          >
            <div className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              {/* Image Container */}
              <div className={`bg-stone-200 dark:bg-stone-700 overflow-hidden relative ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="320"%3E%3Crect fill="%23d6d3d1" width="400" height="320"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23787670" text-anchor="middle" dominant-baseline="middle"%3E{project.title}%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Fade Overlay */}
                <div className={`absolute inset-0 ${idx % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-transparent to-stone-50 dark:to-stone-800 pointer-events-none`}></div>
              </div>

              {/* Content Container */}
              <div className={`p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-light text-stone-800 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <span className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                        {project.highlight}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">{project.date}</p>
                  
                  <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Outcome Section */}
                  <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-700 dark:border-emerald-500 rounded-r">
                    <p className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold mb-2">Outcome</p>
                    <p className="text-sm text-stone-700 dark:text-stone-200">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Challenge Section */}
                  <div className="mb-6 p-4 bg-stone-100 dark:bg-stone-700/50 border-l-4 border-stone-400 dark:border-stone-500 rounded-r">
                    <p className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold mb-2">Key Challenge</p>
                    <p className="text-sm text-stone-700 dark:text-stone-200">
                      {project.challenge}
                    </p>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-600 px-3 py-1 rounded-full hover:border-emerald-700 dark:hover:border-emerald-500 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;