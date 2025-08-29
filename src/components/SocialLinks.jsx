import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const links = [
  { href: 'https://github.com/your-handle', label: 'GitHub', Icon: GitHubIcon },
  { href: 'www.linkedin.com/in/harpalrajput007', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://twitter.com/your-handle', label: 'Twitter', Icon: TwitterIcon },
  { href: 'mailto:you@example.com', label: 'Email', Icon: MailOutlineIcon },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
        >
          <Icon fontSize="small" />
        </a>
      ))}
    </div>
  )
}