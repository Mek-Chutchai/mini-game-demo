// All SVG art used by the scene. Each piece is a stylized cartoon shape
// drawn with ink outlines + soft fills, evoking the cozy reference art.

const Ink = ({ d, w = 2.4, fill = "none", opacity = 1, ...rest }) => (
  <path d={d} fill={fill} stroke="#3a2a1f" strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" opacity={opacity} {...rest} />
);

/* ---------- BACKGROUND LAYERS ---------- */

// Sky + far sea gradient + soft clouds
const SkyLayer = () => (
  <svg viewBox="0 0 400 380" preserveAspectRatio="xMidYMid slice" className="absolute inset-x-0 top-0 w-full h-[42%]" aria-hidden="true">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#cfeef7" />
        <stop offset="55%" stopColor="#86c8de" />
        <stop offset="100%" stopColor="#4a9dc3" />
      </linearGradient>
      <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3f97c2" />
        <stop offset="100%" stopColor="#2d6d99" />
      </linearGradient>
    </defs>
    <rect width="400" height="380" fill="url(#skyGrad)" />
    {/* sea ripples */}
    {[60, 110, 150, 200, 240, 290, 330].map((y, i) => (
      <g key={i} opacity={0.55 - i * 0.05} className="anim-ripple" style={{ animationDelay: `${i * 0.4}s` }}>
        <path d={`M${10 + (i % 2) * 14} ${y} q14 -5 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0`}
          stroke="#cfeef7" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    ))}
    {/* horizon line break */}
    <path d="M0 250 Q 80 246 200 252 T 400 248 L 400 380 L 0 380 Z" fill="url(#seaGrad)" opacity="0.0" />
  </svg>
);

// Distant islands left + right with tree silhouettes
const IslandsLayer = () => (
  <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="absolute left-0 right-0 top-[2%] w-full h-[34%]" aria-hidden="true">
    {/* left island */}
    <g>
      <path d="M-10 70 Q 10 55 35 60 Q 60 50 78 66 Q 86 76 70 86 Q 40 96 -10 88 Z" fill="#6fa746" />
      <Ink d="M-10 70 Q 10 55 35 60 Q 60 50 78 66 Q 86 76 70 86 Q 40 96 -10 88" w="2.2" />
      {/* foliage */}
      <circle cx="10" cy="60" r="18" fill="#8fc05a" />
      <circle cx="28" cy="50" r="16" fill="#a4d06d" />
      <circle cx="46" cy="58" r="18" fill="#8fc05a" />
      <Ink d="M-8 60 q 8 -22 26 -16 q 6 -14 22 -10 q 14 4 14 22" w="2.2" />
      {/* small orange fruit */}
      <circle cx="2" cy="86" r="3" fill="#f59e3b" />
      <Ink d="M2 86 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0" w="1.4" />
    </g>
    {/* speed-limit sign post (matches reference whimsy) */}
    <g transform="translate(40,76)">
      <rect x="-1.4" y="0" width="2.8" height="40" fill="#8b5a36" />
      <Ink d="M-1.4 0 h2.8 v40 h-2.8 z" w="1.6" fill="#8b5a36" />
      <circle cx="0" cy="-2" r="11" fill="#fff8ec" />
      <circle cx="0" cy="-2" r="11" fill="none" stroke="#d8493a" strokeWidth="3" />
      <text x="0" y="2" textAnchor="middle" fontFamily="Sniglet, sans-serif" fontWeight="800" fontSize="10" fill="#3a2a1f">30</text>
    </g>
    {/* right island */}
    <g transform="translate(330,60)">
      <path d="M-30 30 Q -10 18 12 24 Q 36 18 56 32 Q 66 44 46 52 Q 14 60 -30 50 Z" fill="#6fa746" />
      <Ink d="M-30 30 Q -10 18 12 24 Q 36 18 56 32 Q 66 44 46 52 Q 14 60 -30 50" w="2.2" />
      <circle cx="0" cy="20" r="14" fill="#8fc05a" />
      <circle cx="20" cy="14" r="14" fill="#a4d06d" />
      <Ink d="M-12 22 q 6 -16 22 -12 q 14 -2 18 12" w="2.2" />
    </g>
    {/* extra rock in water */}
    <ellipse cx="240" cy="170" rx="22" ry="6" fill="#9a9079" />
    <Ink d="M218 170 q 22 -16 44 0 q -22 8 -44 0" w="2" />
  </svg>
);

