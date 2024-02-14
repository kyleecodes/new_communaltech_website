import Head from "next/head";
import styles from "../styles/Blog.module.css";
import NavBar from "../components/NavBar";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';
import Image from "next/image";

export default function Blog({ allPostsData }) {
    return (
        <div className={styles.landing_container}>
            <Head>
                <title>Communal Tech</title>
                <meta name="description" content="Website for Communal Tech" />
                <meta name="keywords" content="Developer Relations, Technical, Content Creation, Community Management "></meta>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="sticky top-0 z-50">
                <NavBar />
            </div>
            <main className={"mx-6 md:mx-10 2xl:mx-20 3xl:mx-80 my-1 lg:my-10"}>
                <div
                    className={
                        "text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-1 md:mb-2"
                    }
                >
                    <h2 className={styles.blog_title}>Welcome 👋</h2>{" "}
                    <div className={styles.blog_subtitle}>A developer advocacy micro-blog by Kylee Fields.</div>
                    <p
                        className={
                            "font-robotoMono text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
                        }
                    >
                        This blog has moved! Please visit my <a target="_blank" href="https://www.notion.so/communaltech/Kylee-Fields-Tech-Community-Manager-0730bd5aa6a24f6d9e91b895e56cee48?pvs=4#068ccb1fe23d4f67b6b5343ce9fd5773" rel="noopener noreferrer"><u>Projects page</u></a> to view my blog posts.
                    </p>
                </div>
                <ul className={styles.bloglist_container}>
                    {allPostsData.map(({ id, date, title, hero_image }) => (
                        <li className={styles.bloglist_item} key={id}>
                            <div className={styles.bloglist_item_hero_img_container}>
                                <Image
                                    width={384}
                                    height={288}
                                    src={hero_image}
                                    alt={hero_image}
                                />
                            </div>
                            <div className={styles.bloglist_item_title}><Link href={`/posts/${id}`}>{title}</Link></div>
                            <div className={styles.bloglist_item_date}>
                                Published: <Date dateString={date} />
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}