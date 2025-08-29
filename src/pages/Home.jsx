import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SocialLinks from '../components/SocialLinks'
import TechStack from '../components/TechStack'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* Hero section – centered serif title with portrait and circle backdrop */}
      <section className="pt-16 md:pt-24 pb-10">
        <div className="container-page">
          <h1 className="about-title text-center font-serif text-[28px] md:text-[36px] lg:text-[40px] font-extrabold leading-snug text-ink">
            Hey, it’s Harpal Rajput.
            <br />
            Full Stack Web Developer & UIUX Designer
            <br />
            Based on Pune Maharashtra.
          </h1>

          {/* Mobile hero (only on small screens) */}
          <div className="md:hidden mt-8">
            <div className="relative mx-auto w-full max-w-sm bg-white border border-border rounded-2xl p-5 shadow-sm">
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-48 h-48 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full" aria-hidden />
                <div className="absolute w-56 h-56 rounded-full border border-border/80" aria-hidden />
                <img src="/myself.png" alt="Harpal Rajput" className="relative w-52 h-52 object-contain" />
              </div>
              <div className="mt-5 text-left space-y-4">
                <div>
                  <div className="font-fr text-sm font-semibold mb-1">Biography</div>
                  <p className="text-[11px] text-muted">I am a third-year CSE student, passionate about building web applications and designing user-friendly interfaces. I specialize in full stack MERN development and UI/UX design, combining technical skills with a strong design sense to create impactful digital experiences.</p>
                </div>
                <div>
                  <div className="font-fr text-sm font-semibold mb-1">Skills & Expertise</div>
                  <ul className="list-disc pl-5 text-[11px] text-muted space-y-1">
                    <li>Frontend: React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap</li>
                    <li>Backend: Node.js, Express.js, REST APIs</li>
                    <li>Database: MongoDB, MySQL</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>UI/UX Design: Figma, Wireframing, Prototyping, User Research</li>
                  </ul>
                </div>
                <div>
                  <div className="font-fr text-sm font-semibold mb-1">Education</div>
                  <ul className="list-disc pl-5 text-[11px] text-muted space-y-1">
                    <li>10th: 85.80%</li>
                    <li>12th: 89.50%</li>
                    <li>B.Tech (CSE): CGPA 8.98 (ongoing)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-fr text-sm font-semibold mb-1">Hobbies</div>
                  <ul className="list-disc pl-5 text-[11px] text-muted space-y-1">
                    <li>Travelling & exploring new cultures</li>
                    <li>Music / Playing instruments</li>
                    <li>Reading books (tech, self-development, or fiction)</li>
                    <li>Sketching</li>
                  </ul>
                </div>
                <div>
                  <div className="font-fr text-sm font-semibold mb-1">My Location</div>
                  <div className="text-[11px] text-muted">Loni Kalbhor, Pune</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-12 about-info hidden md:block">
            {/* full-viewport-width backdrop behind about section */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 w-screen h-[440px] bg-[#ffffff]" />

            {/* three-column layout inside the band, tighter like PNG */}
            <div className="relative container-narrow grid grid-cols-1 md:grid-cols-[1fr_400px_1fr] gap-8 items-center h-full">
              {/* Left info (on grey background) */}
              <div className="text-ink/90 text-[11px] leading-relaxed">
                <div className="font-fr text-base font-semibold mb-2">Biography</div>
                <p className="text-muted mb-3">I am a third-year CSE student, passionate about building web applications and designing user-friendly interfaces. I specialize in full stack MERN development and UI/UX design, combining technical skills with a strong design sense to create impactful digital experiences.</p>

                <div className="font-fr text-base font-semibold mb-2">Skills & Expertise</div>
                <ul className="list-disc pl-5 text-muted space-y-1">
                  <li>Frontend: React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap</li>
                  <li>Backend: Node.js, Express.js, REST APIs</li>
                  <li>Database: MongoDB, MySQL</li>
                  <li>Version Control: Git, GitHub</li>
                  <li>UI/UX Design: Figma, Wireframing, Prototyping, User Research</li>
                </ul>

                <div className="font-fr text-base font-semibold mt-3">My Location</div>
                <div className="text-muted">Loni Kalbhor, Pune</div>
              </div>

              {/* Center backdrop: vertical rectangle with circular top (grey) */}
              <div className="relative mx-auto -mt-6 md:-mt-10">
                <div className="relative w-[280px] md:w-[360px] h-[480px] md:h-[520px]">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-[#cecece] rounded-full" aria-hidden />
                  <div className="absolute left-0 top-[150px] md:top-[170px] w-full h-[300px] md:h-[340px] bg-[#cecece]" aria-hidden />
                  <div className="absolute inset-0 pointer-events-none rounded-t-[140px] md:rounded-t-[180px] shadow-[0_10px_20px_rgba(0,0,0,0.06)]" aria-hidden />
                  <img src="/myself.png" alt="Harpal Rajput" className="info-image absolute bottom-2 left-1/2 -translate-x-1/2 w-[110%] h-auto object-contain -translate-y-6" />
                </div>
              </div>

              {/* Right info (on grey background) */}
              <div className="text-ink/90 text-[11px] leading-relaxed">
                <div className="font-fr text-base font-semibold mb-2">Education</div>
                <ul className="list-disc pl-5 text-muted space-y-1">
                  <li>10th: 85.80%</li>
                  <li>12th: 89.50%</li>
                  <li>B.Tech (CSE): CGPA 8.98 (ongoing)</li>
                </ul>

                <div className="font-fr text-base font-semibold mb-2">Hobbies</div>
                <ul className="list-disc pl-5 text-muted space-y-1">
                  <li>Travelling & exploring new cultures</li>
                  <li>Music / Playing instruments</li>
                  <li>Reading books (tech, self-development, or fiction)</li>
                  <li>Sketching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My project process */}
<section className="py-12 bg-gray-100">
  <div className="my-project container mx-auto px-4">
    <h2 className="process-title text-3xl font-bold text-center mb-8 text-ink-darkest">
      My project process
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">

      
      {/* Step 01 */}
      <div className="bg-white px-4 py-6 flex flex-col items-center text-center border-r border-gray-200">
        <div className="text-2xl font-bold text-gray-300 mb-2">01</div>
        <div className="text-xl text-ink-dark mb-2">
          <i className="fas fa-search"></i>
        </div>
        <h3 className="font-fr text-base font-semibold mb-1 text-ink-darkest">Research & Planning</h3>
        <p className="text-xs text-muted-dark">
        Thorough research and strategic planning form the foundation of every successful project, helping to define goals and understand user needs.
        </p>
      </div>

      {/* Step 02 */}
      <div className="bg-white px-4 py-6 flex flex-col items-center text-center border-r border-gray-200">
        <div className="text-2xl font-bold text-gray-300 mb-2">02</div>
        <div className="text-xl text-ink-dark mb-2">
          <i className="fas fa-drafting-compass"></i>
        </div>
        <h3 className="font-fr text-base font-semibold mb-1 text-ink-darkest">Wireframing & Prototyping</h3>
        <p className="text-xs text-muted-dark">
        Transforming ideas into wireframes and prototypes to refine functionalities and ensure a smooth and intuitive user journey.
        </p>
      </div>

      {/* Step 03 */}
      <div className="bg-white px-4 py-6 flex flex-col items-center text-center border-r border-gray-200">
        <div className="text-2xl font-bold text-gray-300 mb-2">03</div>
        <div className="text-xl text-ink-dark mb-2">
          <i className="fas fa-laptop-code"></i>
        </div>
        <h3 className="font-fr text-base font-semibold mb-1 text-ink-darkest">Design & Development</h3>
        <p className="text-xs text-muted-dark">
        Crafting visually appealing and functional solutions, making sure every pixel and line of code aligns with the brand and project objectives.
        </p>
      </div>

      {/* Step 04 */}
      <div className="bg-white px-4 py-6 flex flex-col items-center text-center">
        <div className="text-2xl font-bold text-gray-300 mb-2">04</div>
        <div className="text-xl text-ink-dark mb-2">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3 className="font-fr text-base font-semibold mb-1 text-ink-darkest">Testing & Feedback</h3>
        <p className="text-xs text-muted-dark">
        Conducting rigorous testing and incorporating feedback to deliver a polished, bug-free experience across all devices and platforms.
        </p>
      </div>

    </div>
  </div>
</section>


{/* CTA */}
<section className="CTA w-full bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] items-center relative">
    
    {/* Left block with circle */}
    <div className="relative flex items-center justify-center lg:justify-end bg-black h-[360px] md:h-[420px] lg:h-[480px] overflow-visible">
      <div className="relative lg:translate-x-1/2 size-[260px] md:size-[320px] lg:size-[380px] rounded-full bg-white border border-border shadow-lg p-6 md:p-8 flex items-center justify-center text-center">
        <div>
          <h3 className="font-serif font-semibold text-base md:text-lg text-ink mb-2">Let’s Connect or Collaborate!</h3>
          <p className="text-[11px] text-muted leading-relaxed">Interested in working on exciting web development or UI/UX projects together? I love collaborating, joining hackathons, and contributing to tech communities.</p>
          <div className="text-[11px] text-ink mt-3">
            <a href="mailto:harpalsinghrajput007@gmail.com" className="hover:underline">harpalsinghrajput007@gmail.com</a>
          </div>
        </div>
      </div>
    </div>

    {/* Right intro text */}
<div className="bg-white px-6 md:px-12 lg:px-16 py-6 md:py-0 flex items-center">
  <div className="max-w-[360px] mx-auto lg:ml-60">
    <div className="uppercase tracking-[0.25em] text-[10px] text-muted">Web Developer – UI/UX Designer</div>
    <h3 className="font-serif text-xl md:text-3xl font-bold text-ink mt-2">I’m a passionate web developer and UI/UX designer, always eager to learn and innovate.</h3>
    <p className="text-[12px] text-muted mt-3 leading-relaxed">Currently in my third year, I focus on creating clean, user-friendly websites and interfaces. Let’s connect for project collaborations or tech talks!</p>
    <Link to="/contact" className="inline-block mt-4 bg-black text-white px-4 py-2 rounded hover:bg-ink transition">Let’s work together →</Link>
  </div>
</div>
</div>
</section>

{/* Projects grid */}
<section className="py-10 bg-white">
  <div className="container-page">
    <h3 className="project-title font-serif text-3xl  font-bold text-ink">
      Projects
    </h3>
    <p className="projects-desc text-[13px] text-muted mt-2 max-w-sm">
    I have worked on projects that combine full stack web development and UI/UX design, creating clean, responsive, and user-friendly digital experiences.
    </p>

    <div className="projects-card mt-6 grid grid-cols-1 sm:grid-cols-2 gap-1">
      {[
        {
          title: "Web Development",
          description: "Crafting engaging and functional web experiences.",
          icon: "/assets/icons/code.svg",
          link: "/projects/gallery",
          logos: [
            {
              src: "https://img.icons8.com/color/48/html-5--v1.png",
              alt: "HTML5",
            },
            {
              src: "https://img.icons8.com/color/48/css3.png",
              alt: "CSS3",
            },
            {
              src: "https://img.icons8.com/color/48/javascript.png",
              alt: "JavaScript",
            },
            {
              src: "https://img.icons8.com/color/48/react-native.png",
              alt: "React",
            },
            {
              src: "https://img.icons8.com/color/48/nodejs.png",
              alt: "Node.js",
            },
            {
              src: "https://img.icons8.com/color/48/express-js.png",
              alt: "Express.js",
            },
            {
              src: "https://img.icons8.com/color/48/mongodb.png",              href: "https://www.mongodb.com",
              alt: "MongoDB",
            },
          ],
        },
        {
          title: "UI/UX",
          link: "https://www.behance.net/harpalsrajput", // <-- card link
          logos: [
            {
              src: "https://img.icons8.com/color/48/figma--v1.png",
              alt: "Figma",
            },
          ],
        },
      ].map((c) => (
        <div
          key={c.title}
          role="button"
          tabIndex={0}
          onClick={() => c.link && navigate(c.link)}
          onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && c.link) navigate(c.link) }}
          className="w-80 h-[28rem] bg-black border border-black/80 flex flex-col items-center justify-center mx-auto cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <div className="text-center text-white">
            <div className="font-serif font-extrabold text-2xl mb-6">
              {c.title}
            </div>

            <div className="flex flex-wrap gap-2 justify-center items-center">
              {c.logos.map((logo, i) => (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={logo.alt}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* My Expertise */}
<section className="bg-white pt-10 pb-16">
  <div className="container-page expertise">
    <h3 className="expertise-title text-center font-serif text-3xl font-bold text-ink">
      My Expertise
    </h3>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {[
        {
          title: "Web Development",
          text: "I build responsive, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), HTML5, CSS3, and JavaScript. I focus on writing clean, maintainable code that delivers a smooth user experience.",
          icon: "https://img.icons8.com/ios-filled/50/source-code.png",
          alt: "Web Development",
        },
        {
          title: "User Interface",
          text: "I design visually appealing interfaces that are intuitive and consistent. Using Figma and Material UI, I ensure every component aligns with the overall brand and design system.",
          icon: "https://img.icons8.com/ios-filled/50/web.png",
          alt: "User Interface",
        },
        {
          title: "User Experience",
          text: "I craft user-centered experiences by conducting usability testing, wireframing, and prototyping. My goal is to make digital products easy to use, engaging, and accessible across devices.",
          icon: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-ui-design-digital-nomad-tanah-basah-glyph-tanah-basah.png",
          alt: "User Experience",
        },
      ].map((item) => (
        <div key={item.title} className="flex flex-col items-center text-center">
          {/* Icon */}
          <img src={item.icon} alt={item.alt} className="w-12 h-12 mb-4" />

          {/* Title */}
          <div className="font-fr font-semibold text-ink text-xl">{item.title}</div>

          {/* Description */}
          <p className="text-[12px] text-muted mt-2 max-w-xs">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Dark CTA band */}
<section className="bg-black text-white py-12">
  <div className="container-page grid md:grid-cols-12 gap-8 items-start">
    <div className="md:col-span-9">
      <h3 className="font-serif text-xl md:text-2xl font-bold">
        Have a project idea? Get in touch and let’s chat!
      </h3>
      <p className="text-[12px] text-white/70 mt-3 max-w-2xl">
        I’m always open to new project ideas, collaborations, and learning opportunities. 
        Whether you have a question or want to discuss web development or UI/UX design, 
        feel free to reach out. Let’s create something amazing together!
      </p>
      <Link to="/contact" className="inline-block mt-4 bg-black text-white px-4 py-2 rounded hover:bg-ink transition">Let’s work together →</Link>
    </div>

    {/* Social Icons */}
    <div className="md:col-span-3 flex md:flex-col gap-4 md:justify-start justify-end text-2xl">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/harpalrajput007" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" 
          alt="LinkedIn" 
          className="w-6 h-6 hover:scale-110 transition-transform duration-200" 
        />
      </a>

      {/* GitHub */}
      <a href="https://github.com/harpalrajput007" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" 
          alt="GitHub" 
          className="w-6 h-6 hover:scale-110 transition-transform duration-200" 
        />
      </a>

      {/* Behance */}
      <a href="https://www.behance.net/harpalsrajput" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/behance.png" 
          alt="Behance" 
          className="w-6 h-6 hover:scale-110 transition-transform duration-200" 
        />
      </a>

      {/* Twitter */}
      <a href="https://x.com/harpalrajput007" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png" 
          alt="Twitter" 
          className="w-6 h-6 hover:scale-110 transition-transform duration-200" 
        />
      </a>
    </div>
  </div>

  {/* Contact Info */}
  <div className="container-page mt-10 border-t border-white/20 pt-6">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div>
        <img 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" 
          alt="Email" 
          className="mx-auto w-6 h-6" 
        />
        <div className="mt-2 text-white/70 text-xs">Email Address</div>
        <div className="text-sm">harpalsinghrajput007@gmail.com</div>
      </div>
      <div>
        <img 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" 
          alt="Phone" 
          className="mx-auto w-6 h-6" 
        />
        <div className="mt-2 text-white/70 text-xs">Contact Number</div>
        <div className="text-sm">9373530347</div>
      </div>
      <div>
        <img 
          src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" 
          alt="Location" 
          className="mx-auto w-6 h-6" 
        />
        <div className="mt-2 text-white/70 text-xs">Location</div>
        <div className="text-sm">Loni Kalbhor</div>
      </div>
    </div>
  </div>
</section>

{/* Bottom name bar */}
<section className="bg-black py-8">
  <div className="container-page text-center">
    <div className="font-serif font-bold text-xl text-white">Harpal Rajput</div>
    <div className="text-[10px] uppercase tracking-[0.25em] text-white/70 mt-2">
      Full Stack Developer & UI/UX Designer
    </div>
  </div>
</section>

    
    </>
  )
}
