import { execSync } from "child_process"

console.log("🚀 Instalando pacotes da Vercel...\n")

try {
  // Instalar Speed Insights
  console.log("📊 Instalando @vercel/speed-insights...")
  execSync("npm install @vercel/speed-insights", { stdio: "inherit" })
  console.log("✅ Speed Insights instalado com sucesso!\n")

  // Instalar Analytics
  console.log("📈 Instalando @vercel/analytics...")
  execSync("npm install @vercel/analytics", { stdio: "inherit" })
  console.log("✅ Analytics instalado com sucesso!\n")

  console.log("🎉 Todos os pacotes foram instalados com sucesso!")
  console.log("\n📋 Próximos passos:")
  console.log("1. Fazer deploy na Vercel")
  console.log("2. Visitar o site em produção")
  console.log("3. Aguardar 5-10 minutos para ver os dados")
  console.log("4. Verificar o dashboard da Vercel")
} catch (error) {
  console.error("❌ Erro durante a instalação:", error.message)
  console.log("\n🔧 Tente executar manualmente:")
  console.log("npm install @vercel/speed-insights @vercel/analytics")
}
