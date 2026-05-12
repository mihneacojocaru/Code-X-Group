/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

declare module "*.astro" {
  const AstroComponent: any;
  export default AstroComponent;
}
