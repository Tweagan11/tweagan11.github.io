function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-light text-stone-900 dark:text-stone-100 mb-6 md:mb-8 tracking-tight">About</h2>
      <div className="w-16 h-0.5 bg-emerald-600 dark:bg-emerald-400 mb-10 md:mb-12"></div>
      
      <div className="space-y-6 md:space-y-8 text-stone-800 dark:text-stone-300 leading-relaxed">
        <div className="bg-stone-100 dark:bg-stone-800 p-6 md:p-8 rounded-sm border-l-4 border-emerald-600 dark:border-emerald-500">
          <p className="text-base md:text-lg mb-4">
            I'm a computer science student at the University of Utah with a 4.0 major GPA and a passion 
            for building intelligent systems. When I'm not coding, you'll find me on the trails or slopes 
            of the Wasatch mountains.
          </p>
          <p className="text-base md:text-lg">
            My work spans machine learning, full-stack development, and computer security. I'm particularly 
            interested in how we can use AI to solve complex, real-world problems that better human lives. From learning skills from predicting esports 
            match outcomes to building intuitive game experiences, I love creating technology that makes an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
          <div>
            <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4">Technical Focus</h3>
            <ul className="space-y-2 text-stone-800 dark:text-stone-300">
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Machine Learning & Neural Networks</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Full-Stack Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Computer Security</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Agile Product Management</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4">Beyond the Code</h3>
            <ul className="space-y-2 text-stone-800 dark:text-stone-300">
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Hiking & Backpacking</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Rock Climbing</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Fluent in German (C1)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▸</span>
                <span>Mentoring Students in CS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 p-6 md:p-8 bg-stone-100 dark:bg-emerald-950/30 rounded-sm border-l-4 border-emerald-600 dark:border-emerald-500">
          <h3 className="text-xl md:text-2xl font-light text-stone-900 dark:text-stone-100 mb-4">Currently</h3>
          <p className="text-base md:text-lg text-stone-800 dark:text-stone-300">
            Teaching Assistant for Computer Security at the University of Utah, mentoring 100+ students 
            in security concepts, cryptography, and network analysis. Graduating December 2026.
          </p>
        </div>
      </div>
    </div>
  );
}


export default About;