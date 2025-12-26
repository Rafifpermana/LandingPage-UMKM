const UserLoading = () => {
  return (
    <>
      <style>{`
        .loader-wrapper {
          width: 100px;
          height: 100px;
          position: relative;
        }

        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2.8em;
          height: 2.8em;
          transform: translate(-50%, -50%) rotate(165deg);
        }

        .loader::before,
        .loader::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 0.6em;
          height: 0.6em;
          border-radius: 0.3em;
          transform: translate(-50%, -50%);
        }

        .loader::before {
          animation: before8 2s infinite;
        }

        .loader::after {
          animation: after6 2s infinite;
        }

        /* WARNA LEBIH TERANG & VIBRANT */
        @keyframes before8 {
          0% {
            width: 0.6em;
            box-shadow: 
              1.1em -0.6em rgba(255, 72, 150, 0.95),
              -1.1em 0.6em rgba(120, 220, 255, 0.95);
          }
          35% {
            width: 2.8em;
            box-shadow: 
              0 -0.6em rgba(255, 72, 150, 0.95),
              0 0.6em rgba(120, 220, 255, 0.95);
          }
          70% {
            width: 0.6em;
            box-shadow: 
              -1.1em -0.6em rgba(255, 72, 150, 0.95),
              1.1em 0.6em rgba(120, 220, 255, 0.95);
          }
          100% {
            box-shadow: 
              1.1em -0.6em rgba(255, 72, 150, 0.95),
              -1.1em 0.6em rgba(120, 220, 255, 0.95);
          }
        }

        @keyframes after6 {
          0% {
            height: 0.6em;
            box-shadow: 
              0.6em 1.1em rgba(72, 255, 195, 0.95),
              -0.6em -1.1em rgba(255, 215, 72, 0.95);
          }
          35% {
            height: 2.8em;
            box-shadow: 
              0.6em 0 rgba(72, 255, 195, 0.95),
              -0.6em 0 rgba(255, 215, 72, 0.95);
          }
          70% {
            height: 0.6em;
            box-shadow: 
              0.6em -1.1em rgba(72, 255, 195, 0.95),
              -0.6em 1.1em rgba(255, 215, 72, 0.95);
          }
          100% {
            box-shadow: 
              0.6em 1.1em rgba(72, 255, 195, 0.95),
              -0.6em -1.1em rgba(255, 215, 72, 0.95);
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
        <div className="loader-wrapper">
          <div className="loader" />
        </div>

        <p className="mt-8 text-gray-600 font-semibold tracking-wider animate-pulse text-sm">
          MEMUAT DATA...
        </p>
      </div>
    </>
  );
};

export default UserLoading;
