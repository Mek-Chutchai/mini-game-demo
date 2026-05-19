// Main scene composition: background layers + interactive objects + UI overlay.

const { useState, useMemo, useCallback, useEffect } = React;

function TopOverlay({ muted, onMute }) {
  return (
    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-30 pointer-events-none">
      <div className="glass rounded-2xl px-3 py-1.5 flex items-center gap-2 pointer-events-auto shadow-sm">
        <div className="w-7 h-7 rounded-full bg-[#ffd66b] border-2 border-[#3a2a1f] flex items-center justify-center font-display text-[12px] text-[#3a2a1f]">
          ☀
        </div>
        <div className="font-display text-[13px] text-[#3a2a1f] leading-none">
          <div className="text-[10px] opacity-70 font-sans font-semibold">วันที่ดี</div>
          <div>Seaside Garden</div>
        </div>
      </div>
      <div className="flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          onClick={onMute}
          aria-label={muted ? "เปิดเสียง" : "ปิดเสียง"}
          aria-pressed={muted}
          className="glass w-10 h-10 rounded-full grid place-items-center shadow-sm active:scale-95 transition"
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3a2a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H3v6h3l5 4z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3a2a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H3v6h3l5 4z" />
              <path d="M15.5 8.5a5 5 0 010 7" />
              <path d="M18.5 5.5a9 9 0 010 13" />
            </svg>
          )}
        </button>
        <button
          type="button"
          aria-label="settings"
          className="glass w-10 h-10 rounded-full grid place-items-center shadow-sm active:scale-95 transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3a2a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.7 1.7 0 008 19.4a1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.7 1.7 0 003.6 15a1.7 1.7 0 00-1.5-1H2a2 2 0 110-4h.1A1.7 1.7 0 003.6 9 1.7 1.7 0 003.3 7.2L3.2 7.1A2 2 0 116 4.3l.1.1A1.7 1.7 0 008 4.7 1.7 1.7 0 009 3.2V3a2 2 0 114 0v.1A1.7 1.7 0 0014.7 4.7a1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8 1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ActionPanel({ obj, count, onInteract, message }) {
  const expanded = !!obj || !!message;
  return (
    <div className="absolute left-3 right-3 bottom-3 z-30">
      <div className={`glass rounded-3xl shadow-lg transition-all duration-200 ${expanded ? "px-4 py-3" : "px-3 py-2"}`}>
        {obj ? (
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#fff8ec] border-2 border-[#3a2a1f] grid place-items-center overflow-hidden shrink-0">
              <div className="w-8 h-8">{React.createElement(window.ART_MAP[obj.art])}</div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-[14px] text-[#3a2a1f] leading-tight truncate">
                {obj.label}
                <span className="ml-2 text-[10px] font-sans font-bold text-[#8b5a36] uppercase tracking-wider">{obj.sub}</span>
              </div>
              <div className="text-[11.5px] text-[#3a2a1f]/75 truncate">
                {message || obj.panel}
              </div>
            </div>
            <button
              type="button"
              onClick={() => onInteract(obj)}
              className="shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 bg-[#ffcf3a] border-2 border-[#3a2a1f] font-display text-[12.5px] text-[#3a2a1f] shadow-[0_3px_0_#3a2a1f] active:translate-y-[2px] active:shadow-[0_1px_0_#3a2a1f] transition"
            >
              {obj.cta}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#fff8ec] border-2 border-[#3a2a1f] grid place-items-center text-[#3a2a1f] shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                <path d="M12 6v12 M6 12h12" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 font-display text-[12.5px] text-[#3a2a1f] leading-none truncate">
              แตะของในสวนเพื่อโต้ตอบ
            </div>
            <div className="shrink-0 flex items-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#3a2a1f]/15 overflow-hidden">
                <div className="h-full bg-[#7eb455] transition-[width] duration-500" style={{ width: `${(count / 6) * 100}%` }} />
              </div>
              <span className="font-display text-[11px] text-[#3a2a1f]/80">{count}/6</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CozyGameScene() {
  const [selectedId, setSelectedId] = useState(null);
  const [muted, setMuted] = useState(false);
  const [interacted, setInteracted] = useState(() => new Set());
  const [flashMsg, setFlashMsg] = useState("");

  const selected = useMemo(
    () => window.SCENE_OBJECTS.find((o) => o.id === selectedId) || null,
    [selectedId]
  );

  const handleSelect = useCallback((id) => {
    setSelectedId((prev) => (prev === id ? null : id));
    setFlashMsg("");
  }, []);

  const handleInteract = useCallback((obj) => {
    setInteracted((prev) => {
      const next = new Set(prev);
      next.add(obj.id);
      return next;
    });
    const reactions = {
      tree: "🌱 รดน้ำเรียบร้อย ต้นไม้ดูสดชื่นขึ้น",
      ball: "⚾ โยนไปไกลเลย! ลูกบอลกลิ้งกลับมา",
      balloon: "🎈 ลูกโป่งสั่นเบาๆ น่ารักจัง",
      mat: "🧺 ปูพรมเสร็จ ชวนใครมานั่งดี",
      cushion: "🧡 เบาะนุ่มสบาย เหมาะกับงีบสั้น",
      bowl: "🍚 เติมอาหารแล้ว เพื่อนตัวเล็กจะดีใจ",
    };
    setFlashMsg(reactions[obj.id] || "เยี่ยม!");
    setTimeout(() => setFlashMsg(""), 2200);
  }, []);

  // dismiss bubble when tapping background
  const handleSceneClick = useCallback((e) => {
    if (e.target === e.currentTarget) setSelectedId(null);
  }, []);

  // ESC to deselect
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full h-full grid place-items-center p-2 sm:p-6">
      <div
        className="
          relative overflow-hidden grain
          rounded-[28px] sm:rounded-[36px]
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
          border-[3px] border-[#3a2a1f]
          bg-[#86c8de]
          w-full max-w-[440px]
          aspect-[9/16]
          max-h-[calc(100dvh-1rem)]
        "
        onClick={handleSceneClick}
      >
        {/* Background layers — order matters: sky → islands → ground → fence → deck → foliage */}
        <window.SkyLayer />
        <window.IslandsLayer />
        <window.GroundLayer />
        <window.FenceLayer />
        <window.DeckLayer />
        <window.FoliageLayer />

        {/* Soft vignette to add depth */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ boxShadow: "inset 0 0 80px rgba(58,42,31,.18), inset 0 -40px 60px rgba(58,42,31,.12)" }} />

        {/* Interactive objects */}
        <div className="absolute inset-0 z-10" onClick={handleSceneClick}>
          {window.SCENE_OBJECTS.map((o) => (
            <window.SceneObject
              key={o.id}
              obj={o}
              selected={selectedId === o.id}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* UI overlay */}
        <TopOverlay muted={muted} onMute={() => setMuted((m) => !m)} />
        <ActionPanel
          obj={selected}
          count={interacted.size}
          onInteract={handleInteract}
          message={flashMsg}
        />

        {/* tiny corner credit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 pointer-events-none z-0 opacity-0" aria-hidden="true">.</div>
      </div>
    </div>
  );
}

window.CozyGameScene = CozyGameScene;
