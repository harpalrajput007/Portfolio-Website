import React from 'react'
import { useNavigate } from 'react-router-dom'

const items = new Array(6).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  tech: ['React', 'Tailwind', 'Vite'].slice(0, (i % 3) + 1),
}))

export default function Projects() {
  const navigate = useNavigate()
  return (
    <>
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
              href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              alt: "HTML5",
            },
            {
              src: "https://img.icons8.com/color/48/css3.png",
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
              alt: "CSS3",
            },
            {
              src: "https://img.icons8.com/color/48/javascript.png",
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              alt: "JavaScript",
            },
            {
              src: "https://img.icons8.com/color/48/react-native.png",
              href: "https://react.dev",
              alt: "React",
            },
            {
              src: "https://img.icons8.com/color/48/nodejs.png",
              href: "https://nodejs.org",
              alt: "Node.js",
            },
            {
              src: "https://img.icons8.com/color/48/express-js.png",
              href: "https://expressjs.com",
              alt: "Express.js",
            },
            {
              src: "https://img.icons8.com/color/48/mongodb.png",
              href: "https://www.mongodb.com",
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
              href: "https://www.figma.com",
              alt: "Figma",
            },
          ],
        },
      ].map((c) => (
        <div
          key={c.title}
          role="button"
          tabIndex={0}
          onClick={() => {
            if (!c.link) return;
            if (/^https?:\/\//i.test(c.link)) {
              window.open(c.link, '_blank', 'noopener');
            } else {
              navigate(c.link);
            }
          }}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && c.link) {
              if (/^https?:\/\//i.test(c.link)) {
                window.open(c.link, '_blank', 'noopener');
              } else {
                navigate(c.link);
              }
            }
          }}
          className="w-80 h-[28rem] bg-black border border-black/80 flex flex-col items-center justify-center mx-auto cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <div className="text-center text-white">
            <div className="font-serif font-extrabold text-2xl mb-6">
              {c.title}
            </div>

            <div className="flex flex-wrap gap-2 justify-center items-center">
              {Array.isArray(c.logos) && c.logos.map((logo, i) => (
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
</>
  )
}