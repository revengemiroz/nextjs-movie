import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    if (path == "/") {
      router.push("/popular", undefined, { shallow: true });
    }
  }, []);

  return <div></div>;
}
