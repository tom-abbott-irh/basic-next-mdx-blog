export default function ArticleHeader({ meta, isBlogPost }) {
    return (
        <>
            <style jsx>
                {`
                h1 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #f39c12;          
                }
                .title {
                    font-size: 2rem;
                    margin-top: 8rem;
                }
                .details span {
                    color: #bdbdbd;
                    margin-right: 1rem;
                }
                .details {
                    margin-bottom: 1rem;
                }
                `}
            </style>
            <h1 className={isBlogPost ? 'title' : null} >{meta.title}</h1>
            <div className='details'>
                {
                    isBlogPost ? null : <p>{meta.description}</p>
                }
                <span>{meta.date}</span>
                <span role='img' aria-label='one coffee'>
                    ☕ {meta.readTime + ' min read'}
                </span>
            </div>
        </>)
}
