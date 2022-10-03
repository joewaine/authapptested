
import { initPlasmicLoader } from "@plasmicapp/loader-vue";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.VUE_APP_NADI_PLASMIC_PROJECT_ID,   // ID of a project you are using
      token: process.env.VUE_APP_PLASMIC_TOKEN,  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})