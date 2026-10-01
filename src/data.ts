import type { LucideIcon } from 'lucide-react'
import { BarChart3, Calculator, FileCheck2, Landmark, Scale } from 'lucide-react'

export type Service = {
  index: string
  title: string
  description: string
  detail: string
  icon: LucideIcon
  accent: string
}

export const services: Service[] = [
  { index: '01', title: 'Taxation & GST', description: 'A strong foundation in tax, GST and compliance workflows.', detail: 'Experience and training across tax documentation, filing cycles, GST fundamentals and detail-first compliance work.', icon: Scale, accent: 'navy' },
  { index: '02', title: 'Financial Reporting', description: 'Structured finance work for accurate, dependable reporting.', detail: 'Finance and accounts experience across reporting, reconciliations, period close and clear financial communication.', icon: FileCheck2, accent: 'bronze' },
  { index: '03', title: 'Analysis & Controls', description: 'Turning financial information into a clearer picture.', detail: 'A control-first approach to analysing numbers, understanding variances and improving the quality of financial information.', icon: BarChart3, accent: 'navy' },
  { index: '04', title: 'Audit & Compliance', description: 'Careful follow-through across audit and regulatory requirements.', detail: 'CA training and practical experience supporting audit, documentation, internal controls and compliance activities.', icon: Landmark, accent: 'bronze' },
  { index: '05', title: 'Accounting Operations', description: 'Hands-on finance support across day-to-day accounting work.', detail: 'Comfortable working across accounting operations, schedules, reconciliations and the routines that keep finance teams moving.', icon: Calculator, accent: 'navy' },
]

export const credentials = ['CA-ICAI', 'CPA Australia (ASA)', 'Accounting · Taxes · Audit', 'Financial Management']

export const timeline = [
  { year: 'Sep 2022 — Present', role: 'Assistant Manager — Finance & Accounts', context: 'Teyseer Motors W.L.L. · Doha, Qatar', copy: 'Current finance and accounts role, based on the public LinkedIn profile.' },
  { year: 'Earlier experience', role: 'Finance & Accounts', context: 'Varun Beverages Ltd.', copy: 'Previous finance and accounts experience listed on the public profile.' },
  { year: 'CA training', role: 'Articleship — Chartered Accountancy', context: 'O P Bagla & Co.', copy: 'Articleship experience listed in the public professional profile.' },
  { year: 'Education', role: 'Chartered Accountancy', context: 'The Institute of Chartered Accountants of India', copy: 'CA-ICAI credential with additional CPA Australia (ASA) professional recognition.' },
]

export const testimonials = [
  { quote: 'I bring a careful eye to financial detail and a clear, control-first approach to every reporting cycle.', name: 'Clarity', context: 'Finance & accounts mindset' },
  { quote: 'I work across reporting, analysis, audit and compliance with a steady focus on accuracy and follow-through.', name: 'Control', context: 'How I approach the work' },
  { quote: 'I communicate the important points simply and keep building practical capability across finance operations.', name: 'Growth', context: 'Professional mindset' },
]
