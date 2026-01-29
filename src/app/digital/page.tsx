import Link from "next/link"

export default function DigitalSovereigntyPage() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto">
      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] flex flex-col justify-center relative border-b border-accent overflow-hidden pt-20">
        {/* Background Abstract: The 'Iron Curtain' of Data */}
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-dashed border-accent opacity-30 pointer-events-none hidden md:block"></div>
        <div className="absolute top-1/2 right-[25%] w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="font-mono text-xs text-red-500 mb-4 animate-pulse">
            ⚠ DATA_JURISDICTION_WARNING
          </div>

          <h1 className="text-[8vw] leading-[0.85] uppercase -tracking-[0.04em] mb-8">
            <span className="block">DIGITAL</span>
            <span className="block pl-[5vw] text-transparent stroke-text">
              SOVEREIGNTY
            </span>
            <span className="block text-accent">INITIATIVE</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl font-mono leading-relaxed opacity-80 mb-12">
            The era of the US CLOUD ACT is ending.
            <br />
            Migrate your infrastructure from Silicon Valley to sovereign
            European hardware. Reclaim ownership.
          </p>

          <Link
            href="#services"
            className="inline-flex items-center gap-4 border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors group"
          >
            <span className="font-bold">START_MIGRATION_PROTOCOL</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* --- MANIFESTO SECTION --- */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl uppercase mb-8">Why Leave USA services?</h2>
          <div className="font-mono text-sm space-y-6 opacity-70">
            <p>
              [01] THE CLOUD ACT: Allows US federal agencies to seize data
              stored on US-owned servers, regardless of physical location.
            </p>
            <p>
              [02] VENDOR LOCK-IN: Proprietary APIs designed to make extraction
              impossible.
            </p>
            <p>
              [03] COST: Inflated egress fees taxing your own data movement.
            </p>
          </div>
        </div>

        {/* Visual: Abstract Map of Migration */}
        <div className="h-64 md:h-96 border border-accent relative flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
          {/* US Node */}
          <div className="absolute left-10 p-4 border border-red-900/50 text-red-700 font-mono text-xs text-center">
            <div className="text-2xl mb-2">🇺🇸</div>
            US_CLOUD
            <div className="mt-2 text-[10px]">SURVEILLANCE: ACTIVE</div>
          </div>

          {/* Arrow */}
          <div className="w-32 h-[1px] bg-foreground relative mx-4">
            <div className="absolute -top-1 right-0 w-2 h-2 bg-foreground rotate-45 border-t border-r border-background"></div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-background px-2">
              MIGRATING...
            </div>
          </div>

          {/* EU Node */}
          <div className="absolute right-10 p-4 border border-green-900/50 text-green-700 font-mono text-xs text-center">
            <div className="text-2xl mb-2">🇪🇺</div>
            EU_SOVEREIGN
            <div className="mt-2 text-[10px]">GDPR: COMPLIANT</div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 border-t border-accent">
        <span className="font-mono text-xs block mb-16 opacity-60">
          / 02 — MIGRATION SERVICES
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Compute Migration */}
          <div className="group border border-accent p-8 hover:border-foreground transition-colors relative overflow-hidden">
            <div className="absolute top-4 right-4 font-mono text-xs opacity-50">
              [01]
            </div>

            {/* Abstract Image: Virtual Machines */}
            <div className="w-full h-48 bg-accent/5 mb-8 flex items-center justify-center gap-4 border-b border-dashed border-accent">
              <div className="w-12 h-16 border border-foreground/30 flex flex-col justify-end p-1">
                <div className="w-full h-1 bg-foreground/30"></div>
              </div>
              <div className="text-xl">→</div>
              <div className="w-12 h-16 border border-foreground bg-foreground text-background flex items-center justify-center font-bold">
                LX
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Bare-Metal Transition</h3>
            <p className="font-mono text-sm opacity-70 leading-relaxed mb-6">
              Moving from serverless/proprietary AWS Lambda to VPS, bare-metal,
              public cloud, docker containers hosted in EUROPE. Full control
              over the hypervisor.
            </p>
            <ul className="font-mono text-xs space-y-2 list-disc list-inside opacity-60">
              <li>Docker/Podman Containerization</li>
              <li>Hetzner / OVH Setup</li>
              <li>Ansible Automation</li>
            </ul>
          </div>

          {/* Service 2: Database Sovereignty */}
          <div className="group border border-accent p-8 hover:border-foreground transition-colors relative overflow-hidden">
            <div className="absolute top-4 right-4 font-mono text-xs opacity-50">
              [02]
            </div>

            {/* Abstract Image: Database Stack */}
            <div className="w-full h-48 bg-accent/5 mb-8 flex items-center justify-center border-b border-dashed border-accent">
              <div className="relative">
                <div className="w-24 h-6 border border-foreground rounded-[100%] bg-background absolute -top-3 left-0 z-20"></div>
                <div className="w-24 h-6 border border-foreground rounded-[100%] bg-background absolute top-0 left-0 z-10"></div>
                <div className="w-24 h-6 border border-foreground rounded-[100%] bg-background absolute top-3 left-0"></div>
                <div className="w-24 h-16 border-l border-r border-b border-foreground rounded-b-[20px] absolute top-3 left-0 flex items-center justify-center">
                  <span className="font-mono text-[10px] mt-4">SQL</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Database Repatriation</h3>
            <p className="font-mono text-sm opacity-70 leading-relaxed mb-6">
              Exporting data from Supabase or Firebase into standard PostgreSQL
              instances running on encrypted volumes under your own keys.
            </p>
            <ul className="font-mono text-xs space-y-2 list-disc list-inside opacity-60">
              <li>Zero-Downtime Replication</li>
              <li>PostGIS Implementation</li>
              <li>Encrypted-at-rest Storage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 text-center border-t border-accent">
        {/*   <h2 className="text-[5vw] font-serif italic mb-8">"Code is Law."</h2> */}
        <Link
          href="/contact"
          className="font-mono border-b border-foreground pb-1 hover:pb-2 transition-all"
        >
          SCHEDULE_AUDIT()
        </Link>
      </section>

      {/* CSS Utility for Outline Text */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px var(--foreground);
          color: transparent;
        }
      `}</style>
    </div>
  )
}
