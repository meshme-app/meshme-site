import { readFileSync } from "fs"
import path from "path"

export const metadata = {
  title: "Email Preview - MeshMe",
  description: "Preview de templates de e-mail",
}

export default function EmailPreviewPage() {
  const emailPath = path.join(process.cwd(), "emails", "interconsultorias-2026.html")
  const emailHtml = readFileSync(emailPath, "utf-8")

  return (
    <div style={{ background: "#e5e5e5", minHeight: "100vh", padding: "32px 0" }}>
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ 
          background: "#fff", 
          borderRadius: 12, 
          padding: "24px 32px", 
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16
        }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#111" }}>
              Email Preview
            </h1>
            <p style={{ fontSize: 13, color: "#666", margin: "4px 0 0 0" }}>
              InterConsultorias 2026 + Healthy Hour
            </p>
          </div>
          <span style={{ 
            fontSize: 11, 
            background: "#FF7816", 
            color: "#fff", 
            padding: "4px 12px", 
            borderRadius: 50, 
            fontWeight: 600 
          }}>
            SendGrid Ready
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: emailHtml }} />
      </div>
    </div>
  )
}
