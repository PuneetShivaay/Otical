
const FeatureSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg mb-4">Build, Launch, and Scale Your Digital Products</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Comprehensive solutions tailored to the needs of modern enterprises, from neural network architecture to front-end excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Service Card 1 */}
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="scan-line"></div>
            <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">AI &amp; Machine Learning</h3>
            <p className="text-text-muted mb-6">Integrating sophisticated LLMs and predictive analytics into your core business logic for smarter automation.</p>
            <ul className="space-y-3 font-label-mono text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Natural Language Processing</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Custom Model Training</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> AI-Driven Insights</li>
            </ul>
          </div>
          {/* Service Card 2 */}
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="scan-line" style={{animationDelay: "1s"}}></div>
            <div className="mb-6 inline-flex p-3 rounded-lg bg-secondary/10 text-secondary">
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Full-Stack Development</h3>
            <p className="text-text-muted mb-6">Enterprise-grade web applications built with high-performance frameworks and scalable cloud architectures.</p>
            <ul className="space-y-3 font-label-mono text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Microservices Arch</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> React &amp; Next.js Experts</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Real-time Data Viz</li>
            </ul>
          </div>
          {/* Service Card 3 */}
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="scan-line" style={{animationDelay: "2s"}}></div>
            <div className="mb-6 inline-flex p-3 rounded-lg bg-tertiary-container/10 text-tertiary-container">
              <span className="material-symbols-outlined text-3xl">cloud_done</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Cloud Infrastructure</h3>
            <p className="text-text-muted mb-6">Optimizing your digital foundation for peak performance, security, and global accessibility.</p>
            <ul className="space-y-3 font-label-mono text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> DevOps &amp; CI/CD</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> Zero Trust Security</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> AWS/Azure/GCP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection;
