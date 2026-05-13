export default function VideoSection() {
  return (
    <div className="w-full flex justify-center bg-white py-6 lg:py-10 px-4">
      <div className="relative w-full max-w-[880px] p-4 lg:p-6">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 w-10 h-10 lg:w-14 lg:h-14 border-t-[6px] border-l-[6px] border-custom-blue rounded-tl-md"
        />
        <span
          aria-hidden="true"
          className="absolute top-0 right-0 w-10 h-10 lg:w-14 lg:h-14 border-t-[6px] border-r-[6px] border-custom-blue rounded-tr-md"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-10 h-10 lg:w-14 lg:h-14 border-b-[6px] border-l-[6px] border-custom-blue rounded-bl-md"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-10 h-10 lg:w-14 lg:h-14 border-b-[6px] border-r-[6px] border-custom-blue rounded-br-md"
        />
        <video
          className="relative w-full rounded-md shadow-md block"
          src="/video-landing.mp4"
          controls
          preload="metadata"
          playsInline
        />
      </div>
    </div>
  );
}
