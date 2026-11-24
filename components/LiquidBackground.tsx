export default function LiquidBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: "linear-gradient(180deg, #faf9f6 0%, #f5f4f0 100%)",
      }}
    />
  );
}
