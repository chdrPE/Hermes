import Link from "next/link";

export default function FeaturedProject({
  kicker = "Featured",
  title = "Breakthrough project transforming healthcare technology",
  excerpt = "Our AI health tracker represents a significant leap in personalized medical monitoring. It combines advanced machine learning with real-time health data analysis.",
  href = "/projects/ai-health-tracker"
}) {
  return (
    <>
      <section className="wrap">
        <div className="container">
          <div className="col text">
            {kicker && <p className="kicker">{kicker}</p>}
            <h2 className="title">{title}</h2>
            <p className="excerpt">{excerpt}</p>
            <Link href={href} className="cta">→</Link>
          </div>

          <div className="col media" aria-hidden="true">
            <div className="placeholder">Image</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .wrap{
          background:#0b0f14;
          border-top:1px solid #1f2832;
          border-bottom:1px solid #1f2832;
          padding:64px 0;
        }
        .container{
          max-width:1100px; margin:0 auto; padding:0 24px;
          display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:center;
        }
        @media (max-width: 900px){
          .container{ grid-template-columns:1fr; }
        }
        .kicker{ color:#9aa3ad; font-size:14px; letter-spacing:.08em; text-transform:uppercase; margin:0 0 8px; }
        .title{ font-weight:800; line-height:1.05; font-size:clamp(24px,4.5vw,40px); margin:0 0 12px; }
        .excerpt{ color:#cfd6e4; line-height:1.6; max-width:46ch; }
        .cta{
          display:inline-flex; align-items:center; justify-content:center;
          width:36px; height:36px; border-radius:999px; border:1px solid #2a3440;
          margin-top:24px; color:#cfe7ff; text-decoration:none;
        }
        .media{ display:grid; place-items:center; }
        .placeholder{
          width:100%; aspect-ratio:1/1; background:#d9d9d9; color:#7a7a7a;
          display:grid; place-items:center; border-radius:8px;
        }
      `}</style>
    </>
  );
}
