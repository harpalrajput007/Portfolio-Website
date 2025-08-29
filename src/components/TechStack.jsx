import React from 'react'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
import ReactIcon from '@mui/icons-material/BlurOn' // using BlurOn as a placeholder icon for React

const stack = [
  { label: 'HTML', Icon: HtmlIcon },
  { label: 'CSS', Icon: CssIcon },
  { label: 'JavaScript', Icon: JavascriptIcon },
  { label: 'React', Icon: ReactIcon },
]

export default function TechStack({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {stack.map(({ label, Icon }) => (
        <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white/80">
          <Icon fontSize="small" />
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  )
}