import Head from "next/head";
import styles from "../styles/Home.module.css";
import SocialLink from "../components/SocialLinks";

export default function Socials() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Communal Tech</title>
        <meta name="description" content="Website for Communal Tech" />
        <meta name="keywords" content="Developer Relations, Technical, Content Creation, Community Management "></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={"mx-6 md:mx-10 lg:mx-40 2xl:mx-80 my-1 lg:my-10"}>
        <div className={"text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-10"}>
          <div className={styles.line_height}>
            <h2 className={"text-center"}>~ SOCIALS ~</h2>
          </div>{" "}
          <p
            className={
              "font-robotoMono text-center text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
            }
          >
            Be cautious of scammers, these are my only accounts. I will never
            ask for crypto or money.
          </p>
        </div>

        <div>
          <SocialLink />
        </div>
      </main>
    </div>
  );
}
