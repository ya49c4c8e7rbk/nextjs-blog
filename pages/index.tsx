import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import Layout from '@/components/layout'
import Date from '@/components/date'
import utilStyles from '@/styles/utils.module.css'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}): JSX.Element {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <div>
          <div>ITエンジニア 8 年目</div>
          <div>
            株式会社アイエンターにて Webフロントチームのリーダーとして日々奮闘中
          </div>
          <div>好きな森のバターはアボカド</div>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
