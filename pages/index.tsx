import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@layout/Layout'
import { Cover } from '@layout/Cover'
import { ServicesSection } from '@components/ServicesSection'
// import { Layout } from '@components/Layout'
// import { PostView } from '@components/PostView'
// import { HeaderIndex } from '@components/HeaderIndex'
// import { StickyNavContainer } from '@effects/StickyNavContainer'
// import { SEO } from '@meta/seo'

import { processEnv } from '@lib/processEnv'
import {
  getAllPosts,
  getAllSettings,
  GhostPostOrPage,
  GhostPostsOrPages,
  GhostSettings,
} from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'

/**
 * Main index page (home page)
 *
 * Loads all posts from CMS
 *
 */

interface CmsData {
  posts: GhostPostsOrPages
  settings: GhostSettings
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  bodyClass: string
}

interface IndexProps {
  cmsData: CmsData
}

export default function Index({ cmsData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, posts, seoImage, bodyClass } = cmsData
  console.log(cmsData)

  return (
    <Layout settings={settings}>
      <Cover
        coverImage={settings?.coverImage}
        description={settings?.description}
      />
      <ServicesSection />
      <div
        style={{
          height: '3000px',
          width: '100%',
          backgroundImage:
            'linear-gradient(to right bottom, #7928ca, #0077ff, #00a5fe, #00c7e0, #50e3c2)',
        }}
      ></div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts: GhostPostsOrPages | []

  console.time('Index - getStaticProps')

  try {
    settings = await getAllSettings()
    posts = await getAllPosts()
  } catch (error) {
    throw new Error('Index creation failed.')
  }

  const cmsData = {
    settings,
    posts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
    bodyClass: BodyClass({ isHome: true }),
  }

  console.timeEnd('Index - getStaticProps')

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}

// export default function Index({ cmsData }: IndexProps) {
//   const router = useRouter()
//   if (router.isFallback) return <div>Loading...</div>

//   const { settings, posts, seoImage, bodyClass } = cmsData

//   return (
//     <>
//       <SEO {...{ settings, seoImage }} />
//       <StickyNavContainer
//         throttle={300}
//         activeClass="fixed-nav-active"
//         render={(sticky) => (
//           <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HeaderIndex {...{ settings }} />}>
//             <PostView {...{ settings, posts, isHome: true }} />
//           </Layout>
//         )}
//       />
//     </>
//   )
// }
