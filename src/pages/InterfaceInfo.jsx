// Assets from Figma
const imgGroup100915 = "https://www.figma.com/api/mcp/asset/c0dba49b-dc8d-4982-a28d-4ace0baba4e7.svg";
const imgGroup100996 = "https://www.figma.com/api/mcp/asset/11ed3e9c-a351-4e1a-8077-76f644676123.svg";
const imgElemenLingkaran = "https://www.figma.com/api/mcp/asset/d51580ab-3eb4-4bbb-b607-3d8ca7601567.svg";
const imgWeuiArrowFilled = "https://www.figma.com/api/mcp/asset/07bdeb0b-fe11-4e3e-97a7-3c22bb656ac3.svg";

export default function InterfaceInfo() {
  return (
    <main 
      className="relative min-h-screen overflow-x-hidden bg-[#685abb]"
      style={{ paddingTop: "calc(76px + 3rem)", paddingBottom: "4rem" }}
    >
      {/* Background Pattern - Top Section */}
      <div className="absolute left-0 top-0 w-full h-[1500px] overflow-hidden pointer-events-none opacity-30">
        <img 
          src={imgGroup100915} 
          alt="" 
          className="absolute left-[-143px] top-[23px] w-[1726px] h-[717px] object-cover"
        />
        <img 
          src={imgGroup100996} 
          alt="" 
          className="absolute left-[-143px] top-[761px] w-[1726px] h-[717px] object-cover"
        />
      </div>

      {/* Decorative Square Element - Right */}
      <div className="hidden lg:block absolute right-[5%] top-[35%] w-[200px] h-[200px] pointer-events-none z-[5]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-[160px] h-[160px] bg-[#FF59FB] rounded-[25px]"
            style={{ transform: 'rotate(64.35deg)' }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-[130px] h-[130px] border-[10px] border-white rounded-[15px]"
            style={{ transform: 'rotate(64.35deg)' }}
          />
        </div>
      </div>

      {/* Decorative Circle Element - Left */}
      <div className="hidden lg:block absolute left-[-50px] top-[60%] w-[180px] h-[180px] pointer-events-none z-[5]">
        <img 
          src={imgElemenLingkaran} 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="font-tektur font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-tight uppercase">
            <span className="block mb-2">
              <span className="text-[#FFD900]" style={{ textShadow: '6px 5px 0px #AC4AFD, 0px 0px 8px rgba(255,255,255,0.5)' }}>
                I
              </span>
              <span className="text-white" style={{ textShadow: '6px 5px 0px #AC4AFD, 0px 0px 8px rgba(255,255,255,0.5)' }}>
                NTERFACE
              </span>
            </span>
            <span className="block">
              <span className="text-[#FFD900]" style={{ textShadow: '6px 5px 0px #AC4AFD, 0px 0px 8px rgba(255,255,255,0.5)' }}>
                I
              </span>
              <span className="text-white" style={{ textShadow: '6px 5px 0px #AC4AFD, 0px 0px 8px rgba(255,255,255,0.5)' }}>
                NFORMATION
              </span>
            </span>
          </h1>
        </div>

        {/* Section 1: Apa Itu Interface */}
        <div className="relative mb-32 lg:mb-48">
          <div className="relative max-w-5xl mx-auto">
            {/* Label - Positioned Above */}
            <div className="flex justify-start mb-[-30px] relative z-20">
              <div 
                className="inline-block bg-[#FFFBE4] border-4 sm:border-[6px] border-[#FFD900] rounded-lg px-6 py-3 sm:px-10 sm:py-5"
                style={{ 
                  boxShadow: '0 0 30px rgba(255, 217, 0, 0.6)',
                  transform: 'rotate(-2.5deg)'
                }}
              >
                <h2 className="font-londrina font-black text-2xl sm:text-3xl lg:text-4xl text-[#DFB009] uppercase tracking-wide text-center whitespace-nowrap" style={{ textShadow: '3px 3px 4px rgba(0,0,0,0.25)' }}>
                  Apa itu interface?
                </h2>
              </div>
            </div>

            {/* Content Box */}
            <div 
              className="relative bg-[#29363E] bg-opacity-60 border-4 sm:border-[6px] lg:border-[8px] border-[#FFD900] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
              style={{ boxShadow: '0 0 40px rgba(255, 217, 0, 0.5)' }}
            >
              <p className="text-white font-londrina font-light text-base sm:text-lg lg:text-2xl xl:text-3xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Tujuan Interface */}
        <div className="relative mb-24 lg:mb-32">
          <div className="relative max-w-5xl mx-auto">
            {/* Label - Positioned Above (Right Side) */}
            <div className="flex justify-end mb-[-30px] relative z-20">
              <div 
                className="inline-block bg-[#D5EEFF] border-4 sm:border-[5px] border-[#189CF4] rounded-lg px-6 py-3 sm:px-10 sm:py-5"
                style={{ 
                  boxShadow: '0 0 25px rgba(24, 156, 244, 0.6)',
                  transform: 'rotate(-2.8deg)'
                }}
              >
                <h2 className="font-londrina font-black text-2xl sm:text-3xl lg:text-4xl text-[#189CF4] uppercase tracking-wide text-center whitespace-nowrap" style={{ textShadow: '3px 3px 4px rgba(0,0,0,0.25)' }}>
                  Tujuan interface
                </h2>
              </div>
            </div>

            {/* Content Box */}
            <div 
              className="relative bg-[#29363E] bg-opacity-60 border-4 sm:border-[6px] lg:border-[8px] border-[#189CF4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
              style={{ boxShadow: '0 0 40px rgba(24, 156, 244, 0.5)' }}
            >
              <p className="text-white font-londrina font-light text-base sm:text-lg lg:text-2xl xl:text-3xl leading-relaxed text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-16">
          <button 
            className="relative w-[200px] sm:w-[228px] h-[75px] sm:h-[89px] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-105"
            style={{ 
              transform: 'rotate(0.5deg)',
              filter: 'drop-shadow(3px 5px 3px rgba(0,0,0,0.3))'
            }}
          >
            <div 
              className="absolute inset-0 bg-[#FFD900] rounded-xl"
              style={{ 
                boxShadow: 'inset -4px -4px 4px 0px rgba(0,0,0,0.25), inset 5px 4px 4px 0px #FCEB8A'
              }}
            />
            <span 
              className="relative font-tektur font-extrabold text-2xl sm:text-[32px] text-white uppercase leading-tight z-10"
              style={{ textShadow: '0px 5px 3px rgba(0,0,0,0.4), 0px 4px 0px #AC4AFD' }}
            >
              More
            </span>
            <img 
              src={imgWeuiArrowFilled} 
              alt="" 
              className="relative w-[25px] sm:w-[30px] h-[50px] sm:h-[60px] z-10"
            />
          </button>
        </div>

      </div>
    </main>
  );
}