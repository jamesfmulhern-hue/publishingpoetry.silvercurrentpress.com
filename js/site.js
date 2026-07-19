const NAV_ITEMS = [
  { href: "index.html",       label: "Home" },
  { href: "industry.html",    label: "The Industry" },
  { href: "reading.html",     label: "Poets & Analysis" },
  { href: "trends.html",      label: "What Gets Published" },
  { href: "craft.html",       label: "Craft" },
  { href: "techniques.html",  label: "Techniques" },
  { href: "submissions.html", label: "Submissions" },
  { href: "philosophy-of-writing.html", label: "Philosophy" },
  { href: "glossary.html",    label: "Glossary" },
];

function renderHeader() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV_ITEMS.map(
    n => `<a href="${n.href}" class="${n.href === here ? 'active' : ''}">${n.label}</a>`
  ).join("");
  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="index.html" aria-label="Publishing Poetry — Silver Current Press">
        <svg class="brand-mark" viewBox="0 0 60 60" fill="none" aria-hidden="true">
          <circle cx="30" cy="30" r="26" stroke="#B8893A" stroke-width="1.4" fill="none"/>
          <path d="M12 25 q4.5 -5 9 0 t9 0 t9 0" stroke="#B8893A" stroke-width="1.3" fill="none"/>
          <path d="M12 30 q4.5 -5 9 0 t9 0 t9 0" stroke="#B8893A" stroke-width="1.3" fill="none"/>
          <path d="M12 35 q4.5 -5 9 0 t9 0 t9 0" stroke="#B8893A" stroke-width="1.3" fill="none"/>
        </svg>
        <span class="brand-text">Publishing Poetry<small>Silver Current Press</small></span>
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation" onclick="document.querySelector('.nav').classList.toggle('open')">Menu</button>
      <nav class="nav" aria-label="Primary">${links}</nav>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h5>Publishing Poetry</h5>
          <p style="font-family: var(--display); font-style: italic; color: rgba(245,239,224,0.85);">A field guide to the contemporary poetry world for the eager writer — what to read, how to read it, what gets published, and how to send your own work out with confidence.</p>
        </div>
        <div>
          <h5>The Guide</h5>
          <ul>
            <li><a href="industry.html">The Industry Today</a></li>
            <li><a href="reading.html">Poets &amp; How to Analyze</a></li>
            <li><a href="trends.html">What Gets Published</a></li>
            <li><a href="craft.html">Writing a Good Poem</a></li>
          </ul>
        </div>
        <div>
          <h5>Practice</h5>
          <ul>
            <li><a href="techniques.html">Contemporary Techniques</a></li>
            <li><a href="submissions.html">Venues &amp; How to Submit</a></li>
            <li><a href="glossary.html">Glossary of Terms</a></li>
            <li><a href="downloads/Poetry_Submission_Guidelines_Silver_Current_Press.pdf">Download the Handbook (PDF)</a></li>
          </ul>
        </div>
        <div>
          <h5>Silver Current Press</h5>
          <ul>
            <li><a href="https://silvercurrentpress.com">silvercurrentpress.com</a></li>
            <li><a href="mailto:jamesfmulhern@gmail.com">jamesfmulhern@gmail.com</a></li>
            <li>Philadelphia, Pennsylvania</li>
            <li>An imprint of James Mulhern</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        ◆ &nbsp; Prepared by James F. Mulhern &nbsp; ◆ &nbsp; Silver Current Press &nbsp; ◆ &nbsp; 2026 &nbsp; ◆
      </div>
      <div class="footer-bottom" style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(245,239,224,0.14);font-size:0.88em;">
        Part of <a href="https://salon.silvercurrentpress.com" style="color:rgba(245,239,224,0.85);border-bottom:1px dotted rgba(245,239,224,0.4);">The 2601 Salon</a> — the working catalog of literary courses taught by James F. Mulhern. Program directors and venue partners: <a href="https://salon.silvercurrentpress.com/partners.html" style="color:rgba(245,239,224,0.85);border-bottom:1px dotted rgba(245,239,224,0.4);">bring a course to your community</a>.
      </div>
    </div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader();
  if (f) f.outerHTML = renderFooter();

  // Expand / collapse all controls for the master TOC
  const expandBtn = document.getElementById("toc-expand");
  const collapseBtn = document.getElementById("toc-collapse");
  if (expandBtn) expandBtn.addEventListener("click", () =>
    document.querySelectorAll("details.toc-item").forEach(d => d.open = true));
  if (collapseBtn) collapseBtn.addEventListener("click", () =>
    document.querySelectorAll("details.toc-item").forEach(d => d.open = false));
});
