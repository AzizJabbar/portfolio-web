export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-full -z-10 blur-3xl overflow-hidden">
      <video className="object-fill w-full h-full opacity-50" autoPlay loop muted>
        <source src="/video/cut-slowed-boomerang.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
