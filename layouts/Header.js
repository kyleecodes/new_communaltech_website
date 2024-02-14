import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header_container}>
      <a href="/">
        <div className={styles.company_title}>Communal Tech</div>
        <div className={styles.subtitle}> DevRel + Community + Content</div>
      </a>
    </div>
  );
}

export default Header;
