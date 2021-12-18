import { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";

export const RouteGuard = ({ children }: any) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);
    router.events.on("routeChangeComplete", authCheck);
    return () => {
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  function authCheck(url: string) {
    const publicPaths = ["/login", "/signup", "/forgot-password", "/logout"];
    const path = url.split("?")[0];
    const token = localStorage.getItem("token");
    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
};
