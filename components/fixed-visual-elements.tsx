"use client"

export default function FixedVisualElements() {
  return (
    <>
      {/* Elemento 1: Sol laranja com círculos no canto superior direito */}
      <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-30 overflow-hidden z-0">
        <div className="w-full h-full animate-rotate-slow">
          <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Elemento 2: Starburst laranja no canto inferior esquerdo */}
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-25 overflow-hidden z-0">
        <div className="w-full h-full animate-pulse-slow">
          <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Elemento 3: Sol verde na seção de empresas participantes */}
      <div className="absolute top-[10%] left-[5%] w-[120px] h-[120px] opacity-20 overflow-hidden z-0">
        <div className="w-full h-full animate-rotate-reverse">
          <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Elemento 4: Starburst laranja na seção de FAQ */}
      <div className="absolute bottom-[30%] right-[5%] w-[150px] h-[150px] opacity-20 overflow-hidden z-0">
        <div className="w-full h-full animate-pulse-slow">
          <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </>
  )
}
