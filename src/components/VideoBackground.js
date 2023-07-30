export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-full blur-3xl -z-10 overflow-hidden">
      {/* <video className="object-fill w-full h-full opacity-30" autoPlay loop muted>
        <source src="/video/cut-slowed-boomerang.mp4" type="video/mp4" />
      </video> */}

      <div class="absolute top-0 -left-4 w-56 h-32 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>
      <div class="absolute top-0 -left-4 w-64 h-64 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-2000"></div>

      <div class="absolute top-96 right-56 w-72 h-72 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-4000"></div>
      <div class="absolute top-96 right-20 w-56 h-56 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>

      <div class="absolute top-[900px] -left-4 w-56 h-56 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>
      <div class="absolute top-[900px] left-16 w-40 h-40 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-4000"></div>

      <div class="absolute top-[1800px] right-4 w-56 h-56 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>
      <div class="absolute top-[1750px] right-16 w-40 h-40 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-4000"></div>

      <div class="absolute top-2/3 -left-4 w-72 h-72 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>
      <div class="absolute top-2/3 left-16 w-72 h-72 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-4000"></div>

      <div class="absolute bottom-16 -left-4 w-72 h-72 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>
      <div class="absolute bottom-16 left-16 w-72 h-72 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-4000"></div>

      <div class="absolute bottom-[700px] right-4 w-72 h-72 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] mix-blend-multiply filter rounded-full opacity-30 animate-blob"></div>
      <div class="absolute bottom-[500px] right-10 w-56 h-80 bg-sky-300 mix-blend-multiply filter rounded-full opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
}
