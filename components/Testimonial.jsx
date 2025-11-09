// Testimonial component placeholder (Shared between Projects & Team)
export default function Testimonials({
  title = "Testimonials",
  subtitle = "What experts say about our student projects",
  items = [
    {
      quote: "These projects demonstrate remarkable innovation and technical skill.",
      name: "Dr. Sarah Thompson",
      role: "Technology innovation director"
    },
    {
      quote: "The student work here represents the future of technological problem solving.",
      name: "Michael Rodriguez",
      role: "Senior industry advisor"
    },
    {
      quote: "Incredible potential and groundbreaking approaches to complex challenges.",
      name: "Elena Kovacs",
      role: "Research and development lead"
    }
  ]
}) {
  return (
    <>
      <section className="band">
        <div className="container">
          <h2 className="heading">{title}</h2>
          <p className="sub">{subtitle}</p>

          <div className="grid">
            {items.map((t, i)=>(
              <article className="card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="quote">{t.quote}</p>
                <div className="person">
                  <div className="avatar" aria-hidden="true"/>
                  <div className="meta">
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .band{ background:#e9edf2; padding:56px 0 72px; }
        .container{ max-width:1100px; margin:0 auto; padding:0 24px; }
        .heading{ text-align:center; font-weight:800; font-size:clamp(24px,3.5vw,36px); margin:0 0 6px; color:#0b0f14; }
        .sub{ text-align:center; color:#3a4653; margin:0 auto 24px; max-width:60ch; }
        .grid{ display:grid; gap:18px; grid-template-columns:repeat(3,minmax(0,1fr)); }
        @media (max-width: 900px){ .grid{ grid-template-columns:1fr; } }
        .card{
          background:#ffffff; border:1px solid #d3dae3; border-radius:12px;
          padding:18px; display:flex; flex-direction:column; gap:10px;
        }
        .stars{ letter-spacing:2px; color:#111; }
        .quote{ color:#2b3440; line-height:1.6; }
        .person{ display:flex; align-items:center; gap:10px; }
        .avatar{ width:28px; height:28px; border-radius:6px; background:#e1e6ec; }
        .name{ font-weight:600; color:#17202a; }
        .role{ color:#5c6b7a; font-size:14px; }
      `}</style>
    </>
  );
}
