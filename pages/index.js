// import Head from "next/head";
// import { useEffect } from "react";

// const ANDROID_URL =
//   "https://play.google.com/store/apps/details?id=com.drjiva.patient&pcampaignid=web_share";

// const IOS_URL =
//   "https://apps.apple.com/in/app/drjiva/id6795009333";

// export default function Home() {
//   useEffect(() => {
//     const ua = navigator.userAgent || navigator.vendor || "";

//     if (/android/i.test(ua)) {
//       window.location.replace(ANDROID_URL);
//       return;
//     }

//     if (/iPhone|iPad|iPod/i.test(ua)) {
//       window.location.replace(IOS_URL);
//       return;
//     }
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Download Dr. Jiva</title>
//         <meta
//           name="description"
//           content="Download Dr. Jiva for Android or iPhone"
//         />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1"
//         />
//       </Head>

//       <main
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//           textAlign: "center",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         <h1>Download Dr. Jiva</h1>

//         <p>Redirecting you to the correct app store...</p>

//         <div style={{ marginTop: "20px" }}>
//           <a
//             href={ANDROID_URL}
//             style={{
//               display: "block",
//               margin: "10px",
//               padding: "14px 24px",
//               background: "#000",
//               color: "#fff",
//               textDecoration: "none",
//               borderRadius: "8px",
//             }}
//           >
//             Android — Google Play
//           </a>

//           <a
//             href={IOS_URL}
//             style={{
//               display: "block",
//               margin: "10px",
//               padding: "14px 24px",
//               background: "#000",
//               color: "#fff",
//               textDecoration: "none",
//               borderRadius: "8px",
//             }}
//           >
//             iPhone — App Store
//           </a>
//         </div>
//       </main>
//     </>
//   );
// }













import Head from "next/head";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.drjiva.patient";

const IOS_URL =
  "https://apps.apple.com/in/app/drjiva/id6795009333";

export async function getServerSideProps({ req }) {
  const userAgent = req.headers["user-agent"] || "";

  // ANDROID ONLY
  if (/android/i.test(userAgent)) {
    return {
      redirect: {
        destination: ANDROID_URL,
        permanent: false,
      },
    };
  }

  // Keep iPhone/iPad exactly as before
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return {
      redirect: {
        destination: IOS_URL,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Download Dr. Jiva</title>

        <meta
          name="description"
          content="Download Dr. Jiva"
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
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1>Download Dr. Jiva</h1>

          <p>
            Please select your device.
          </p>

          <a
            href={ANDROID_URL}
            style={{
              display: "block",
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
            href={IOS_URL}
            style={{
              display: "block",
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
        </div>
      </main>
    </>
  );
}