import { GetStaticProps } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import Layout from '@/components/layout'
import Date from '@/components/date'
import { Link } from '@material-ui/core'
import { useUser } from '@/utils/auth/useUser'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}): React.ReactElement {
  const { user } = useUser()

  if (!user) {
    return (
      <>
        <div>Hi there!</div>
        <div>
          You are not signed in. <Link href={'/signin'}>Sign in</Link>
        </div>
      </>
    )
  }

  return (
    <Layout home>
      <section>
        <div>
          <div>ITエンジニア8年目</div>
          <div>
            株式会社アイエンターにて Webフロントチームのリーダーとして日々奮闘中
          </div>
          <div>好きな森のバターはアボカド</div>
        </div>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
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
