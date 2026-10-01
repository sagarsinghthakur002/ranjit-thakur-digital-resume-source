import type { ReactNode } from 'react'

type SectionIntroProps = {
  number: string
  eyebrow: string
  title: ReactNode
  note: string
}

export function SectionIntro({ number, eyebrow, title, note }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <p className="section-note">{note}</p>
    </div>
  )
}
