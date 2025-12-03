

import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["az", "en", "ru"],
  defaultLocale: "az",
  localePrefix: "as-needed",
  localeDetection: false,
  urlMappingStrategy: "rewriteDefault",
});

export default function middleware(req) {
  const { cookies } = req;
  const nextLocale = cookies.get("NEXT_LOCALE")?.value;
  const { pathname } = req.nextUrl;

  // Statik assetlər (mövcud məntiqin qalsın)
  const isStaticAsset =
    /\.(jpg|jpeg|png|gif|svg|ttf|woff|woff2|eot|otf|mp4|webm|json|css|js)$/.test(
      pathname
    );
  if (isStaticAsset) return NextResponse.next();

  // Cookie-dən dil yönləndirməsi
  const hasLocale = /^\/(az|ru|en)(\/|$)/.test(pathname);
  if (nextLocale && !hasLocale && nextLocale !== "az") {
    const url = req.nextUrl.clone();
    url.pathname = `/${nextLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}

export const config = {
  // Burada əsas fərq: .*\\..* → nöqtəli faylları middleware-dən çıxarır
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

