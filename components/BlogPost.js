import ArticleHeader from './ArticleHeader'
import AboutMeSidebar from './AboutMeSidebar'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <ArticleHeader meta={meta} isBlogPost />
      <AboutMeSidebar />
      <article>{children}</article>
    </>
  )
}
