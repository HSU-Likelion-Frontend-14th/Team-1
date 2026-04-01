import portfolioLogo from '../assets/PORTFOLIO..svg'

function Nav() {
  return (
    <nav>
      <div className="nav-logo"><img src={portfolioLogo} alt = '포트폴리오 로고'/></div>
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#hobby">HOBBY</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  )
}

export default Nav;