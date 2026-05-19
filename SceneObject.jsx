// One interactive object — wraps a hit-area button, idle animation, and a speech bubble.

function SceneObject({ obj, selected, onSelect }) {
  const Art = window.ART_MAP[obj.art];
  return (
    <div
      className="absolute"
      style={{
        left: `${obj.x}%`,
        top: `${obj.y}%`,
        width: `${obj.w}%`,
      }}
    >
      <button
        type="button"
        data-id={obj.id}
        aria-label={obj.label}
        aria-pressed={selected}
        onClick={() => onSelect(obj.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(obj.id);
          }
        }}
        className={`obj-btn relative block w-full ${selected ? "obj-selected" : ""}`}
      >
        {selected && <span className="select-ring" aria-hidden="true" />}
        <div className={obj.anim || ""}>
          <Art />
        </div>
      </button>

      {selected && (
        <div
          className="absolute left-1/2 bubble bubble-pop font-display"
          style={{
            transform: "translate(-50%, -112%)",
            top: `${obj.bubbleOffsetY || -8}px`,
          }}
          role="status"
        >
          {obj.bubble}
        </div>
      )}
    </div>
  );
}

window.SceneObject = SceneObject;
