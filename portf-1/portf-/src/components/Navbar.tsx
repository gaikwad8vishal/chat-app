


export function Navbar() {

  return (
    <div className="nav">
      <a href="/" className="nav_brand w-inline-block">
        <div>
          <svg width="100%" height="100%" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25" stroke="currentColor" stroke-width="2" fill="none" />
            <text x="50%" y="55%" className="" text-anchor="middle" fill="currentColor" font-size="14" font-family="sans-serif" dy=".3em">
              VG
            </text>
          </svg>
        </div>
      </a>
      <div className="nav_menu">
        <div className="nav_links">
          <a href="/" className="nav_link">
            <div className="nav-link_label">HOME</div>
            <div className="nav-link_line"></div>
          </a>
          <a href="/projects" className="nav_link">
            <div className="nav-link_label">PROJECTS</div>
            <div className="nav-link_line"></div>
          </a>
          <a href="/about" className="nav_link">
            <div className="nav-link_label">ABOUT</div>
            <div className="nav-link_line"></div>
          </a>
          <a href="/contact" className="nav_link">
            <div className="nav-link_label">CONTACT</div>
            <div className="nav-link_line"></div>
          </a>
        </div>
        <div className="responsive-socals">

        </div>
      </div>
      <div></div>
      <div></div>
    </div>

  )
}