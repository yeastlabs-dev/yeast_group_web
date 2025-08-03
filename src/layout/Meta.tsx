import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#2B2B2E" /> {/* Barva pro téma prohlížeče (primární barva Yeast Group) */}
        <meta
          name="keywords"
          content="Yeast Group, holding, investice, nemovitosti, provoz, technologie, automatizace, stavebnictví, venture, služby, správa portfolia, rodinný holding, expanze, inovace, strategie"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>

      {/* Google Analytics - ZDE AKTUALIZUJTE ID, POKUD MÁ YEAST GROUP JINÉ ID GOOGLE ANALYTICS! */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MW6ZZHCY2" 
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0MW6ZZHCY2'); 
          `,
        }}
      />

      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical || 'https://www.yeast-group.cz'}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical || 'https://www.yeast-group.cz',
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type: 'website',
          images: [
            {
              url: `${router.basePath}/og-image.png`, // Předpoklad, že Open Graph obrázek bude ve složce public
              width: 1200,
              height: 630,
              alt: 'YEAST GROUP',
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };