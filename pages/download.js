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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Download App</h1>
      <p>Redirecting to the correct app store...</p>
    </div>
  );
}