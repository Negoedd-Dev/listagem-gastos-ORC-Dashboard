// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; feita a instalação das dependências
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Negoedd Corporation. Todos os direitos reservados.
      </p>
    </footer>
  );
}
