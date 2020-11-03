import { GetStaticProps } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import Layout from '@/components/layout'
import Date from '@/components/date'
import utilStyles from '@/styles/utils.module.css'
import Head from 'next/head'
import { Link, Button } from '@material-ui/core'
import { useUser } from '@/utils/auth/useUser'

export const siteTitle = 'Next.js サンプル'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}): React.ReactElement {
  const { user, logout } = useUser()
  console.log(user)
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
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <div>ITエンジニア8年目</div>
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
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Button color="primary" onClick={() => logout()}>
          Sign out
        </Button>
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
