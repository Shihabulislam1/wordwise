import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.copyrght}>
        &copy; Copyright {new Date().getFullYear()} by Wordwise Inc.
      </p>
    </footer>
  );
}

export default Footer;