// Wooden fence stretching across the mid-band, with notes + lamp + boxes
const FenceLayer = () => (
  <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="absolute left-0 right-0 top-[30%] w-full h-[22%]" aria-hidden="true">
    <defs>
      <linearGradient id="plank" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d6a978" />
        <stop offset="60%" stopColor="#b78054" />
        <stop offset="100%" stopColor="#8b5a36" />
      </linearGradient>
    </defs>
    {/* ground strip behind fence */}
    <rect x="0" y="100" width="400" height="60" fill="#8fc05a" />
    {/* rear bushes peeking */}
    <g>
      <circle cx="380" cy="98" r="36" fill="#6fa746" />
      <circle cx="354" cy="106" r="20" fill="#8fc05a" />
      <Ink d="M340 110 q 14 -22 38 -14 q 12 -10 28 -2" w="2.2" />
    </g>
    {/* fence planks */}
    {Array.from({ length: 14 }).map((_, i) => {
      const x = 30 + i * 22;
      return (
        <g key={i}>
          <path d={`M${x} 110 V52 q0 -10 10 -10 q10 0 10 10 V110 Z`} fill="url(#plank)" />
          <Ink d={`M${x} 110 V52 q0 -10 10 -10 q10 0 10 10 V110`} w="1.8" />
          {/* knots & grain */}
          <Ink d={`M${x + 5} 70 q 4 8 0 16`} w="1.2" opacity="0.7" />
          <circle cx={x + 12} cy={86} r="1.6" fill="#7a4a2a" />
        </g>
      );
    })}
    {/* horizontal cross beam (subtle) */}
    <rect x="20" y="86" width="360" height="5" fill="#8b5a36" opacity="0.35" />

    {/* chick peeking over fence */}
    <g transform="translate(116, 26)">
      <ellipse cx="0" cy="16" rx="15" ry="13" fill="#fff8ec" />
      <Ink d="M-15 16 a15 13 0 1 0 30 0 a15 13 0 1 0 -30 0" w="2.2" />
      {/* hair tuft */}
      <Ink d="M-2 3 q 1 -3 3 -1 q 2 -3 3 1" w="1.6" />
      {/* eyes */}
      <ellipse cx="-5" cy="14" rx="1.6" ry="2" fill="#3a2a1f" />
      <ellipse cx="5" cy="14" rx="1.6" ry="2" fill="#3a2a1f" />
      {/* beak */}
      <path d="M-2 18 l2 3 l2 -3 z" fill="#f59e3b" />
      <Ink d="M-2 18 l2 3 l2 -3 z" w="1.4" />
      {/* tiny cheek dots */}
      <circle cx="-9" cy="18" r="1.6" fill="#ffb4c0" opacity="0.85" />
      <circle cx="9" cy="18" r="1.6" fill="#ffb4c0" opacity="0.85" />
    </g>

    {/* paper notes on fence */}
    <g transform="translate(170,76) rotate(-6)">
      <rect x="-12" y="-10" width="24" height="20" fill="#fff8ec" />
      <Ink d="M-12 -10 h24 v20 h-24 z" w="1.6" />
      <Ink d="M-8 -4 h16 M-8 0 h12 M-8 4 h14" w="1.2" opacity="0.6" />
    </g>

    {/* hanging lamp */}
    <g transform="translate(208, 70)">
      <Ink d="M0 -20 V -2" w="1.6" />
      <circle cx="0" cy="6" r="9" fill="#ffd66b" />
      <Ink d="M-9 6 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0" w="1.8" />
      <Ink d="M-5 4 q 5 -6 10 0" w="1.4" opacity="0.6" />
      {/* glow */}
      <circle cx="0" cy="6" r="18" fill="#ffe27a" opacity="0.25" />
    </g>

    {/* stacked cardboard boxes */}
    <g transform="translate(256, 38)">
      {/* shadow */}
      <ellipse cx="14" cy="58" rx="22" ry="4" fill="#3a2a1f" opacity="0.18" />
      {/* bottom */}
      <rect x="-4" y="36" width="36" height="20" fill="#d8a673" />
      <Ink d="M-4 36 h36 v20 h-36 z" w="1.8" />
      <Ink d="M-4 42 h36" w="1.4" opacity="0.6" />
      <rect x="6" y="44" width="6" height="8" fill="#fff8ec" />
      <Ink d="M6 44 h6 v8 h-6 z" w="1.4" />
      <rect x="20" y="44" width="6" height="8" fill="#fff8ec" />
      <Ink d="M20 44 h6 v8 h-6 z" w="1.4" />
      {/* middle */}
      <rect x="-2" y="18" width="32" height="20" fill="#e2b685" />
      <Ink d="M-2 18 h32 v20 h-32 z" w="1.8" />
      <Ink d="M-2 24 h32" w="1.4" opacity="0.6" />
      <rect x="6" y="26" width="6" height="8" fill="#fff8ec" />
      <Ink d="M6 26 h6 v8 h-6 z" w="1.4" />
      {/* top */}
      <rect x="0" y="2" width="28" height="18" fill="#d8a673" />
      <Ink d="M0 2 h28 v18 h-28 z" w="1.8" />
      <Ink d="M0 8 h28" w="1.4" opacity="0.6" />
      {/* MAX bubble */}
      <g transform="translate(28,-8)">
        <rect x="-2" y="-10" width="28" height="14" rx="7" fill="#fff8ec" />
        <Ink d="M-2 -10 h28 a7 7 0 0 1 0 14 h-28 a7 7 0 0 1 0 -14 z" w="1.6" />
        <path d="M4 4 l-4 6 l8 -4 z" fill="#fff8ec" />
        <Ink d="M4 4 l-4 6 l8 -4" w="1.6" />
        <text x="12" y="0" textAnchor="middle" fontFamily="Sniglet" fontWeight="800" fontSize="9" fill="#3a2a1f">MAX</text>
      </g>
    </g>

    {/* leafy plants at fence base */}
    <g transform="translate(230,100)">
      <path d="M0 0 q -4 -10 -10 -12 q 6 -2 12 6 q 6 -8 12 -6 q -6 2 -10 12 z" fill="#6fa746" />
      <Ink d="M0 0 q -4 -10 -10 -12 q 6 -2 12 6 q 6 -8 12 -6 q -6 2 -10 12" w="1.6" />
    </g>
  </svg>
);

