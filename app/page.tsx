"use client";

import { useState } from "react";

const Arrow = () => <span aria-hidden="true">→</span>;

const BuildingIcon = ({ kind = "building" }: { kind?: "building" | "home" | "bank" }) => (
  <span className={`line-icon ${kind}`} aria-hidden="true">
    {kind === "home" ? "⌂" : kind === "bank" ? "▥" : "▥"}
  </span>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="VERUM Real Estate home">
            <span className="brand-mark">V</span>
            <span className="brand-name">VERUM<small>REAL ESTATE</small></span>
          </a>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a>
            <a href="#investments" onClick={() => setMenuOpen(false)}>Investments</a>
            <a href="#funding" onClick={() => setMenuOpen(false)}>Loans &amp; Funds</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </div>
          <a className="button button-outline nav-cta" href="mailto:hello@verumrealestate.com?subject=Start%20a%20conversation">
            Start a conversation
          </a>
        </nav>

        <div className="hero-content shell">
          <p className="eyebrow">Integrity in every investment</p>
          <h1>Real Estate Built<br />for What Comes Next.</h1>
          <p className="hero-copy">
            Fix &amp; flips. Rentals. New construction. Investment
            partnerships and financing—all under one trusted name.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#properties">Explore opportunities</a>
            <a className="text-link" href="#funding">Find funding <Arrow /></a>
          </div>
        </div>
        <div className="hero-signature shell">
          <span /> <p>Real assets · Real value · Real trust</p> <span />
        </div>
      </section>

      <section className="properties section-light" id="properties">
        <div className="shell">
          <div className="section-heading">
            <span className="diamond">◇</span>
            <h2>One Vision. Multiple Ways to Build Value.</h2>
            <p>Disciplined real estate strategies designed for today—and built to endure.</p>
          </div>
          <div className="property-grid">
            {[
              {
                title: "Fix & Flips",
                copy: "Strategic acquisitions. Thoughtful renovations. Stronger exits.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=88",
              },
              {
                title: "Rental Properties",
                copy: "Income-producing properties built for enduring value.",
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=88",
              },
              {
                title: "New Construction",
                copy: "Ground-up development shaped by disciplined execution.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=88",
              },
            ].map((item) => (
              <article className="property-card" key={item.title}>
                <img src={item.image} alt={`Modern ${item.title.toLowerCase()} property`} />
                <div className="property-content">
                  <h3><BuildingIcon />{item.title}</h3>
                  <p>{item.copy}</p>
                  <a href="mailto:hello@verumrealestate.com?subject=Property%20opportunity">
                    Learn more <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="investments" id="investments">
        <div className="investment-copy">
          <div className="investment-inner">
            <p className="eyebrow">For investors</p>
            <h2>Put Your Capital Behind<br />Real Opportunity.</h2>
            <p>
              Discover how VERUM identifies, improves and develops real estate—and
              how qualified investors can partner with us.
            </p>
            <div className="benefits">
              <div><span>◇</span><p>Asset-backed<br />opportunities</p></div>
              <div><span>⌘</span><p>Clear partnership<br />pathways</p></div>
              <div><span>↗</span><p>Disciplined project<br />strategy</p></div>
            </div>
            <a className="button button-gold" href="mailto:invest@verumrealestate.com?subject=Investment%20opportunities">
              View investment opportunities
            </a>
          </div>
        </div>
        <div className="investment-visual">
          <div className="process">
            <div><b>◯</b><span>Acquire</span></div><i />
            <div><b>⚙</b><span>Improve</span></div><i />
            <div><b>▥</b><span>Build</span></div>
          </div>
        </div>
      </section>

      <section className="funding section-light" id="funding">
        <div className="shell">
          <div className="section-heading compact">
            <span className="diamond">◇</span>
            <h2>Funding for the<br />Property—and the Plan.</h2>
          </div>
          <div className="funding-grid">
            <article className="funding-card">
              <BuildingIcon kind="bank" />
              <div>
                <h3>Investor Loans &amp; Funds</h3>
                <p>Financing for fix-and-flip projects and 15–30 year long-term property loans.</p>
                <a className="button button-gold" href="mailto:funding@verumrealestate.com?subject=Investor%20funding%20request">Request investor funding</a>
              </div>
            </article>
            <article className="funding-card">
              <BuildingIcon kind="home" />
              <div>
                <h3>Home Loans &amp; Refinancing</h3>
                <p>Financing for primary home purchases and refinancing.</p>
                <a className="button button-gold" href="mailto:funding@verumrealestate.com?subject=Home%20loan%20conversation">Discuss my home loan</a>
              </div>
            </article>
          </div>
          <div className="conversation-strip">
            <span>♢</span> One conversation. The right path forward.
          </div>
        </div>
      </section>

      <footer id="about">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">V</span>
              <span className="brand-name">VERUM<small>REAL ESTATE</small></span>
            </a>
            <p>Built on integrity.<br />Focused on value.</p>
          </div>
          <div>
            <h4>Real Estate</h4>
            <a href="#properties">Fix &amp; Flips</a><a href="#properties">Rental Properties</a><a href="#properties">New Construction</a>
          </div>
          <div>
            <h4>Investors</h4>
            <a href="#investments">Investment Opportunities</a><a href="#investments">Partnership Approach</a><a href="#investments">Our Process</a>
          </div>
          <div>
            <h4>Financing</h4>
            <a href="#funding">Investor Loans &amp; Funds</a><a href="#funding">Home Loans</a><a href="#funding">How It Works</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About VERUM</a><a href="#about">Our Approach</a><a href="mailto:hello@verumrealestate.com">Get in Touch</a>
          </div>
        </div>
        <div className="shell footer-cta">
          <p><span>◯</span> Let&apos;s build what comes next.<small>Start a conversation today.</small></p>
          <a className="button button-outline" href="mailto:hello@verumrealestate.com?subject=Start%20a%20conversation">Start a conversation</a>
        </div>
        <div className="shell legal">
          <span>© 2026 VERUM Real Estate. All rights reserved.</span>
          <span>Privacy Policy &nbsp;&nbsp; Terms of Use &nbsp;&nbsp; NMLS Consumer Access</span>
        </div>
      </footer>
    </main>
  );
}
