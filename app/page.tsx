export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          How much revenue does your{" "}
          <span className="text-[#58a6ff]">cookie banner</span> cost you?
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Embed one script. Instantly see the conversion gap between users who accept cookies and those who reject them — in real euros.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Measuring — $15/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: "Consent Tracking", desc: "Capture accept/reject decisions with timestamps and user segments." },
          { title: "Revenue Attribution", desc: "Map conversion events to consent status and calculate lost revenue." },
          { title: "A/B Banner Testing", desc: "Test different consent UIs and measure their revenue impact." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">/month per site</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited pageviews",
              "Consent funnel dashboard",
              "Revenue impact reports",
              "A/B banner testing",
              "CSV & API export",
              "Email alerts on revenue drops"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the tracking script work?",
              a: "You add a single JS snippet to your site. It listens for consent events from any CMP (Cookiebot, OneTrust, custom), then tracks subsequent conversion events and links them to the user's consent decision."
            },
            {
              q: "Is this GDPR compliant itself?",
              a: "Yes. The script only stores anonymised, aggregated cohort data. No personal data or cross-site identifiers are collected. It is designed to measure compliance costs, not to circumvent compliance."
            },
            {
              q: "Which CMPs and e-commerce platforms are supported?",
              a: "The script works with any CMP that fires a standard consent event. Native integrations exist for Shopify, WooCommerce, and Stripe Checkout for automatic conversion detection."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} CookieRevenue. Built for EU e-commerce &amp; SaaS.
      </footer>
    </main>
  );
}
