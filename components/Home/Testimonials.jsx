
const Testimonials = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg mb-4">What People are saying</h2>
          <p className="text-text-muted">Real outcomes from industry leaders who trust our technological vision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Testimonial 1 */}
          <div className="glass-card p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex text-secondary mb-6">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="font-body-md text-on-surface mb-8 italic">"Otical's integration of custom AI models into our logistics platform reduced operational overhead by 34% within the first quarter."</p>
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-primary/20">
                <img alt="Pankaj Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwQZlcbI6G88S2rOMgNh-r9Xo2i6Up7ajR72u80qkkSFjMRPnqbhX82ujAUSHntO9Apay26Wj0Cvac854SznjjHib74PzfSWLbFwNcJpc5hzxXPdZvIsQ1U5uehi7pglT9lByBx68nY28N2JudrOiGcRjwf6-m0qfCc7WZOlGhgAWXtKLB-XqJSilkj3gxY_EFXV2KhvRxDpqcIIej6gzw6EvKYdtvuURa90rgu99Tjdz7x9zdiSzTeGHnXRPaueCnr9qBDCwXDH0"/>
              </div>
              <div>
                <h5 className="font-button text-on-surface">Pankaj Sharma</h5>
                <p className="text-xs text-text-muted">CTO, TechLogistics Global</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="glass-card p-8 rounded-xl flex flex-col justify-between border-primary/20 bg-primary/5">
            <div>
              <div className="flex text-secondary mb-6">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="font-body-md text-on-surface mb-8 italic">"The level of technical sophistication they bring to web development is unmatched. They don't just build websites; they build high-end digital engines."</p>
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-primary/20">
                <img alt="Sushil Mishra" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6dtsG3dNHrnX5sGlEMgumWCPnHyM2uySrvW_rFALHd1cirXCCxgLKUYLa6JKGf4szMxmAI73qv9XZv5L6F16hc56MQdIdoRhWlHc0QX-AB9mMJGWxZL6TQigZQI64YmaC12chLboNKaqm40_1XGhcqpUvwSvK1PSejk03M_BEWTxcNA9qyvmBQka33lntF6IUyDbAmHfu4SrPWFY2IGjvXeGKzzjaP4Qkqq3P9n5NMgDn-_Ddw4UX_FrE7ewjPbnSymnhLpM9Sg8"/>
              </div>
              <div>
                <h5 className="font-button text-on-surface">Sushil Mishra</h5>
                <p className="text-xs text-text-muted">Head of Engineering, FinCore Systems</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="glass-card p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex text-secondary mb-6">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="font-body-md text-on-surface mb-8 italic">"From the first consultation to final deployment, Otical exceeded our expectations. Their AI strategy is visionary yet grounded in practical utility."</p>
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-primary/20">
                <img alt="Ananya Gupta" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXEyeS-rqyIXng-Q0KKl888MN7sqk0_6XJil5hWToiFlF_Ab_WMYy6usD2EK5F2hwAjW_-8kOmAcNP3aIhXSBqRoUQDufQfWspWfut4Oz5bgSXTmq151h_vH0BAw1c02VGLDH9hQVBb6FlbA38N7frXGzWxfREB3DiUVDdMQ1k5hr0uiAkcUQTZ93uueNAYFfhmmCxhFA4zfz3A5GTPXG6s3Ew2thyGi2oUz0w8O8qQ7wVqvzx0R93UVkO-tiz1HWRkwTM8FqlRcA"/>
              </div>
              <div>
                <h5 className="font-button text-on-surface">Ananya Gupta</h5>
                <p className="text-xs text-text-muted">Founder, NeoRetail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
