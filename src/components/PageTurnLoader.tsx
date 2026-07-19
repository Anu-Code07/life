interface PageTurnLoaderProps {
  message?: string;
}

export default function PageTurnLoader({
  message = "Turning the page...",
}: PageTurnLoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-12">
      <div className="relative w-24 h-32 sm:w-28 sm:h-36 animate-page-flip perspective-[800px]">
        <div
          className="absolute inset-0 rounded-r-md border border-[#e0d9ce] bg-[#fffef9] shadow-lg"
          style={{
            transformOrigin: "left center",
            background:
              "linear-gradient(to right, #f5f0e0 0%, #fffef9 8%, #fffef9 100%)",
          }}
        >
          <div className="p-4 space-y-2">
            <div className="h-1.5 bg-[#ebe6d6] rounded w-3/4" />
            <div className="h-1.5 bg-[#ebe6d6] rounded w-full" />
            <div className="h-1.5 bg-[#ebe6d6] rounded w-5/6" />
            <div className="h-1.5 bg-[#ebe6d6] rounded w-2/3 mt-4" />
            <div className="h-1.5 bg-[#ebe6d6] rounded w-full" />
          </div>
        </div>
      </div>
      <p className="font-serif text-lg text-[#1a1510] mt-8 text-center">{message}</p>
      <p className="font-script text-[#9a948c] text-base mt-1">
        Finding your chapter...
      </p>
    </div>
  );
}
