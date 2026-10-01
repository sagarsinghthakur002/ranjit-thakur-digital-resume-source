import { useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  ExternalLink,
  FileDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { credentials, services, testimonials, timeline } from './data'
import { SectionIntro } from './components/SectionIntro'
import { SiteLogo } from './components/SiteLogo'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Strengths', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: 'CA', label: 'CA-ICAI' },
  { value: 'CPA', label: 'CPA Australia (ASA)' },
  { value: 'Doha', label: 'Current location' },
  { value: 'Finance', label: 'Professional focus' },
]

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(services[0].title)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const activeTestimonial = testimonials[testimonialIndex]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function moveTestimonial(direction: number) {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F8FAFC]/90 backdrop-blur-xl">
        <div className="container-shell flex h-[74px] items-center justify-between">
          <SiteLogo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="button-primary hidden sm:inline-flex" onClick={scrollToContact} type="button">
              Contact me <ArrowUpRight size={16} />
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-[#0F172A] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              type="button"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-[#F8FAFC] px-6 pb-6 pt-4 lg:hidden">
            <nav className="container-shell flex flex-col gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a key={item.href} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:text-[#0F172A]" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
              <button className="button-primary mt-3 justify-center sm:hidden" onClick={() => { setMenuOpen(false); scrollToContact() }} type="button">Contact me <ArrowUpRight size={16} /></button>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative border-b border-slate-200/80">
          <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="container-shell relative grid gap-14 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-20 lg:pt-28">
            <div className="relative z-10">
              <div className="eyebrow mb-6"><span className="gold-dot" /> Personal digital resume</div>
              <h1 className="max-w-4xl font-display text-[clamp(3.35rem,7vw,6.7rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#0F172A]">
                Chartered Accountant with a <span className="text-[#C77B30]">detail-first approach.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                Assistant Manager — Finance & Accounts at Teyseer Motors W.L.L. in Doha, with CA-ICAI and CPA Australia (ASA) credentials.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="button-primary" onClick={scrollToContact} type="button">Contact me <ArrowUpRight size={17} /></button>
                <a className="button-secondary" href="/ranjit-thakur-resume.txt" download><FileDown size={16} /> Download resume</a>
              </div>
              <div className="mt-14 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="avatar avatar-one">RK</span><span className="avatar avatar-two">AM</span><span className="avatar avatar-three">SV</span>
                </div>
                <span>Finance, reporting and controls with a clear professional focus.</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px] lg:mr-0">
              <div className="hero-card relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#0F172A] p-7 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:min-h-[520px] sm:p-9">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10 bg-[#C77B30]/20 blur-2xl" />
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10 bg-blue-400/10 blur-2xl" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#DDA360]">Resume snapshot</p>
                    <p className="mt-4 max-w-[230px] font-display text-3xl leading-[1.02] tracking-[-0.04em] sm:text-4xl">Skills I bring.</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#DDA360]"><Sparkles size={18} /></div>
                </div>
                <div className="relative mt-16 grid grid-cols-2 gap-3 sm:mt-24">
                  <div className="metric-card"><span className="metric-value text-2xl">CA-ICAI</span><span className="metric-label">Chartered Accountant</span></div>
                  <div className="metric-card"><span className="metric-value text-2xl">CPA (ASA)</span><span className="metric-label">Professional credential</span></div>
                  <div className="metric-card metric-highlight col-span-2 flex-row items-center justify-between"><span><span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]/60">Current role</span><span className="mt-1 block font-display text-2xl">Teyseer Motors</span></span><Clock3 size={26} /></div>
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/50 sm:bottom-9 sm:left-9 sm:right-9"><span>RT / CA-ICAI · CPA</span><span>Doha · Qatar</span></div>
              </div>
              <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><CircleCheck size={18} /></span><span><span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">Location</span><span className="block text-sm font-bold text-[#0F172A]">Doha, Qatar</span></span></div>
            </div>
          </div>
          <a href="#services" className="container-shell group mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#C77B30] md:mb-12"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition group-hover:border-[#C77B30]"><ArrowDown size={14} /></span> Explore my profile</a>
        </section>

        <section className="border-b border-slate-200 bg-white" aria-label="Resume highlights">
          <div className="container-shell grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
            {stats.map((stat) => <div key={stat.label} className="px-4 py-8 first:pl-0 last:pr-0 sm:py-10 md:px-8"><p className="font-display text-4xl tracking-[-0.05em] text-[#0F172A] sm:text-5xl">{stat.value}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{stat.label}</p></div>)}
          </div>
        </section>

        <section id="services" className="section-space scroll-mt-20">
          <div className="container-shell">
            <SectionIntro number="01" eyebrow="What I do" title="A clear view of what I bring." note="A quick view of my focus areas. Select a skill to see how I approach it." />
            <div className="mt-14 grid gap-3 lg:grid-cols-5">
              {services.map((service) => {
                const Icon = service.icon
                const active = selectedService === service.title
                return <button key={service.title} type="button" onClick={() => setSelectedService(active ? null : service.title)} className={`service-card group text-left ${active ? 'service-card-active' : ''}`} aria-expanded={active} aria-controls="service-detail">
                  <div className="flex items-start justify-between"><span className={`service-index ${service.accent === 'bronze' ? 'text-[#C77B30]' : ''}`}>{service.index}</span><span className="service-icon"><Icon size={18} strokeWidth={1.6} /></span></div>
                  <div className="mt-14"><h3 className="font-display text-2xl leading-[1.02] tracking-[-0.04em] text-[#0F172A]">{service.title}</h3><p className="mt-4 text-sm leading-6 text-slate-500">{service.description}</p></div>
                  <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"><span>{active ? 'Selected' : 'View scope'}</span><ChevronDown className={`transition-transform duration-300 ${active ? 'rotate-180 text-[#C77B30]' : ''}`} size={15} /></div>
                </button>
              })}
            </div>
            {selectedService && <div id="service-detail" aria-live="polite" className="service-detail mt-3 flex flex-col gap-5 rounded-2xl border border-[#D8B28D]/50 bg-[#FFF8F0] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"><div className="flex items-start gap-4"><span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C77B30] text-white"><Check size={17} /></span><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-[#A76021]">Selected service</p><p className="mt-1 font-display text-xl tracking-[-0.03em] text-[#0F172A]">{selectedService}</p><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{services.find((service) => service.title === selectedService)?.detail}</p></div></div><button className="button-secondary self-start border-[#D8B28D] bg-transparent sm:self-center" onClick={scrollToContact} type="button">Discuss this service <ArrowUpRight size={16} /></button></div>}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-y border-slate-200 bg-white">
          <div className="container-shell grid gap-14 py-20 md:py-28 lg:grid-cols-[0.76fr_1.24fr] lg:gap-24">
            <div className="relative"><div className="sticky top-32"><span className="section-number">02</span><p className="eyebrow mt-5">About me</p><h2 className="section-title mt-4">Good work should feel <span className="text-[#C77B30]">steady.</span></h2><div className="gold-rule mt-8" /><p className="mt-7 max-w-sm text-base leading-7 text-slate-600">I bring an organised, detail-first approach to taxation, audit, accounting and financial analysis—with a focus on learning and doing the work properly.</p></div></div>
            <div><p className="max-w-2xl text-xl leading-8 tracking-[-0.02em] text-[#0F172A] sm:text-2xl sm:leading-9">“Good financial work is accurate, organised and easy for others to understand.”</p><div className="mt-9 grid gap-8 border-t border-slate-200 pt-9 md:grid-cols-[1.25fr_0.75fr]"><div><p className="text-base leading-8 text-slate-600">Ranjit Thakur is a finance and accounts professional currently working as Assistant Manager — Finance & Accounts at Teyseer Motors W.L.L. in Doha, Qatar. He holds CA-ICAI and CPA Australia (ASA) credentials, with a focus on reporting, analysis, audit, taxation and compliance.</p><p className="mt-5 text-base leading-8 text-slate-600">His experience includes finance and accounts work at Varun Beverages Ltd. and Chartered Accountancy articleship at O P Bagla & Co. This digital resume keeps the focus on the work, credentials and professional direction.</p></div><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Credentials</p><div className="flex flex-wrap gap-2">{credentials.map((credential) => <span key={credential} className="credential-badge"><Award size={14} />{credential}</span>)}</div></div></div><div className="mt-12 grid grid-cols-3 gap-3 border-t border-slate-200 pt-7"><div><p className="font-display text-3xl tracking-[-0.05em]">CA</p><p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.13em] text-slate-400">Professional path</p></div><div><p className="font-display text-3xl tracking-[-0.05em]">ICAI</p><p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.13em] text-slate-400">Professional body</p></div><div><p className="font-display text-3xl tracking-[-0.05em]">05</p><p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.13em] text-slate-400">Core skills</p></div></div></div>
          </div>
        </section>

        <section id="experience" className="section-space scroll-mt-20">
          <div className="container-shell"><SectionIntro number="03" eyebrow="My path" title="Learning that compounds." note="A clear timeline of current finance leadership, previous finance and accounts work, CA articleship and professional education." /><div className="timeline mt-16">{timeline.map((item, index) => <div className="timeline-item" key={item.year}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="grid gap-2 pb-12 md:grid-cols-[0.3fr_0.7fr] md:gap-10"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C77B30]">{item.year}</p><div><p className="font-display text-2xl tracking-[-0.04em] text-[#0F172A]">{item.role}</p><p className="mt-1 text-sm font-semibold text-slate-500">{item.context}</p><p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{item.copy}</p></div></div></div>)}</div></div>
        </section>

        <section id="testimonials" className="scroll-mt-20 border-y border-slate-200 bg-[#0F172A] text-white">
          <div className="container-shell grid gap-14 py-20 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24"><div><span className="section-number text-[#DDA360]">04</span><p className="eyebrow mt-5 text-[#DDA360]">Professional strengths</p><h2 className="mt-4 max-w-md font-display text-5xl leading-[0.98] tracking-[-0.06em] sm:text-6xl">The way I work.</h2><p className="mt-7 max-w-sm text-sm leading-6 text-white/55">Accuracy, adaptability and ownership are the qualities I want to bring to every role and project.</p><div className="mt-9 flex gap-2"><button className="carousel-button" onClick={() => moveTestimonial(-1)} aria-label="Previous testimonial" type="button"><ChevronLeft size={18} /></button><button className="carousel-button" onClick={() => moveTestimonial(1)} aria-label="Next testimonial" type="button"><ChevronRight size={18} /></button></div></div><div className="relative" aria-live="polite"><Quote className="absolute -left-1 -top-7 text-[#C77B30]/50" size={50} strokeWidth={1} /><blockquote className="relative border-l border-[#C77B30] pl-7 sm:pl-10"><p className="max-w-3xl font-display text-3xl leading-[1.16] tracking-[-0.04em] text-white sm:text-5xl">“{activeTestimonial.quote}”</p><footer className="mt-9 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-[#DDA360]">{activeTestimonial.name.slice(0, 2).toUpperCase()}</span><span><span className="block text-sm font-semibold text-white">{activeTestimonial.name}</span><span className="block text-xs text-white/45">{activeTestimonial.context}</span></span></footer></blockquote><div className="mt-10 flex gap-2">{testimonials.map((testimonial, index) => <button key={testimonial.name} type="button" onClick={() => setTestimonialIndex(index)} className={`h-1 rounded-full transition-all ${index === testimonialIndex ? 'w-12 bg-[#C77B30]' : 'w-5 bg-white/20'}`} aria-label={`Show testimonial ${index + 1}`} />)}</div></div></div>
        </section>

        <section id="contact" className="section-space scroll-mt-20"><div className="container-shell"><div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)] lg:grid-cols-[0.8fr_1.2fr]"><div className="bg-[#F0F4F8] p-7 sm:p-10 md:p-14"><span className="section-number">05</span><p className="eyebrow mt-5">Contact me</p><h2 className="mt-4 max-w-md font-display text-5xl leading-[0.98] tracking-[-0.06em] sm:text-6xl">Let’s connect.</h2><p className="mt-7 max-w-sm text-base leading-7 text-slate-600">If you are hiring, collaborating or would like to connect, send a note with a little context and I will get back to you.</p><div className="mt-12 space-y-5"><a className="contact-line" href="mailto:ranjit.thakur@example.com"><span className="contact-icon"><Mail size={16} /></span><span><span className="contact-label">Email</span><span className="contact-value">ranjit.thakur@example.com</span></span></a><a className="contact-line" href="#contact"><span className="contact-icon"><Phone size={16} /></span><span><span className="contact-label">Phone</span><span className="contact-value">Add your phone number</span></span></a><div className="contact-line"><span className="contact-icon"><MapPin size={16} /></span><span><span className="contact-label">Location</span><span className="contact-value">Doha, Qatar</span></span></div><div className="contact-line"><span className="contact-icon"><Clock3 size={16} /></span><span><span className="contact-label">Current role</span><span className="contact-value">Assistant Manager — Finance & Accounts</span></span></div></div><a className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#C77B30]" href="https://www.linkedin.com/in/ca-ranjit-thakur-734a11142/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> View LinkedIn profile <ExternalLink size={13} /></a></div><div className="p-7 sm:p-10 md:p-14"><div className="mb-8 flex items-start justify-between gap-6"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Contact details</p><h3 className="mt-2 font-display text-3xl tracking-[-0.04em]">A direct introduction.</h3></div><ShieldCheck className="hidden text-[#C77B30] sm:block" size={25} strokeWidth={1.5} /></div>{submitted ? <div role="status" aria-live="polite" className="flex min-h-[390px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={25} /></span><h3 className="mt-5 font-display text-3xl tracking-[-0.04em]">Thanks, I’ll be in touch.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">Thanks for reaching out. This form is ready to connect to your preferred inbox or CRM.</p><button className="button-secondary mt-7" onClick={() => setSubmitted(false)} type="button">Send another note</button></div> : <form className="space-y-5" onSubmit={handleSubmit}><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Name<input required name="name" className="field-input" placeholder="Your name" /></label><label className="field-label">Email<input required type="email" name="email" className="field-input" placeholder="your@email.com" /></label></div><label className="field-label">Area of interest<select required name="service" className="field-input"><option value="">Choose a focus area</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Not sure yet</option></select></label><label className="field-label">Message<textarea required name="message" className="field-input min-h-32 resize-y" placeholder="What would you like to make clearer?" /></label><div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"><p className="flex items-start gap-2 text-xs leading-5 text-slate-400"><ShieldCheck className="mt-0.5 shrink-0 text-emerald-600" size={14} />Your details will only be used to respond.</p><button className="button-primary justify-center" type="submit">Send message <ArrowUpRight size={16} /></button></div></form>}</div></div></div></section>
      </main>

      <footer className="border-t border-slate-200 bg-white"><div className="container-shell py-10"><div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"><div><a className="flex items-center gap-3" href="#top"><span className="monogram">RT</span><span><span className="block font-display text-lg font-semibold">Ranjit Thakur</span><span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#C77B30]">Chartered Accountant</span></span></a><p className="mt-5 max-w-xs text-xs leading-5 text-slate-400">Personal digital resume for a Chartered Accountant building the next opportunity.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm"><p className="col-span-2 mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Explore</p>{navigation.slice(0, 4).map((item) => <a className="text-slate-600 hover:text-[#C77B30]" href={item.href} key={item.href}>{item.label}</a>)}<a className="text-slate-600 hover:text-[#C77B30]" href="#contact">Contact me</a><a className="text-slate-600 hover:text-[#C77B30]" href="/ranjit-thakur-resume.txt" download>Download resume</a></div></div><div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-5 text-[11px] leading-5 text-slate-400 md:flex-row md:items-start md:justify-between"><p className="max-w-2xl">This resume is for general information. Replace the sample details with your own experience, links and contact information before sharing publicly.</p><p className="shrink-0">© 2025 Ranjit Thakur</p></div></div></footer>
    </div>
  )
}
