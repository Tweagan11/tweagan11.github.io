function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 dark:text-stone-100 mb-2 tracking-tight">Resume</h2>
          <div className="w-16 h-0.5 bg-emerald-600 dark:bg-emerald-400"></div>
        </div>
        <a 
          href="mailto:teagan.ms.ut@gmail.com?subject=Resume%20Inquiry"
          className="text-xs md:text-sm uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300
                   border border-emerald-600 dark:border-emerald-500 hover:border-emerald-700 dark:hover:border-emerald-400 px-4 py-2 rounded-sm transition-colors whitespace-nowrap"
        >
          Contact Me
        </a>
      </div>

      <div className="space-y-10 md:space-y-12">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 text-stone-800 dark:text-stone-300 text-sm">
          <span>Email: teagan.ms.ut@gmail.com</span>
          <span>Phone: (801) 369-4523</span>
          <span>Location: Midvale, UT</span>
        </div>

        {/* Education */}
        <section>
          <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4 md:mb-6 pb-2 border-b border-stone-300 dark:border-stone-700">Education</h3>
          <div className="space-y-4">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-2">
                <h4 className="text-lg md:text-xl text-stone-900 dark:text-stone-100">Bachelor of Science - Computer Science</h4>
                <span className="text-stone-700 dark:text-stone-400 text-sm">Dec 2026</span>
              </div>
              <p className="text-stone-800 dark:text-stone-300 mb-3">University of Utah, Kahlert School of Computing</p>
              <div className="flex flex-wrap gap-2 md:gap-3 text-xs">
                <span className="bg-stone-200 dark:bg-emerald-950/30 px-3 py-1 rounded-full text-stone-800 dark:text-stone-300">GPA: 3.94</span>
                <span className="bg-stone-200 dark:bg-emerald-950/30 px-3 py-1 rounded-full text-stone-800 dark:text-stone-300">Major GPA: 4.0</span>
                <span className="bg-stone-200 dark:bg-emerald-950/30 px-3 py-1 rounded-full text-stone-800 dark:text-stone-300">Dean's List: 3 Semesters</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4 md:mb-6 pb-2 border-b border-stone-300 dark:border-stone-700">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h4 className="text-stone-900 dark:text-stone-200 font-medium mb-2">Languages</h4>
              <p className="text-stone-800 dark:text-stone-300 text-sm">Python, C++, C#, JavaScript, SQL, Assembly</p>
            </div>
            <div>
              <h4 className="text-stone-900 dark:text-stone-200 font-medium mb-2">ML / Data</h4>
              <p className="text-stone-800 dark:text-stone-300 text-sm">PyTorch, NumPy, Machine Learning, Data Analytics</p>
            </div>
            <div>
              <h4 className="text-stone-900 dark:text-stone-200 font-medium mb-2">Frameworks & Tools</h4>
              <p className="text-stone-800 dark:text-stone-300 text-sm">Qt, React, Node.js, Django, Docker, AWS</p>
            </div>
            <div>
              <h4 className="text-stone-900 dark:text-stone-200 font-medium mb-2">Systems & Security</h4>
              <p className="text-stone-800 dark:text-stone-300 text-sm">Linux, Wireshark</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4 md:mb-6 pb-2 border-b border-stone-300 dark:border-stone-700">Experience</h3>
          <div className="space-y-6 md:space-y-8">
            <div className="border-l-2 border-emerald-600 dark:border-emerald-500 pl-4 md:pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-2">
                <h4 className="text-lg md:text-xl text-stone-900 dark:text-stone-100">Computer Security TA</h4>
                <span className="text-stone-700 dark:text-stone-400 text-sm">Aug - Dec 2025</span>
              </div>
              <p className="text-stone-800 dark:text-stone-300 mb-3 text-sm">University of Utah</p>
              <ul className="space-y-2 text-stone-800 dark:text-stone-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                  <span>Mentored 100+ students in debugging and core security concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                  <span>Guided implementation of attacks/defenses using Wireshark, Python, and Linux VMs</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-emerald-600 dark:border-emerald-500 pl-4 md:pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-2">
                <h4 className="text-lg md:text-xl text-stone-900 dark:text-stone-100">Product Management Intern</h4>
                <span className="text-stone-700 dark:text-stone-400 text-sm">May - Aug 2025</span>
              </div>
              <p className="text-stone-800 dark:text-stone-300 mb-3 text-sm">Cox Automotive Inc.</p>
              <ul className="space-y-2 text-stone-800 dark:text-stone-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                  <span>Led end-to-end product development using Agile and Scrum methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                  <span>Managed prioritization of 100+ defects and features during critical Go-Live</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                  <span>Conducted 10+ stakeholder interviews to gather requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section>
          <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4 md:mb-6 pb-2 border-b border-stone-300 dark:border-stone-700">Awards</h3>
          <div className="bg-stone-200 dark:bg-emerald-950/30 border-l-4 border-emerald-600 dark:border-emerald-500 p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-3 md:mb-2">
              <h4 className="text-lg md:text-xl text-stone-900 dark:text-stone-100">HackUSU Hackathon - 1st Place</h4>
              <span className="text-stone-700 dark:text-stone-400 text-sm">Feb 2025</span>
            </div>
            <ul className="space-y-2 text-stone-800 dark:text-stone-300 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                <span>1st place out of 40+ teams and 550+ applicants</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                <span>Delivered complete game prototype within 18 hours</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;