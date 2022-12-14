import Link from "next/link";
import ArticleHeader from "./ArticleHeader";

export default function ArticleSummary({ post }) {
    const {
        link,
        module: { meta }
    } = post;

    return (
        <>
            <style jsx>
                {`
                article {
                    margin-bottom: 3rem;
                }
                `}
            </style>
            <article>
                <ArticleHeader meta={meta} />
                <Link href={"/posts" + link}>
                    <a>Read more &rarr;</a>
                </Link>
            </article>
        </>
    );
};
