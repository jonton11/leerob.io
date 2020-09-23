const title = 'Jonathan Wong - Web Developer.';
const description =
  'Web Developer, JavaScript and Elixir enthusiast, aspiring content-creator.';

const SEO = {
  title,
  description,
  canonical: 'https://jonton.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://jonton.dev',
    title,
    description,
    images: [
      {
        url: 'https://jonton.dev/static/favicons/jon150.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@Jwnathan_W',
    site: '@Jwnathan_W',
    cardType: 'summary_large_image'
  }
};

export default SEO;
