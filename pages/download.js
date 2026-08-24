import Head from "next/head";
import { useEffect } from "react";

export default function Download() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href =
        "https://apps.apple.com/in/app/drjiva/id6795009333";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Download Dr. Jiva</title>
        <meta
          name="description"
          content="Download the Dr. Jiva app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Download Dr. Jiva</h1>

        <p>Redirecting you to the correct app store...</p>

        <p style={{ marginTop: "20px" }}>
          If you are not redirected automatically, choose your store:
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
          style={{
            margin: "10px",
            padding: "14px 24px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Android — Google Play
        </a>

        <a
          href="https://apps.apple.com/in/app/drjiva/id6795009333"
          style={{
            margin: "10px",
            padding: "14px 24px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          iPhone — App Store
        </a>
      </main>
    </>
  );
}