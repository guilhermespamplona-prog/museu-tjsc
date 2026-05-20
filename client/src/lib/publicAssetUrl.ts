const PRESERVED_URL = /^(https?:|mailto:|tel:|#|data:)/i;

export function publicAssetUrl(url: string) {
  if (PRESERVED_URL.test(url)) {
    return url;
  }

  const base = import.meta.env.VITE_PUBLIC_ASSET_BASE?.trim();
  const path = url.replace(/^\/+/, "").replace(/^\.\//, "");

  if (base) {
    return `${base.replace(/\/+$/, "")}/${path}`;
  }

  return `./${path}`;
}
