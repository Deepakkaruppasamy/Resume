import { resumeData } from "@/lib/data";

export default function Home() {
  return (
    <div className="resume-page">
      {/* Header */}
      <header>
        <h1>{resumeData.name}</h1>
        <p className="subtitle">{resumeData.role}</p>
        <div className="contact-info">
          <span>{resumeData.contact.email}</span>
          <span>{resumeData.contact.phone}</span>
          <a href={resumeData.contact.github}>https://github.com/Deepakkaruppasamy</a>
          <a href={resumeData.contact.linkedin}>linkedin.com/in/deepakkaruppasamy</a>
        </div>
        <div className="divider" />
      </header>

      <div className="main-content">
        {/* Left Column */}
        <div className="left-col">
          <section>
            <h2>OBJECTIVE</h2>
            <p className="section-content">
              {resumeData.objective}
            </p>
          </section>

          <section>
            <h2>SKILLS & TOOLS</h2>
            <div className="section-content">
              <div className="skills-category">
                <ul className="bullet-list">
                  <li><strong>Languages:</strong> {resumeData.skills.languages.join(",")}</li>
                  <li><strong>Tech Stack:</strong></li>
                  <li className="indent"><strong>Frontend:</strong> {resumeData.skills.frontend.join(",")}</li>
                  <li className="indent"><strong>Backend:</strong> {resumeData.skills.backend.join(",")}</li>
                  <li className="indent"><strong>Database:</strong> {resumeData.skills.database.join(",")}</li>
                  <li className="indent"><strong>Other Frameworks Libraries:</strong> {resumeData.skills.other.join(",")}</li>
                  <li><strong>Concepts:</strong> {resumeData.skills.concepts.join(",")}</li>
                  <li><strong>ToolsKnown:</strong> {resumeData.skills.tools.join(",")}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>ACHIEVEMENTS</h2>
            {resumeData.achievements.map((ach) => (
              <div key={ach.title} className="edu-item">
                <h3 style={{ textTransform: 'none', fontSize: '9pt' }}>{ach.title}</h3>
                <p className="date-text" style={{ marginBottom: '4px' }}>{ach.period}</p>
                <p className="section-content" style={{ fontSize: '8pt' }}>{ach.description}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>AREA OF INTEREST</h2>
            <ul className="bullet-list">
              {resumeData.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Vertical Line */}
        <div className="vertical-divider" />

        {/* Right Column */}
        <div className="right-col">
          <section>
            <h2>Certifications</h2>
            {resumeData.certifications.map((cert) => (
              <div key={cert.title} className="flex-between" style={{ marginBottom: '6px' }}>
                <ul className="bullet-list">
                  <li style={{ fontSize: '8.5pt' }}>{cert.title}</li>
                </ul>
                <span className="date-text">{cert.period}</span>
              </div>
            ))}
          </section>

          <section>
            <h2>PROJECTS</h2>
            {resumeData.projects.map((project) => (
              <div key={project.title} className="project-item">
                <div className="flex-between">
                  <h3>{project.title}</h3>
                  <span className="date-text">{project.period}</span>
                </div>
                <p className="tech-stack uppercase">TECH STACK - {project.techStack}</p>
                <ul className="bullet-list">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                  <li><a href={project.link} className="text-secondary">{project.link}</a></li>
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2>EDUCATION</h2>
            {resumeData.education.map((edu) => (
              <div key={edu.institution} className="edu-item">
                <div className="flex-between">
                  <ul className="bullet-list">
                    <li style={{ fontWeight: '800', fontSize: '9pt' }}>{edu.institution}</li>
                  </ul>
                  <span className="date-text">{edu.period}</span>
                </div>
                <div className="flex-between" style={{ paddingLeft: '12px' }}>
                  <p className="section-content" style={{ fontWeight: '500' }}>{edu.degree}</p>
                  <p className="date-text" style={{ textTransform: 'none' }}>{edu.location}</p>
                </div>
                <p className="section-content indent" style={{ fontWeight: '800' }}>{edu.detail}</p>
              </div>
            ))}
          </section>

          <section>
            <div className="flex-between">
              <h2>Paper Presentations</h2>
              <span className="date-text" style={{ marginTop: '4px' }}>08-OCTOBER 2024</span>
            </div>
            {resumeData.paperPresentations.map((paper) => (
              <div key={paper.title} className="edu-item">
                <h3 style={{ textTransform: 'uppercase' }}>{paper.title}</h3>
                <p className="section-content">{paper.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
