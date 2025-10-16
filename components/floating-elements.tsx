"use client"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Elemento 1: Sol laranja com círculos */}
      <div
        className="absolute top-[10%] right-[5%] w-[200px] h-[200px] opacity-40 animate-float-slow"
        style={{ animation: "float 15s ease-in-out infinite" }}
      >
        <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Elemento 2: Starburst laranja */}
      <div
        className="absolute top-[60%] left-[5%] w-[150px] h-[150px] opacity-30 animate-rotate-slow"
        style={{ animation: "rotate-slow 40s linear infinite" }}
      >
        <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Elemento 3: Sol verde com círculos */}
      <div
        className="absolute bottom-[15%] right-[10%] w-[180px] h-[180px] opacity-30"
        style={{ animation: "float 20s ease-in-out infinite reverse" }}
      >
        <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Elemento 4: Starburst laranja pequeno */}
      <div
        className="absolute top-[30%] left-[15%] w-[100px] h-[100px] opacity-25"
        style={{ animation: "rotate-slow 30s linear infinite reverse" }}
      >
        <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  )
}
