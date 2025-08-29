import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 py-12">
      <section className="container-page text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Hey, it’s Harpal Rajput.</h1>
        <p className="text-xl text-gray-700 mb-8">Full Stack Web Developer & UIUX Designer Based on Pune Maharashtra.</p>
        <div className="flex justify-center">
          <img src="/myself.png" alt="Harpal Rajput" className="max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="container-page bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-10 text-left">
          {/* About me */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">About me</h2>
            <p className="text-gray-700">
              I’m Harpal Rajput, a passionate Full Stack Developer and UI/UX Designer who loves building digital experiences that blend functionality with design. Currently pursuing B.Tech in Computer Science (AI & Analytics specialization), I bring together a strong foundation in coding, problem-solving, and creative design thinking.
My journey is driven by curiosity—whether it’s writing efficient backend logic, designing sleek user interfaces, or analyzing data to create impactful solutions, I aim to deliver work that makes a difference.
            </p>
          </div>

          {/* What I do */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">What I do</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><span className="font-medium">Frontend Development</span>: Crafting responsive, interactive, and pixel-perfect websites with HTML, CSS, JavaScript, and React.</li>
              <li><span className="font-medium">Backend Development</span>: Building robust server-side applications using Node.js & Express, connected with MySQL/MongoDB for scalable data management.</li>
              <li><span className="font-medium">Database Management</span>: Designing and managing relational and non-relational databases with MySQL and MongoDB.</li>
              <li><span className="font-medium">UI/UX Design</span>: Designing user-friendly and visually engaging interfaces using Figma, focusing on accessibility, usability, and smooth experiences.</li>
            </ul>
          </div>

          {/* My journey */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">My journey</h2>
            <p className="text-gray-700">
              My journey has been shaped by continuous learning across Web Development and UI/UX Design.
              Here’s a quick snapshot of the core technologies I’ve worked with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Frontend: HTML5, CSS3, JavaScript, React.js</li>
              <li>Backend: Node.js, Express.js, REST APIs</li>
              <li>Database: MySQL, MongoDB</li>
              <li>UI/UX Tools: Figma, Wireframing, Prototyping, Design Systems</li>
              <li>Version Control: Git & GitHub for collaboration and project management</li>
            </ul>
          </div>

          {/* Beyond code */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Beyond code</h2>
            <p className="text-gray-700">
             Outside of coding, I enjoy exploring UI trends, design inspirations, and new tech tools. I also love collaborating with peers, brainstorming product ideas, and sharing knowledge with others. Creativity and problem-solving go hand in hand for me — whether I’m sketching wireframes or debugging code.
            </p>
          </div>

          {/* My goal */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">My goal</h2>
            <p className="text-gray-700">
              My ultimate goal is to become a highly skilled Full Stack Developer with strong UI/UX expertise, contributing to impactful products that solve real-world problems. Over the next few years, I aim to grow as a developer, refine my design thinking, and build applications that are not only technically sound but also delightful to use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}