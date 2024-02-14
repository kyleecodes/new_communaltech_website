import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Communal Tech</title>
        <meta name="description" content="Website for Communal Tech" />
        <meta
          name="keywords"
          content="Developer Relations, Technical, Content Creation, Community Management "
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main
        className={
          "text-center px-2 md:px-14 lg:px-40 mx-4 md:mx-6 lg:mx-20 2xl:mx-40 my-10 lg:my-20"
        }
      >
        <div className={styles.main_margin}>
          <div
            className={
              "text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-1 md:mb-2"
            }
          >
            <h2 className={styles.line_height}>What is Communal Tech?</h2>{" "}
          </div>

          <p
            className={
              "font-robotoMono font-bold text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
            }
          >
            Communal Tech = Tech for Everyone 🌈
          </p>

          <p
            className={
              "font-robotoMono text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10 4xl:mx-96"
            }
          >
            Communal Tech is a developer advocacy company created by Kylee Fields. It provides consulting for developer relations,
            technical community management, and technical content creation. To learn more
            about what these terms mean, check out my 'Resources' below!
          </p>

          <button className={styles.primary_button}>
            <a
              target="_blank"
              href="https://communaltech.notion.site/Resources-for-Developer-Relations-Technical-Community-Management-and-Technical-Content-Creation-247e108f34d440a184c3efafe8d83f3e"
              rel="noopener noreferrer"
            >
              {" "}
              Resources{" "}
            </a>
          </button>

          <p
            className={
              "font-robotoMono text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl my-10 font-semibold 4xl:mx-96"
            }
          >
            {" "}
            Services offered, but not limited to: knowledge base management,
            developer education, external & internal onboarding, community
            program management, content creation, video production, social media management,
            public speaking, live event hosting, value chain & performance
            analysis, customer relationship management, moderation, automation,
            and user-facing troubleshooting.
          </p>
          <p
            className={
              "font-robotoMono text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl my-10 font-medium"
            }
          >
            {" "}
            For a list of my software engineering skills, check out my <strong><a href="https://www.notion.so/communaltech/Kylee-Fields-Communal-Tech-1-0730bd5aa6a24f6d9e91b895e56cee48#9d1c94f8f82c4781b8e7befcd8fb9189">Projects</a></strong>
          </p>
          <button className={styles.primary_button}>
            <a
              target="_blank"
              href="https://form.typeform.com/to/vOzyqBjF?typeform-source=blljhazo9cp.typeform.com"
              rel="noopener noreferrer"
            >
              {" "}
              Work with me!{" "}
            </a>
          </button>
        </div>
      </main>
    </div>
  );
}
