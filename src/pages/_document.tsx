import Document, { Html, Head, Main, NextScript } from "next/document";

class _document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/Favicon64.svg" />
          <link rel="apple-touch-icon" href="/Icon192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />

          <meta name="application-name" content="Move.it" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Move.it" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#5965e0" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#5965e0" />

          <link
            href="/Icon192.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/Icon192.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />

          <meta name="twitter:card" content="Move.it" />
          <meta name="twitter:url" content="https://moveitapp.vercel.app" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Productiviy. Offline. Free"
          />
          <meta name="twitter:image" content="/Icon192.png" />
          <meta name="twitter:creator" content="@esau_morais" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Move.it" />
          <meta
            property="og:description"
            content="Productivity. Offline. Free"
          />
          <meta property="og:site_name" content="Move.it" />
          <meta property="og:url" content="https://moveitapp.vercel.app" />
          <meta property="og:image" content="/Icon192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _document;
