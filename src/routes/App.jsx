import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import SvgIcon from '@mui/material/SvgIcon'

function BehanceIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M3.2 7.2h4.9c1.2 0 2.1.3 2.7.8.5.5.8 1.1.8 1.9 0 .8-.2 1.4-.7 1.8-.2.2-.5.4-.9.5.6.2 1 .4 1.3.8.3.4.5.9.5 1.6 0 .9-.3 1.6-.9 2.2-.6.6-1.5.9-2.6.9H3.2V7.2zm3 4.3h1.6c.6 0 1-.1 1.3-.3.3-.2.4-.5.4-.9 0-.4-.1-.7-.4-.9-.3-.2-.7-.3-1.3-.3H6.2v2.4zm0 4.2h1.9c.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.1-.3-.2-.8-.4-1.4-.4H6.2v3.1zM14.7 12.5c.2-.7.5-1.2 1-1.6.6-.5 1.4-.7 2.4-.7 1.1 0 2 .3 2.5.8.5.5.8 1.2.9 2.1.1.8.1 1.8 0 2.9h-5.2c.1.5.3.9.7 1.2.4.3.9.4 1.6.4.6 0 1.1-.1 1.5-.3.4-.2.7-.4 1-.7l1.2 1.3c-.8 1.1-2 1.7-3.8 1.7-1.4 0-2.4-.3-3.2-1-.8-.7-1.3-1.8-1.3-3.3 0-1.5.3-2.7 1-3.6zm4.2 1.6c-.1-.5-.3-.8-.6-1.1-.3-.3-.7-.4-1.3-.4-.5 0-.9.1-1.2.3-.3.2-.5.6-.6 1.1h3.7zM14.4 6.2h4v1.2h-4V6.2z" fill="currentColor"/>
    </SvgIcon>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col bg-page text-black">
      {/* Top bar */}
      <header className="border-b border-border bg-[#f3f4f5] fixed top-0 left-0 w-full z-20">
        <div className="w-full h-12 md:h-14 flex items-center justify-between relative px-4 md:px-8">
          {/* Mobile: hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-black/10 text-black"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Left: nav links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-5 text-[11px] text-black/70">
            <NavLink to="/" end className={({ isActive }) => `${isActive ? 'text-black font-medium' : 'hover:text-black'}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-black font-medium' : 'hover:text-black'}`}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${isActive ? 'text-black font-medium' : 'hover:text-black'}`}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-black font-medium' : 'hover:text-black'}`}>Contact</NavLink>
          </nav>

          {/* Center: name + subtitle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <div className="font-fr font-semibold text-base md:text-xl text-black">Harpal Rajput</div>
            <div className="uppercase tracking-[0.28em] text-[9px] md:text-[10px] text-black">FULL STACK DEVELOPER & UI/UX DESIGNER</div>
          </div>

          {/* Right: socials */}
          <div className="hidden md:flex items-center gap-3 text-black/70">
            <a href="https://www.linkedin.com/in/harpalrajput007" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-black"><LinkedInIcon fontSize="small" /></a>
            <a href="https://github.com/harpalrajput007" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-black"><GitHubIcon fontSize="small" /></a>
            <a href="https://www.behance.net/harpalsrajput" target="_blank" rel="noreferrer" aria-label="Behance" className="hover:text-black"><BehanceIcon fontSize="small" /></a>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-[#f3f4f5] border-t border-border px-4 py-3 space-y-2">
            <div className="flex flex-col text-sm">
              <NavLink to="/" end className={({ isActive }) => `py-2 ${isActive ? 'text-black font-medium' : 'text-black/70'}`} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `py-2 ${isActive ? 'text-black font-medium' : 'text-black/70'}`} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/projects" className={({ isActive }) => `py-2 ${isActive ? 'text-black font-medium' : 'text-black/70'}`} onClick={() => setOpen(false)}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `py-2 ${isActive ? 'text-black font-medium' : 'text-black/70'}`} onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.linkedin.com/in/harpalrajput007" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-black text-black/70"><LinkedInIcon fontSize="small" /></a>
              <a href="https://github.com/harpalrajput007" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-black text-black/70"><GitHubIcon fontSize="small" /></a>
              <a href="https://www.behance.net/harpalsrajput" target="_blank" rel="noreferrer" aria-label="Behance" className="hover:text-black text-black/70"><BehanceIcon fontSize="small" /></a>
            </div>
          </div>
        )}
      </header>

      {/* account for fixed header */}
      <main className="flex-1 pt-12 md:pt-14">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <footer className="bg-black border-t border-border py-8 text-center text-white/60 text-sm">© {new Date().getFullYear()} Harpal Rajput — All rights reserved.</footer>
    </div>
  )
}