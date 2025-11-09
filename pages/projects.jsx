import Head from "next/head";
import Layout from "../components/Layout";
import ProjectPortfolio from "../components/ProjectPortfolio";
import FeaturedProject from "../components/FeaturedProject";
import Testimonials from "../components/Testimonials";
import projectsData from "../data/projects.json";

export default function ProjectsPage() {
  const projects = projectsData.projects || [];

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Our student project showcase" />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="header">
          <div className="container">
            <p className="kicker">Projects</p>
            <h1 className="title">Our student project showcase</h1>
            <p className="subtitle">
              Explore groundbreaking work from emerging talent
            </p>
          </div>
        </section>

        {/* Grid of projects */}
        <ProjectPortfolio id="projects" projects={projects} />

        {/* Featured section */}
        <FeaturedProject
          // kicker="Featured"
          // title="Breakthrough project transforming healthcare technology"
          // excerpt="Our AI health tracker represents..."
          // href="/projects/ai-health-tracker"
        />

        {}
        <Testimonials
        />

        {/* Local style of the page */}
        <style jsx>{`
          .header {
            padding: 72px 0 36px;
            background: #0b0f14;
            border-bottom: 1px solid #1f2832;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px;
          }
          .kicker {
            color: #9aa3ad;
            font-size: 14px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .title {
            font-weight: 800;
            line-height: 1.05;
            font-size: clamp(28px, 4.5vw, 40px);
            margin: 0 0 8px;
          }
          .subtitle {
            color: #cfd6e4;
            max-width: 680px;
            line-height: 1.6;
          }
        `}</style>
      </Layout>
    </>
  );
}