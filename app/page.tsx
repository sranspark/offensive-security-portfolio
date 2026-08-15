export default function Home() {
  const linkedin = "https://www.linkedin.com/in/vikramsran/";
  const github = "https://github.com/nukesran";

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vikram Sran home">
          VS<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#reports">Reports</a>
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-link" href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero ruled" id="top">
        <div className="hero-copy">
          <p className="eyebrow">OFFENSIVE SECURITY · AUTHORIZED LABS ONLY</p>
          <h1>
            I test systems,
            <br />
            preserve the evidence,
            <br />
            <span>and explain what failed.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Vikram Sran, an offensive-security practitioner focused on web
            applications, network assessment, Active Directory fundamentals,
            privilege escalation, and reporting that engineers can act on.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Review the evidence</a>
            <a className="button secondary" href={github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="field-note" aria-label="Current campaign status">
          <span className="tape" aria-hidden="true" />
          <p className="note-label">FIELD NOTE / 01</p>
          <h2>60 days of proof, not claims.</h2>
          <p>
            From 15 Aug to 13 Oct 2026, every public artifact starts with real
            work in a controlled environment.
          </p>
          <div className="pipeline" aria-label="Evidence pipeline">
            <span>work</span><i>→</i><span>evidence</span><i>→</i><span>report</span><i>→</i><span>publish</span>
          </div>
          <p className="note-bottom">Current phase: foundation + portfolio</p>
        </aside>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="section-index">01 / SELECTED WORK</p>
          <h2>Labs treated like assessments.</h2>
          <p>
            Scope, hypotheses, evidence, impact, remediation, and limitations—not
            screenshots without context.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card accent-blue">
            <div className="card-topline">
              <span>AUTHORIZED LAB</span><span>AD · NETWORK</span>
            </div>
            <h3>Active Directory privilege escalation &amp; network pivoting</h3>
            <p>
              Mapped identities, services, permission relationships, credential
              paths, and reachability across a controlled training environment.
              The write-up centers on validating each graph edge before calling
              it an attack path.
            </p>
            <ul>
              <li>Attack-surface and trust mapping</li>
              <li>Manual validation of privilege relationships</li>
              <li>Sanitized impact and remediation notes</li>
            </ul>
            <span className="status">SANITIZED REPORT IN REVIEW</span>
          </article>

          <article className="project-card accent-orange">
            <div className="card-topline">
              <span>METHODOLOGY</span><span>WEB</span>
            </div>
            <h3>Web application enumeration workflow</h3>
            <p>
              A repeatable process for turning service discovery into a living
              attack-surface map: virtual hosts, content, parameters,
              authentication flows, credentials, evidence confidence, and
              revisit triggers.
            </p>
            <ul>
              <li>Manual validation before exploitation</li>
              <li>Hypothesis and rejected-path tracking</li>
              <li>Remediation-focused reporting</li>
            </ul>
            <span className="status">PUBLIC PROJECT BUILD STARTS 18 AUG</span>
          </article>

          <article className="project-card accent-green">
            <div className="card-topline">
              <span>ISOLATED RESEARCH</span><span>WINDOWS</span>
            </div>
            <h3>Runtime behavior beyond XOR encoding</h3>
            <p>
              Lab-only research into why changing static bytes does not remove
              behavioral signals created during memory allocation, permission
              changes, and execution.
            </p>
            <ul>
              <li>Controlled test payloads only</li>
              <li>Architecture and behavior documentation</li>
              <li>Defensive observations, not evasion claims</li>
            </ul>
            <span className="status">EVIDENCE PACKAGE BEING COMPLETED</span>
          </article>
        </div>
      </section>

      <section className="section report-section ruled" id="reports">
        <div className="section-heading compact">
          <p className="section-index">02 / REPORTING</p>
          <h2>A finding should survive handoff.</h2>
        </div>
        <div className="report-layout">
          <div className="report-copy">
            <p>
              My reports are designed to let a tester reproduce the issue and a
              decision-maker understand why it matters—without inflated risk
              language.
            </p>
            <div className="report-list">
              <span>01</span><p>Scope, affected asset, and preconditions</p>
              <span>02</span><p>Reproduction with sanitized evidence</p>
              <span>03</span><p>Root cause, impact, and confidence</p>
              <span>04</span><p>Actionable remediation and retest criteria</p>
            </div>
          </div>
          <blockquote>
            “The goal is not to make a finding sound dramatic. The goal is to
            make it useful.”
          </blockquote>
        </div>
      </section>

      <section className="section" id="writing">
        <div className="section-heading">
          <p className="section-index">03 / TECHNICAL WRITING</p>
          <h2>One observation. Fully explained.</h2>
          <p>
            Medium will hold the full technical work. Short posts will point to
            evidence instead of repeating generic security advice.
          </p>
        </div>
        <div className="writing-list">
          <article>
            <span className="article-number">01</span>
            <div>
              <p className="article-kicker">ACTIVE DIRECTORY · DRAFT</p>
              <h3>Why a graph edge is a hypothesis, not proof</h3>
              <p>Permission semantics, manual validation, attack-path confidence, and remediation.</p>
            </div>
          </article>
          <article>
            <span className="article-number">02</span>
            <div>
              <p className="article-kicker">WINDOWS BEHAVIOR · EVIDENCE REVIEW</p>
              <h3>XOR changes bytes. It does not erase runtime behavior.</h3>
              <p>What defenders can still observe after a payload is decoded in memory.</p>
            </div>
          </article>
          <article>
            <span className="article-number">03</span>
            <div>
              <p className="article-kicker">WEB ASSESSMENT · UPCOMING</p>
              <h3>Building a vulnerable application to understand trust boundaries</h3>
              <p>Engineering the flaw, reproducing it, and comparing vulnerable and corrected logic.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="section-index">04 / ABOUT</p>
          <h2>Methodical, curious, and honest about the limits.</h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m preparing for junior penetration-testing, VAPT, red-team trainee,
            and application-security opportunities. My current learning path
            includes PEN-200 practice, Hack The Box, TryHackMe, PortSwigger Web
            Security Academy, and controlled private labs.
          </p>
          <p>
            I publish only work I can explain: what I expected, what I observed,
            how I verified it, what failed, and how the underlying issue should
            be fixed.
          </p>
          <div className="skill-cloud" aria-label="Core skills">
            {[
              "Penetration testing", "Web application security", "Active Directory",
              "Network enumeration", "Linux privilege escalation", "Burp Suite",
              "Nmap", "Vulnerability reporting", "Python", "PHP"
            ].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">OPEN TO INTERNSHIP + JUNIOR OPPORTUNITIES</p>
        <h2>Need a junior tester who documents the reasoning?</h2>
        <p>Review the work, challenge the methodology, or start a conversation.</p>
        <div className="hero-actions centered">
          <a className="button primary" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          <a className="button secondary light" href={github} target="_blank" rel="noreferrer">Review GitHub ↗</a>
        </div>
      </section>

      <footer>
        <p>VIKRAM SRAN · OFFENSIVE SECURITY PORTFOLIO</p>
        <p>AUTHORIZED ENVIRONMENTS ONLY · UPDATED AUG 2026</p>
      </footer>
    </main>
  );
}
