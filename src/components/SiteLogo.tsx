type SiteLogoProps = {
  compact?: boolean
}

export function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <a className="group flex items-center gap-3" href="#top" aria-label="Ranjit Thakur CA home">
      <span className="monogram transition-transform duration-300 group-hover:rotate-[-6deg]">RT</span>
      {!compact && (
        <span className="hidden sm:block">
          <span className="block font-display text-[1.05rem] font-semibold tracking-[-0.02em]">Ranjit Thakur</span>
          <span className="mt-[-2px] block text-[10px] font-bold uppercase tracking-[0.22em] text-[#C77B30]">Chartered Accountant</span>
        </span>
      )}
    </a>
  )
}
