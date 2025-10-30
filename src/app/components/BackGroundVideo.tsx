export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* видео */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        src="/1826127_Galaxy_Nebula_1280x720.mp4"
        autoPlay
        loop
        muted
        playsInline
        data-video="0"
      />
      {/* затемняющий слой */}
      <div className="absolute inset-0 bg-[#100917]/70" />
    </div>
  );
}
