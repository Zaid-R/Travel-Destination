import githubLogo from '../../data/icons8-github.svg'
import linkedinLogo from '../../data/icons8-linkedin.svg'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div>
                    <a href="https://github.com/Zaid-R">
                        <img src={githubLogo} alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/zaid-rajab/">
                        <img src={linkedinLogo} alt="Linkedin Icon" />
                    </a>
                </div>
                <p>
                    Zaid Rajab
                </p>
            </footer>
        </>
    )
}

export default Footer;