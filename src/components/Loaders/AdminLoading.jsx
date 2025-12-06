export default function Loader() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-600/20 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex justify-center items-center gap-10">
          <style jsx>{`
            @keyframes circle-keys {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.5);
                opacity: 0.5;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            @keyframes dot-keys {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(0);
              }
              100% {
                transform: scale(1);
              }
            }

            @keyframes outline-keys {
              0% {
                transform: scale(0);
                outline: solid 20px currentColor;
                outline-offset: 0;
                opacity: 1;
              }
              100% {
                transform: scale(1);
                outline: solid 0 transparent;
                outline-offset: 20px;
                opacity: 0;
              }
            }

            @keyframes blob {
              0% {
                transform: translate(0px, 0px) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
              100% {
                transform: translate(0px, 0px) scale(1);
              }
            }

            .circle {
              animation: circle-keys 2s ease-in-out infinite;
            }

            .dot {
              animation: dot-keys 2s ease-in-out infinite;
            }

            .outline {
              animation: outline-keys 2s ease-in-out infinite;
            }

            .animate-blob {
              animation: blob 7s infinite;
            }

            .circle:nth-child(1) {
              animation-delay: 0s;
            }
            .circle:nth-child(2) {
              animation-delay: 0.3s;
            }
            .circle:nth-child(3) {
              animation-delay: 0.6s;
            }
            .circle:nth-child(4) {
              animation-delay: 0.9s;
            }

            .circle:nth-child(1) .dot {
              animation-delay: 0s;
            }
            .circle:nth-child(2) .dot {
              animation-delay: 0.3s;
            }
            .circle:nth-child(3) .dot {
              animation-delay: 0.6s;
            }
            .circle:nth-child(4) .dot {
              animation-delay: 0.9s;
            }

            .circle:nth-child(1) .outline {
              animation-delay: 0.9s;
            }
            .circle:nth-child(2) .outline {
              animation-delay: 1.2s;
            }
            .circle:nth-child(3) .outline {
              animation-delay: 1.5s;
            }
            .circle:nth-child(4) .outline {
              animation-delay: 1.8s;
            }
          `}</style>

          {/* Circle 1 - Blue */}
          <div className="circle relative flex items-center justify-center w-5 h-5 border-2 border-blue-500 rounded-full">
            <div className="dot absolute w-4 h-4 rounded-full bg-blue-500" />
            <div className="outline absolute w-5 h-5 rounded-full text-blue-500" />
          </div>

          {/* Circle 2 - Purple */}
          <div className="circle relative flex items-center justify-center w-5 h-5 border-2 border-purple-500 rounded-full">
            <div className="dot absolute w-4 h-4 rounded-full bg-purple-500" />
            <div className="outline absolute w-5 h-5 rounded-full text-purple-500" />
          </div>

          {/* Circle 3 - Pink */}
          <div className="circle relative flex items-center justify-center w-5 h-5 border-2 border-pink-500 rounded-full">
            <div className="dot absolute w-4 h-4 rounded-full bg-pink-500" />
            <div className="outline absolute w-5 h-5 rounded-full text-pink-500" />
          </div>

          {/* Circle 4 - Cyan */}
          <div className="circle relative flex items-center justify-center w-5 h-5 border-2 border-cyan-500 rounded-full">
            <div className="dot absolute w-4 h-4 rounded-full bg-cyan-500" />
            <div className="outline absolute w-5 h-5 rounded-full text-cyan-500" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-lg font-medium tracking-wide">
          Memuat Halaman...
        </p>
      </div>
    </div>
  );
}
