import Head from 'next/head'

export default function Seo({ title, reverse = false }) {
  const siteName = 'Open Process Ventures'
  const siteUrl = 'www.openprocessventures.com'
  const description =
    'Open Process Ventures is a Web3 specialised investment firm and strategic consultancy.'

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:url" content={siteUrl} key="ogurl" />
      <meta property="og:image" content="/meta-image.png" key="ogimage" />
      <meta property="og:site_name" content={siteName} key="ogsitename" />

      <title>
        {reverse ? `${siteName} | ${title}` : `${title} | ${siteName}`}
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