// Large left bush + right awning / shop edge
const FoliageLayer = () => (
  <>
    {/* big left bush */}
    <svg viewBox="0 0 200 360" preserveAspectRatio="xMinYMid meet" className="absolute left-0 top-[3%] w-[34%] h-[60%] pointer-events-none" aria-hidden="true">
      <g>
        <circle cx="40" cy="60" r="56" fill="#6fa746" />
        <circle cx="90" cy="40" r="46" fill="#7eb455" />
        <circle cx="20" cy="120" r="60" fill="#7eb455" />
        <circle cx="70" cy="140" r="56" fill="#8fc05a" />
        <circle cx="30" cy="200" r="58" fill="#6fa746" />
        <circle cx="80" cy="220" r="46" fill="#8fc05a" />
        <circle cx="20" cy="280" r="50" fill="#7eb455" />
        <Ink d="M-10 50 q 30 -40 80 -20 q 30 -20 70 10 q 20 30 -10 70 q 30 30 0 70 q 20 40 -20 60 q 20 30 -10 60 q -20 30 -60 20 q -40 -10 -50 -60 q -20 -30 0 -80 q -20 -50 10 -130 z" w="2.4" />
        {/* shading dots */}
        <circle cx="60" cy="70" r="3" fill="#5a8c38" />
        <circle cx="40" cy="160" r="3" fill="#5a8c38" />
        <circle cx="70" cy="250" r="3" fill="#5a8c38" />
      </g>
    </svg>

    {/* right side shop awning + tiled wall */}
    <svg viewBox="0 0 200 460" preserveAspectRatio="xMaxYMid meet" className="absolute right-0 top-[1%] w-[28%] h-[62%] pointer-events-none" aria-hidden="true">
      {/* big tree top right */}
      <g>
        <circle cx="160" cy="40" r="60" fill="#7eb455" />
        <circle cx="120" cy="20" r="40" fill="#8fc05a" />
        <circle cx="180" cy="80" r="50" fill="#6fa746" />
        <Ink d="M80 30 q 30 -40 80 -20 q 40 0 40 60 q 0 50 -60 40 q -50 0 -60 -40 q -10 -20 0 -40 z" w="2.4" />
      </g>
      {/* shop post + awning */}
      <g>
        <rect x="84" y="40" width="14" height="80" fill="#b78054" />
        <Ink d="M84 40 h14 v80 h-14 z" w="2" />
        <path d="M70 120 L 200 120 L 200 200 Q 140 220 70 200 Z" fill="#8a4ea3" />
        <Ink d="M70 120 L 200 120 L 200 200 Q 140 220 70 200 Z" w="2.4" />
        {/* scallop edge */}
        <path d="M70 200 q 14 14 28 0 q 14 14 28 0 q 14 14 28 0 q 14 14 28 0 q 14 14 18 0" fill="#8a4ea3" />
        <Ink d="M70 200 q 14 14 28 0 q 14 14 28 0 q 14 14 28 0 q 14 14 28 0 q 14 14 18 0" w="2.4" />
      </g>
      {/* white tiled wall behind */}
      <g>
        <rect x="120" y="200" width="80" height="220" fill="#fff8ec" />
        <Ink d="M120 200 v220" w="2.4" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="120" y1={210 + i * 22} x2="200" y2={210 + i * 22} stroke="#cdc5b4" strokeWidth="1.4" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`v${i}`} x1={132 + i * 14} y1="200" x2={132 + i * 14} y2="420" stroke="#cdc5b4" strokeWidth="1.2" opacity="0.6" />
        ))}
      </g>
      {/* chalkboard menu */}
      <g transform="translate(132, 250)">
        <rect x="0" y="0" width="64" height="74" rx="4" fill="#3b6e4a" />
        <Ink d="M0 0 h64 v74 h-64 z" w="2.2" />
        <text x="6" y="14" fontFamily="Sniglet" fontWeight="800" fontSize="9" fill="#fff8ec">menu</text>
        <text x="6" y="28" fontFamily="Quicksand" fontWeight="700" fontSize="8" fill="#fff8ec">coffee</text>
        <text x="6" y="40" fontFamily="Quicksand" fontWeight="700" fontSize="8" fill="#fff8ec">tea</text>
        <text x="6" y="52" fontFamily="Quicksand" fontWeight="700" fontSize="8" fill="#fff8ec">cookies</text>
        <text x="6" y="64" fontFamily="Quicksand" fontWeight="700" fontSize="8" fill="#fff8ec">cake</text>
        {/* tiny cup icon */}
        <g transform="translate(46, 56)">
          <path d="M0 0 h10 v6 q -5 4 -10 0 z" fill="#fff8ec" />
          <path d="M0 -2 q 5 -4 10 0" stroke="#fff8ec" strokeWidth="1" fill="none" />
        </g>
      </g>
    </svg>
  </>
);

