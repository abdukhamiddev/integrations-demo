import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { registerAll } from "@plasmicpkgs/plasmic-contentstack";
import { registerAll  as contentful} from "@plasmicpkgs/plasmic-contentful";
import { registerAll as sanity } from "@plasmicpkgs/plasmic-sanity-io";
import { registerAll as strapi } from "@plasmicpkgs/plasmic-strapi";
import { registerAll as wordpress } from "@plasmicpkgs/plasmic-wordpress";


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "sKxxEnUdFYZLsw5KPd4kmo",
      token:
        "MXpD31l9qVrMzIExNWWrsMjh0dv8ORuDBQRXwQp63py9SDxj2QM6uVW6KFobZuEsCQlfr2AHjDCOOSy9K6A",
    },
  ],
  

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
registerAll(PLASMIC)
strapi(PLASMIC)
contentful(PLASMIC)
sanity(PLASMIC)
wordpress(PLASMIC)
