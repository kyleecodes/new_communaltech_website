import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Image from "next/image";
import styles from '../../styles/Blog.module.css';

export default function Post({ postData }) {
    return (
        <main>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="sticky top-0 z-50">
                <NavBar />
            </div>
            <section className={styles.post_container}>
                <div className={styles.post_content}>
                    <div className={"lg:ml-3 2xl:ml-80 4xl:ml-[34rem]"}>
                    <a href="/blog">&laquo; Back to Blog</a>
                        <Image
                            width="960"
                            height="540"
                            src={postData.hero_image}
                            alt={`blog_hero_${postData.title}`}
                        />
                        <div className={"lg:mr-3 2xl:mr-96 4xl:mr-[64rem]"}>
                            <div className={styles.post_title}>{postData.title}</div>
                            Published: <Date dateString={postData.date} />
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
