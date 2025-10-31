export default function BackgroundVideo() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* видео показываем только при отсутствии prefers-reduced-motion */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover opacity-20 motion-safe:block motion-reduce:hidden"
        src="/1826127_Galaxy_Nebula_1280x720.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        data-video="0"
      />
      {/* затемняющий слой */}
      <div className="absolute inset-0 bg-[#100917]/70" />
    </div>
  );
}
