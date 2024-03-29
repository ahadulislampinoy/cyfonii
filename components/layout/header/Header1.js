import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, big }) {
    return (
        <>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className={`container ${big ? "big" : ""}`}>
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body">
                                <div className="header__logo">
                                    <Link href="/">
                                        <img id="site-logo" src="/assets/images/logo/logo.png" alt="Peson" width={75} height={75} data-retina="assets/images/logo/logo@2x.png" data-width={160} data-height={38} />
                                    </Link>
                                </div>
                                <div className="header__right">
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className="menu-item menu-item-has-children menu-current-item">
                                                <Link href="/#">Home</Link> 
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link href="#">Explore</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item"><Link href="">NFTs</Link></li>
                                                    <li className="menu-item"><Link href="">Wallet</Link></li>
                                                    <li className="menu-item"><Link href="">Visa Card</Link></li>
                                                    <li className="menu-item"><Link href="">Staking</Link></li>
                                                    <li className="menu-item"><Link href="">Help Center</Link></li>
                                                    <li className="menu-item"><Link href="">Participants &amp; Assets</Link></li>
                                                    <li className="menu-item"><Link href="">Advisors &amp; Backers</Link></li>
                                                    <li className="menu-item"><Link href="">Partners &amp; Investors</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/roadmap">RoadMap</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/team">Team</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>
                                </div>
                                <div className="header__action">
                                    <Link href="#" className="search-btn">
                                        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.7659" cy="9.76639" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.0176 16.4849L19.5416 19.9997" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                    <Link href="/contact" className="action-btn"><span>Join Now</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} />
            </header>

        </>
    )
}