// Wooden deck on right (sits under the awning/shop)
const DeckLayer = () => (
  <svg viewBox="0 0 400 240" preserveAspectRatio="xMaxYMin meet"
       className="absolute right-0 top-[44%] w-[58%] h-[22%] pointer-events-none" aria-hidden="true">
    <defs>
      <linearGradient id="deckWood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d6a978" />
        <stop offset="100%" stopColor="#a87445" />
      </linearGradient>
    </defs>
    {/* shadow on grass */}
    <path d="M40 188 L 400 168 L 400 200 L 40 220 Z" fill="#3a2a1f" opacity="0.18" />
    {/* deck top surface — receding into right edge */}
    <path d="M60 30 L 400 0 L 400 200 L 40 220 Z" fill="url(#deckWood)" />
    <Ink d="M60 30 L 400 0 L 400 200 L 40 220 Z" w="2.4" />
    {/* plank lines (perspective) */}
    {[60, 92, 124, 156, 188].map((y, i) => (
      <line key={i} x1="46" y1={y} x2="400" y2={y - 18} stroke="#8b5a36" strokeWidth="1.6" opacity="0.7" />
    ))}
    {/* edge highlight */}
    <path d="M60 30 L 400 0" stroke="#fff8ec" strokeWidth="1.2" opacity="0.45" />
    {/* front facet */}
    <path d="M40 220 L 400 200 L 400 214 L 40 232 Z" fill="#8b5a36" opacity="0.55" />
  </svg>
);

