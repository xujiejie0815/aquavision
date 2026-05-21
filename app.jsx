// app.jsx — root with nav, scroll reveal, and Tweaks (language toggle)

const { useState, useEffect } = React;

function Nav({ copy, lang, setLang, accent, setAccent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const items = [
    ["#vision", copy.nav.vision],
    ["#about", copy.nav.about],
    ["#services", copy.nav.services],
    ["#works", copy.nav.works],
    ["#team", copy.nav.team]
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} style={{ borderColor: "rgb(6, 11, 20)", backgroundColor: "rgb(6, 11, 20)", height: "60px" }}>
        <a href="index.html#vision" className="brand nav-brand-logo" style={{ lineHeight: "37", height: "37px" }}>
          <img src="assets/aquavision_logo_RGB_02_A.jpg" alt="AquaVision" style={{ width: "auto", height: "35px" }} />
        </a>
        <ul className="nav-menu">
          {items.map(([href, label]) =>
            <li key={href}><a href={href} style={{ color: "rgb(239, 243, 247)" }}>{label}</a></li>
          )}
        </ul>
        <div className="nav-right">
          <div className="lang-toggle nav-lang-desktop" role="group" aria-label="Language">
            <button className={lang === 'ja' ? 'active' : ''} onClick={() => setLang('ja')} style={{ backgroundColor: "rgb(7, 12, 21)" }}>JA</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} style={{ color: "rgb(255, 255, 255)" }}>EN</button>
          </div>
          <a href="#contact" className="cta-pill primary nav-cta-desktop" style={{ height: "37px", borderColor: "rgb(20, 203, 245)", color: "rgb(20, 203, 245)" }}>{copy.nav.contact}</a>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="メニュー"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {menuOpen && <div className="mobile-menu-overlay" onClick={close} />}

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu-list">
          {items.map(([href, label]) =>
            <li key={href}><a href={href} onClick={close}>{label}</a></li>
          )}
        </ul>
        <div className="mobile-menu-bottom">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === 'ja' ? 'active' : ''} onClick={() => setLang('ja')}>JA</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button type="button" className="cta-pill primary" onClick={() => { close(); window.__openContactModal?.(); }}>{copy.nav.contact}</button>
        </div>
      </div>
    </>
  );
}

/* ---------------- Scroll Reveal ---------------- */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------------- App ---------------- */
function App() {
  const defaults = window.__TWEAK_DEFAULTS__ || { lang: 'ja', accent: 'aqua' };
  const [t, setTweak] = useTweaks(defaults);
  const lang = t.lang;
  const accent = t.accent || 'aqua';
  const copy = COPY[lang];

  // sync data-accent on html
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  // sync lang on html
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useScrollReveal();

  const setLang = (l) => setTweak('lang', l);
  const setAccent = (a) => setTweak('accent', a);

  return (
    <>
      <Nav copy={copy} lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <Hero copy={copy} lang={lang} />
        <About copy={copy} />
        <Services copy={copy} />
        <Business copy={copy} />
        <Works copy={copy} />
        <Team copy={copy} />
        <News copy={copy} />
        <Partners copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language">
          <TweakRadio label="Lang" value={lang} options={[
          { value: 'ja', label: '日本語' },
          { value: 'en', label: 'English' }]
          } onChange={(v) => setTweak('lang', v)} />
        </TweakSection>
        <TweakSection label="Accent color">
          <TweakRadio label="Tone" value={accent} options={[
          { value: 'aqua', label: 'Aqua' },
          { value: 'violet', label: 'Violet' },
          { value: 'amber', label: 'Amber' },
          { value: 'mint', label: 'Mint' }]
          } onChange={(v) => setTweak('accent', v)} />
        </TweakSection>
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);