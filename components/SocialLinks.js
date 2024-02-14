import styles from "../styles/Socials.module.css";

function SocialLink() {
  return (
    <div className={styles.socials_container}>
      <div className={styles.right_link_container}>
        <a
          target="_blank"
          href="https://calendly.com/communaltech"
          rel="noopener noreferrer"
        >
          <h2> calendly </h2>
        </a>
      </div>

      <div className={styles.left_link_container}>
        <a
          target="_blank"
          href="https://form.typeform.com/to/vOzyqBjF?typeform-source=blljhazo9cp.typeform.com"
          rel="noopener noreferrer"
        >
          <h2> contact </h2>
        </a>
      </div>

      <div className={styles.right_link_container}>
        <a href="https://www.linkedin.com/in/kyleecodes/">
          <h2> linkedIn </h2>
        </a>
      </div>

      <div className={styles.left_link_container}>
        <a href="https://github.com/kyleecodes">
          <h2> github </h2>{" "}
        </a>
      </div>

      <div className={styles.right_link_container}>
        <a href="https://hachyderm.io/@communaltech">
          <h2> mastodon </h2>{" "}
        </a>
      </div>

      <div className={styles.left_link_container}>
        <a href="https://twitter.com/kyleetech">
          <h2> twitter </h2>{" "}
        </a>
      </div>

      <div className={styles.right_link_container}>
        <a href="https://lenster.xyz/u/communaltech">
          <h2> lenster </h2>{" "}
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
