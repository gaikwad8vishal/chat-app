


export function Navbar() {

  return (
    <div className="nav">
            <a href="/" aria-current="page" className="nav_brand w-inline-block w--current">
                <div className="w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="50" height="50" rx="25" stroke="currentColor" stroke-width="2"/>
                  <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle"
                        fill="currentColor" font-size="16" font-family="Arial, sans-serif" font-weight="bold">
                    VG
                  </text>
                  </svg>
                </div>
            </a>
            <div className="nav_menu">
                <div className="nav_links">
                    <a href="/" aria-current="page" className="nav-link w-inline-block w--current">
                        <div className="nav-link_label font-transducer " >Home</div>
                        <div className="nav-link_line"></div>
                    </a>
                    <a href="/projects" className="nav-link w-inline-block">
                        <div className="nav-link_label">Projects</div>
                        <div className="nav-link_line"></div>
                    </a>
                    <a href="/about" className="nav-link w-inline-block">
                        <div className="nav-link_label">About</div>
                        <div className="nav-link_line"></div>
                    </a>
                    <a href="/contact" className="nav-link w-inline-block">
                        <div className="nav-link_label">Contact</div>
                        <div className="nav-link_line"></div>
                    </a>
                </div>
                <div className="responsive-socals">
                    <a data-w-id="86d92fa4-16fd-308b-ef2e-c2a30a2dcb49" href="#" className="button menu-open w-button">Get in Touch</a>
                </div>
            </div>
            <div className="nav_social">
                <a data-w-id="428c2ed3-d171-1802-287c-84b2ea573400" href="#" className="button navbar_btn w-button">Get in Touch</a>
                <div className="nav_ham">
                    <div data-w-id="4170c2c4-9fb8-02b8-144d-f5033f5c60df" className="nav_ham-box">
                        <div className="nav_ham-line _1"></div>
                        <div className="nav_ham-line _2"></div>
                        <div className="nav_ham-line _3"></div>
                    </div>
                </div>
            </div>
            <div className="nav_transition">
                <div className="nav_transition-line _1"></div>
                <div className="nav_transition-line _2"></div>
                <div className="nav_transition-line _3"></div>
            </div>
        </div>

  )
}