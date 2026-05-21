// hero.jsx — Deep-sea immersive canvas: god rays, drifting plankton, rising bubbles, mouse parallax

const { useRef, useEffect, useState } = React;

function HeroCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext("2d");
    let raf = 0;
    let w = 0,h = 0,dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;

    // Particle field — sphere of points
    const N = 240;
    const particles = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1;
      particles.push({
        x0: r * Math.cos(theta) * Math.sin(phi),
        y0: r * Math.sin(theta) * Math.sin(phi),
        z0: r * Math.cos(phi)
      });
    }
    // ambient drifters in background
    const drifters = [];
    for (let i = 0; i < 90; i++) {
      drifters.push({
        x: (Math.random() - 0.5) * 2.4,
        y: (Math.random() - 0.5) * 1.6,
        z: (Math.random() - 0.5) * 2.0,
        vx: (Math.random() - 0.5) * 0.0008,
        vy: (Math.random() - 0.5) * 0.0008
      });
    }

    const resize = () => {
      const rect = cv.getBoundingClientRect();
      w = rect.width;h = rect.height;
      cv.width = w * dpr;cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = cv.getBoundingClientRect();
      mouseRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      mouseRef.current.tx *= 0.0;mouseRef.current.ty *= 0.0;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    const project = (x, y, z) => {
      const cx = w * 0.62;
      const cy = h * 0.45;
      const scale = Math.min(w, h) * 0.42;
      const persp = 2.6;
      const f = persp / (persp - z);
      return { sx: cx + x * scale * f, sy: cy + y * scale * f, f };
    };

    const draw = () => {
      t += 0.004;
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;

      ctx.fillStyle = "#060B14";
      ctx.fillRect(0, 0, w, h);

      const ry = t * 0.6 + mouseRef.current.x * 0.6;
      const rx = -0.25 + mouseRef.current.y * 0.35;
      const cosY = Math.cos(ry),sinY = Math.sin(ry);
      const cosX = Math.cos(rx),sinX = Math.sin(rx);

      const pts = [];
      for (let i = 0; i < N; i++) {
        const p = particles[i];
        const x1 = p.x0 * cosY + p.z0 * sinY;
        const z1 = -p.x0 * sinY + p.z0 * cosY;
        const y1 = p.y0 * cosX - z1 * sinX;
        const z2 = p.y0 * sinX + z1 * cosX;
        const pr = project(x1, y1, z2);
        pts.push({ sx: pr.sx, sy: pr.sy, f: pr.f, z: z2 });
      }

      // connecting lines
      ctx.lineWidth = 0.6;
      const maxDist = Math.min(w, h) * 0.11;
      for (let i = 0; i < N; i++) {
        const a = pts[i];
        if (a.z < -0.4) continue;
        for (let j = i + 1; j < N; j++) {
          const b = pts[j];
          if (b.z < -0.4) continue;
          const dx = a.sx - b.sx,dy = a.sy - b.sy;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const dist = Math.sqrt(d2);
            const alpha = (1 - dist / maxDist) * 0.18 * ((a.f + b.f) * 0.5);
            const isGold = (i * 31 + j) % 17 === 0;
            ctx.strokeStyle = isGold ?
            `rgba(212, 168, 42, ${alpha * 0.9})` :
            `rgba(46, 181, 230, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // points
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const radius = Math.max(0.4, p.f * 1.3);
        const a = Math.max(0, Math.min(1, p.f * 0.9));
        const m = i % 13;
        const color = m === 0 ? `rgba(212, 168, 42, ${a})` :
        m === 1 ? `rgba(46, 181, 230, ${a})` :
        `rgba(242, 246, 250, ${a * 0.85})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
        ctx.fill();
        if (p.z > 0.5) {
          ctx.fillStyle = m === 0 ? `rgba(212, 168, 42, 0.04)` : `rgba(46, 181, 230, 0.06)`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, radius * 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ambient drifters
      for (let i = 0; i < drifters.length; i++) {
        const d = drifters[i];
        d.x += d.vx;d.y += d.vy;
        if (d.x > 1.2 || d.x < -1.2) d.vx *= -1;
        if (d.y > 1.0 || d.y < -1.0) d.vy *= -1;
        const pr = project(d.x, d.y, d.z);
        const a = 0.12 + 0.08 * Math.sin(t * 5 + i);
        ctx.fillStyle = `rgba(242, 246, 250, ${a})`;
        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

// VR/XR HUD overlay — mouse-tracked crosshair + corner brackets + scan readouts
function HeroHUD() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const onMove = (e) => {
      const t = document.querySelector('.hero');
      if (!t) return;
      const r = t.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return (
    <div className="hero-hud" aria-hidden="true">
      {/* corner brackets */}
      <span className="hud-bracket tl" />
      <span className="hud-bracket tr" />
      <span className="hud-bracket bl" />
      <span className="hud-bracket br" />

      {/* top-left readout */}
      <div className="hud-readout tl">
        <span className="hud-dot"></span> SYS · XR_REALTIME
        <span className="hud-line"></span>
        <div>FOV 0.42 RAD  ·  6DOF</div>
        <div>LAT 35.6917°N  LON 139.7300°E</div>
      </div>

      {/* top-right readout */}
      <div className="hud-readout tr">
        <div>REC ◉ <span style={{ color: 'var(--gold)' }}>04:12:09</span></div>
        <div>SIGNAL  ▍▍▍▍▎</div>
        <div>DEPTH  −∞ m</div>
      </div>

      {/* center crosshair tracking mouse */}
      <div className="hud-cross" style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }}>
        <svg viewBox="0 0 120 120" width="100" height="100">
          <circle cx="60" cy="60" r="32" fill="none" stroke="rgba(46,181,230,0.55)" strokeWidth="0.7" />
          <circle cx="60" cy="60" r="2" fill="#2EB5E6" />
          <line x1="60" y1="20" x2="60" y2="38" stroke="rgba(46,181,230,0.7)" strokeWidth="0.6" />
          <line x1="60" y1="82" x2="60" y2="100" stroke="rgba(46,181,230,0.7)" strokeWidth="0.6" />
          <line x1="20" y1="60" x2="38" y2="60" stroke="rgba(46,181,230,0.7)" strokeWidth="0.6" />
          <line x1="82" y1="60" x2="100" y2="60" stroke="rgba(46,181,230,0.7)" strokeWidth="0.6" />
          <text x="64" y="58" fill="rgba(46,181,230,0.7)" fontSize="6" fontFamily="JetBrains Mono, monospace">TRACK</text>
        </svg>
      </div>

      {/* perspective horizon grid (subtle) */}
      <svg className="hud-grid" viewBox="0 0 1000 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hgfade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(46,181,230,0)" />
            <stop offset="0.4" stopColor="rgba(46,181,230,0.18)" />
            <stop offset="1" stopColor="rgba(46,181,230,0.05)" />
          </linearGradient>
        </defs>
        {/* horizon lines (compressed toward top = vanishing) */}
        {[0.18, 0.34, 0.52, 0.7, 0.85].map((y, i) =>
        <line key={i} x1="0" y1={400 * y} x2="1000" y2={400 * y}
        stroke="url(#hgfade)" strokeWidth="0.7" />
        )}
        {/* vanishing-point radials */}
        {Array.from({ length: 17 }).map((_, k) =>
        <line key={k} x1="500" y1="60" x2={k * 65} y2="400"
        stroke="rgba(46,181,230,0.07)" strokeWidth="0.5" />
        )}
      </svg>

      {/* scanning sweep */}
      <div className="hud-scan" />

      {/* bottom-left status — removed: was overlapping with hero-stats */}
    </div>);

}

function Hero({ copy, lang }) {
  const h = copy.hero;
  return (
    <section id="vision" className="hero" data-screen-label="Hero">
      <HeroCanvas />
      <div className="hero-vignette" />
      <HeroHUD />
      <div className="hero-content">
        <div className="reveal in" style={{ marginBottom: '24px' }}>
          <span className="eyebrow">{h.eyebrow}</span>
        </div>
        <h1 className="hero-headline reveal in">
          {h.headline_en.split("\n").map((line, i) =>
          <span key={i} style={{ display: 'block' }}>
              {i === 1 ? <><span className="thin">New </span><span className="it">Realities.</span></> : line}
            </span>
          )}
        </h1>
        <p className="hero-jp hero-jp-pc reveal in">{h.headline_jp}</p>
        <p className="hero-jp hero-jp-sp reveal in">{h.headline_jp_sp}</p>
        <div className="hero-bottom">
          <div className="hero-stats reveal in">
            {h.stats.map((s, i) =>
            <div key={i} className="stat">
                <div className="v">{s.v}</div>
                <div className="l">{s.l}</div>
              </div>
            )}
          </div>
          <div className="hero-scroll">
            <span>{h.scroll}</span>
            <span className="line" />
          </div>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;
window.HeroHUD = HeroHUD;