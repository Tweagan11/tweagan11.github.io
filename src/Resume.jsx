function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-light text-stone-800 dark:text-stone-100 mb-2 tracking-tight">Resume</h2>
          <div className="w-16 h-0.5 bg-emerald-700 dark:bg-emerald-500"></div>
        </div>
        <a 
          href="mailto:teagan.ms.ut@gmail.com"
          className="text-sm uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300
                   border border-emerald-700 dark:border-emerald-500 hover:border-emerald-800 dark:hover:border-emerald-400 px-4 py-2 rounded-sm transition-colors"
        >
          Contact Me
        </a>
      </div>

      <div className="space-y-12">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 text-stone-600 dark:text-stone-300 text-sm">
          <span>Email: teagan.ms.ut@gmail.com</span>
          <span>Phone: (801) 369-4523</span>
          <span>Location: Midvale, UT</span>
        </div>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-light text-stone-800 dark:text-stone-100 mb-6 pb-2 border-b border-stone-200 dark:border-stone-700">Education</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl text-stone-800 dark:text-stone-100">Bachelor of Science - Computer Science</h4>
                <span className="text-stone-500 dark:text-stone-400">Dec 2026</span>
              </div>
              <p className="text-stone-600 dark:text-stone-300 mb-2">University of Utah, Kahlert School of Computing</p>
              <div className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300">
                <span className="bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">GPA: 3.95</span>
                <span className="bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">Major GPA: 4.0</span>
                <span className="bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">Dean's List: 3 Semesters</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-2xl font-light text-stone-800 dark:text-stone-100 mb-6 pb-2 border-b border-stone-200 dark:border-stone-700">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-stone-700 dark:text-stone-200 font-medium mb-2">Languages</h4>
              <p className="text-stone-600 dark:text-stone-300">Python, C++, C#, Java, JavaScript, SQL, Assembly</p>
            </div>
            <div>
              <h4 className="text-stone-700 dark:text-stone-200 font-medium mb-2">ML / Data</h4>
              <p className="text-stone-600 dark:text-stone-300">PyTorch, NumPy, Machine Learning, Data Analytics</p>
            </div>
            <div>
              <h4 className="text-stone-700 dark:text-stone-200 font-medium mb-2">Frameworks & Tools</h4>
              <p className="text-stone-600 dark:text-stone-300">Qt, React, Node.js, Django, Docker, AWS</p>
            </div>
            <div>
              <h4 className="text-stone-700 dark:text-stone-200 font-medium mb-2">Systems & Security</h4>
              <p className="text-stone-600 dark:text-stone-300">Linux, Wireshark</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-light text-stone-800 dark:text-stone-100 mb-6 pb-2 border-b border-stone-200 dark:border-stone-700">Experience</h3>
          <div className="space-y-8">
            <div className="border-l-2 border-emerald-700 dark:border-emerald-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl text-stone-800 dark:text-stone-100">Computer Security TA</h4>
                <span className="text-stone-500 dark:text-stone-400">Aug - Dec 2025</span>
              </div>
              <p className="text-stone-600 dark:text-stone-300 mb-3">University of Utah</p>
              <ul className="space-y-2 text-stone-600 dark:text-stone-300">
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
                  <span>Mentored 100+ students in debugging and core security concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
                  <span>Guided implementation of attacks/defenses using Wireshark, Python, and Linux VMs</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-emerald-700 dark:border-emerald-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl text-stone-800 dark:text-stone-100">Product Management Intern</h4>
                <span className="text-stone-500 dark:text-stone-400">May - Aug 2025</span>
              </div>
              <p className="text-stone-600 dark:text-stone-300 mb-3">Cox Automotive Inc.</p>
              <ul className="space-y-2 text-stone-600 dark:text-stone-300">
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
                  <span>Led end-to-end product development using Agile and Scrum methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
                  <span>Managed prioritization of 100+ defects and features during critical Go-Live</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
                  <span>Conducted 10+ stakeholder interviews to gather requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section>
          <h3 className="text-2xl font-light text-stone-800 dark:text-stone-100 mb-6 pb-2 border-b border-stone-200 dark:border-stone-700">Awards</h3>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-700 dark:border-emerald-500 p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl text-stone-800 dark:text-stone-100">HackUSU Hackathon - 1st Place</h4>
              <span className="text-stone-500 dark:text-stone-400">Feb 2025</span>
            </div>
            <ul className="space-y-2 text-stone-600 dark:text-stone-300">
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
                <span>1st place out of 40+ teams and 550+ applicants</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 mt-1">▸</span>
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