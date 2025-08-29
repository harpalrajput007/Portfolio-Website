import React from 'react'

const projects = [
  {
    id: 1,
    title: 'LakshArth',
    description: 'Full-stack MERN investment management platform with JWT auth, role-based dashboards, and data visualization using Chart.js.',
    tech: ['React.js', 'Material UI', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    image: '/laksharth.png',
    link: 'https://laksharth.onrender.com', // TODO: replace with live/demo link
  },
  {
    id: 2,
    title: 'Vaarta',
    description: 'Real-time video meeting app powered by WebRTC and Socket.IO with chat, screen sharing, and meeting history.',
    tech: ['React.js', 'Material UI', 'Socket.IO', 'WebRTC', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'bcrypt'],
    image: '/vaarta.png',
    link: 'https://vaarta-frontend.onrender.com',
  },
  {
    id: 3,
    title: 'VisionGPT',
    description: 'AI-driven chat application with JWT auth, chat history, syntax-highlighted code rendering, and dark/light themes.',
    tech: ['React.js', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcryptjs', 'Axios', 'LM Studio API'],
    image: '/visiongpt.png',
    link: 'https://visiongpt-ai-chat-application-b7bb.onrender.com',
  },
  {
    id: 4,
    title: 'SafarNama',
    description: 'Property listing platform inspired by Airbnb, allowing owners to add, edit, and delete listings with secure user authentication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/safarnama.png',
    link: 'https://safarnama-o3i6.onrender.com/listings',
  },
]

export default function ProjectGallery() {
  return (
    <section className="container-page py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-serif text-3xl font-bold text-ink">Project Gallery</h2>
          <p className="text-muted text-sm">Some of my key projects</p>
        </div>
      </div>

      {/* 2 columns on md and above */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            title={`Open ${p.title}`}
          >
            {/* Image section */}
            <div className="w-full h-48 bg-gray-100 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-ink mb-1">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.description}</p>

              {/* Tech stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span key={i} className="text-[11px] px-2 py-1 rounded-full bg-gray-100 border border-border text-ink/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}