// Grass + dirt path + stone path
const GroundLayer = () => (
  <svg viewBox="0 0 400 420" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 w-full h-[68%]" aria-hidden="true">
    <defs>
      <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a4d06d" />
        <stop offset="100%" stopColor="#7fb84a" />
      </linearGradient>
    </defs>
    <rect width="400" height="420" fill="url(#grassGrad)" />

    {/* organic dirt patches — irregular blobs, soft edges, subtle */}
    <g opacity="0.85">
      <path d="M70 70 Q 30 60 50 90 Q 30 120 90 130 Q 160 140 240 122 Q 320 110 330 80 Q 320 50 240 56 Q 160 50 70 70 Z"
            fill="#d9c79b" />
      <path d="M70 70 Q 30 60 50 90 Q 30 120 90 130 Q 160 140 240 122 Q 320 110 330 80 Q 320 50 240 56 Q 160 50 70 70 Z"
            fill="none" stroke="#b89e6a" strokeWidth="1.4" opacity="0.5" />
    </g>
    <g opacity="0.7">
      <path d="M80 220 Q 30 210 60 250 Q 50 290 130 296 Q 220 304 280 280 Q 310 260 280 230 Q 230 210 160 214 Q 100 216 80 220 Z"
            fill="#d9c79b" />
    </g>

    {/* sprinkle pink petals */}
    {Array.from({ length: 32 }).map((_, i) => {
      const x = (i * 53) % 400 + (i % 3) * 7;
      const y = 90 + (i * 29) % 310;
      return <circle key={i} cx={x} cy={y} r="1.6" fill="#ff9fb6" opacity="0.85" />;
    })}
    {/* tiny grass tufts */}
    {Array.from({ length: 36 }).map((_, i) => {
      const x = (i * 37) % 400;
      const y = 30 + (i * 23) % 370;
      return (
        <path key={`g${i}`} d={`M${x} ${y} q 1 -4 0 -8 M${x + 2} ${y} q 0 -4 -1 -7`} stroke="#5a8c38" strokeWidth="1.2" fill="none" opacity="0.6" />
      );
    })}

    {/* stone path bottom-right — rounded fieldstones */}
    <g>
      {[
        [330, 250, 56, 38, -6],
        [270, 286, 50, 32, 6],
        [360, 310, 50, 32, 10],
        [220, 318, 50, 32, -10],
        [310, 354, 60, 38, 4],
        [180, 366, 46, 30, 14],
        [260, 396, 56, 34, -4],
      ].map(([cx, cy, rx, ry, rot], i) => (
        <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot})`}>
          <ellipse cx="0" cy="3" rx={rx} ry={ry} fill="#3a2a1f" opacity="0.18" />
          <ellipse cx="0" cy="0" rx={rx} ry={ry} fill="#cdc5b4" />
          <Ink d={`M${-rx} 0 a${rx} ${ry} 0 1 0 ${rx * 2} 0 a${rx} ${ry} 0 1 0 ${-rx * 2} 0`} w="1.8" />
          <path d={`M${-rx * 0.6} ${-ry * 0.45} q ${rx * 0.4} ${-ry * 0.2} ${rx * 0.9} 0`} stroke="#fff8ec" strokeWidth="1" fill="none" opacity="0.55" />
        </g>
      ))}
    </g>

    {/* single round stone under food bowl */}
    <g transform="translate(110, 308)">
      <ellipse cx="0" cy="4" rx="64" ry="22" fill="#3a2a1f" opacity="0.2" />
      <ellipse cx="0" cy="0" rx="64" ry="22" fill="#cdc5b4" />
      <Ink d="M-64 0 a64 22 0 1 0 128 0 a64 22 0 1 0 -128 0" w="1.8" />
      <path d="M-42 -12 q 34 -8 68 0" stroke="#fff8ec" strokeWidth="1" fill="none" opacity="0.5" />
    </g>
  </svg>
);

/* ---------- INTERACTIVE OBJECT ART ---------- */

const TreeArt = () => (
  <svg viewBox="0 0 80 100" className="obj-art w-full h-auto block" aria-hidden="true">
    {/* pot */}
    <path d="M22 60 L 58 60 L 54 92 Q 40 96 26 92 Z" fill="#c97a4b" />
    <Ink d="M22 60 L 58 60 L 54 92 Q 40 96 26 92 Z" w="2" />
    <rect x="18" y="56" width="44" height="8" rx="2" fill="#d8895c" />
    <Ink d="M18 56 h44 v8 h-44 z" w="2" />
    {/* leaves */}
    <g className="anim-sway" style={{ transformOrigin: "40px 58px" }}>
      <circle cx="40" cy="44" r="10" fill="#7eb455" />
      <circle cx="30" cy="40" r="9" fill="#8fc05a" />
      <circle cx="50" cy="40" r="9" fill="#6fa746" />
      <circle cx="34" cy="30" r="7" fill="#8fc05a" />
      <circle cx="46" cy="30" r="7" fill="#a4d06d" />
      <Ink d="M20 42 q 6 -16 20 -14 q 14 -2 20 14 q 0 12 -20 14 q -20 -2 -20 -14 z" w="2" />
      {/* stem */}
      <Ink d="M40 48 V58" w="1.6" />
      {/* tiny flower */}
      <circle cx="46" cy="22" r="3" fill="#ff9fb6" />
      <Ink d="M46 22 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0" w="1.4" />
      <circle cx="46" cy="22" r="1" fill="#fff8ec" />
    </g>
    {/* dirt */}
    <ellipse cx="40" cy="60" rx="18" ry="3" fill="#7a4a2a" />
  </svg>
);

const BallArt = () => (
  <svg viewBox="0 0 60 60" className="obj-art w-full h-auto block" aria-hidden="true">
    <circle cx="30" cy="34" r="6" fill="#3a2a1f" opacity="0.18" />
    <circle cx="30" cy="30" r="20" fill="#fff8ec" />
    <Ink d="M30 30 m-20 0 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0" w="2" />
    <path d="M14 24 q 16 6 32 0" stroke="#d8493a" strokeWidth="1.8" fill="none" />
    <path d="M14 36 q 16 -6 32 0" stroke="#d8493a" strokeWidth="1.8" fill="none" />
    {/* stitches */}
    {[18, 22, 26, 34, 38, 42].map((x) => (
      <line key={x} x1={x} y1="22" x2={x} y2="26" stroke="#d8493a" strokeWidth="1" />
    ))}
    {[18, 22, 26, 34, 38, 42].map((x) => (
      <line key={`b${x}`} x1={x} y1="34" x2={x} y2="38" stroke="#d8493a" strokeWidth="1" />
    ))}
    {/* highlight */}
    <ellipse cx="22" cy="22" rx="4" ry="2" fill="#fff" opacity="0.7" />
  </svg>
);

const BalloonArt = () => (
  <svg viewBox="0 0 80 160" className="obj-art w-full h-auto block" aria-hidden="true">
    {/* base disk */}
    <ellipse cx="40" cy="150" rx="14" ry="3" fill="#3a2a1f" opacity="0.25" />
    <ellipse cx="40" cy="148" rx="12" ry="3" fill="#3a2a1f" />
    <Ink d="M40 148 m-12 0 a12 3 0 1 0 24 0 a12 3 0 1 0 -24 0" w="1.6" />
    {/* string */}
    <path d="M40 148 Q 38 110 42 70" stroke="#3a2a1f" strokeWidth="1.6" fill="none" />
    {/* balloon body */}
    <ellipse cx="42" cy="46" rx="26" ry="30" fill="#ffd66b" />
    <Ink d="M42 46 m-26 0 a26 30 0 1 0 52 0 a26 30 0 1 0 -52 0" w="2.4" />
    {/* knot */}
    <path d="M40 76 l -4 6 l 8 0 z" fill="#ffd66b" />
    <Ink d="M40 76 l -4 6 l 8 0 z" w="2" />
    {/* highlight */}
    <ellipse cx="32" cy="32" rx="6" ry="10" fill="#fff" opacity="0.5" />
  </svg>
);

const MatArt = () => (
  <svg viewBox="0 0 220 110" className="obj-art w-full h-auto block" aria-hidden="true">
    {/* perspective mat - skewed quad with blue/white stripes */}
    <defs>
      <clipPath id="matClip">
        <path d="M10 30 L 210 10 L 200 90 L 0 100 Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#matClip)">
      <rect x="0" y="0" width="220" height="110" fill="#fff8ec" />
      {[8, 36, 64, 92].map((y, i) => (
        <path key={i} d={`M-10 ${y} L 230 ${y - 8} L 230 ${y + 14} L -10 ${y + 22} Z`} fill="#7eb6c9" />
      ))}
    </g>
    <Ink d="M10 30 L 210 10 L 200 90 L 0 100 Z" w="2.4" />
    {/* fringe edge */}
    {Array.from({ length: 18 }).map((_, i) => (
      <line key={i} x1={10 + i * 11} y1={30 + i * -1} x2={8 + i * 11} y2={24 + i * -1} stroke="#3a2a1f" strokeWidth="1.4" />
    ))}
  </svg>
);

const CushionArt = () => (
  <svg viewBox="0 0 100 80" className="obj-art w-full h-auto block" aria-hidden="true">
    <ellipse cx="50" cy="70" rx="38" ry="6" fill="#3a2a1f" opacity="0.2" />
    {/* rotated square cushion */}
    <g transform="translate(50 40) rotate(45)">
      <rect x="-26" y="-26" width="52" height="52" rx="6" fill="#f08a3e" />
      <rect x="-26" y="-26" width="52" height="52" rx="6" fill="none" stroke="#3a2a1f" strokeWidth="2.4" />
      {/* button tuft */}
      <circle cx="0" cy="0" r="2" fill="#3a2a1f" />
      <path d="M-3 -3 l-4 -4 M3 -3 l4 -4 M-3 3 l-4 4 M3 3 l4 4" stroke="#3a2a1f" strokeWidth="1.4" />
      {/* edge highlight */}
      <path d="M-22 -22 L 22 -22" stroke="#fff" strokeWidth="1.2" opacity="0.5" />
    </g>
  </svg>
);

const BowlArt = () => (
  <svg viewBox="0 0 100 70" className="obj-art w-full h-auto block" aria-hidden="true">
    <ellipse cx="50" cy="62" rx="34" ry="5" fill="#3a2a1f" opacity="0.22" />
    {/* bowl body */}
    <path d="M14 32 Q 50 24 86 32 L 78 56 Q 50 64 22 56 Z" fill="#ffcf3a" />
    <Ink d="M14 32 Q 50 24 86 32 L 78 56 Q 50 64 22 56 Z" w="2.4" />
    {/* rim ellipse top */}
    <ellipse cx="50" cy="32" rx="36" ry="8" fill="#ffd96a" />
    <Ink d="M50 32 m-36 0 a36 8 0 1 0 72 0 a36 8 0 1 0 -72 0" w="2.2" />
    {/* food inside */}
    <ellipse cx="50" cy="32" rx="28" ry="5" fill="#a87445" />
    <circle cx="42" cy="30" r="2.4" fill="#7a4a2a" />
    <circle cx="56" cy="33" r="2" fill="#7a4a2a" />
    <circle cx="50" cy="29" r="1.6" fill="#c98a55" />
    {/* highlight */}
    <path d="M22 36 q 6 -4 14 -3" stroke="#fff" strokeWidth="1.4" fill="none" opacity="0.7" />
  </svg>
);

const ART_MAP = {
  tree: TreeArt,
  ball: BallArt,
  balloon: BalloonArt,
  mat: MatArt,
  cushion: CushionArt,
  bowl: BowlArt,
};

Object.assign(window, {
  SkyLayer, IslandsLayer, FenceLayer, FoliageLayer, DeckLayer, GroundLayer,
  ART_MAP,
});
