
const Workflow = () => {
  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 opacity-10">
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-4">Streamline Your Business with Our Expertise</h2>
            <p className="text-text-muted">A meticulously engineered workflow designed to minimize friction and maximize impact.</p>
          </div>
          <div className="font-label-mono text-primary border border-primary/20 px-4 py-2 rounded">
            METHODOLOGY v4.0
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="font-display-lg text-white/5 absolute -top-10 -left-4 select-none">01</div>
            <div className="pt-8">
              <h4 className="font-button text-xl text-primary mb-3">Consultation</h4>
              <p className="text-sm text-text-muted">Deep-dive into your business goals, technical bottlenecks, and market opportunities.</p>
            </div>
            <div className="h-1 w-full bg-white/5 mt-6 group-hover:bg-primary transition-colors"></div>
          </div>
          {/* Step 2 */}
          <div className="relative group">
            <div className="font-display-lg text-white/5 absolute -top-10 -left-4 select-none">02</div>
            <div className="pt-8">
              <h4 className="font-button text-xl text-primary mb-3">Planning</h4>
              <p className="text-sm text-text-muted">Strategic blueprinting, technical stack selection, and agile roadmap development.</p>
            </div>
            <div className="h-1 w-full bg-white/5 mt-6 group-hover:bg-primary transition-colors"></div>
          </div>
          {/* Step 3 */}
          <div className="relative group">
            <div className="font-display-lg text-white/5 absolute -top-10 -left-4 select-none">03</div>
            <div className="pt-8">
              <h4 className="font-button text-xl text-primary mb-3">Development</h4>
              <p className="text-sm text-text-muted">Rapid prototyping and iterative development using our high-end proprietary toolset.</p>
            </div>
            <div className="h-1 w-full bg-white/5 mt-6 group-hover:bg-primary transition-colors"></div>
          </div>
          {/* Step 4 */}
          <div className="relative group">
            <div className="font-display-lg text-white/5 absolute -top-10 -left-4 select-none">04</div>
            <div className="pt-8">
              <h4 className="font-button text-xl text-primary mb-3">Support</h4>
              <p className="text-sm text-text-muted">Continuous optimization, security monitoring, and scaling as your user base grows.</p>
            </div>
            <div className="h-1 w-full bg-white/5 mt-6 group-hover:bg-primary transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow;
