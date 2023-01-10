
import { initPlasmicLoader } from "@plasmicapp/loader-vue";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "7Vf8ccS5NVpi2p94xhvgdE",   // ID of a project you are using
      token: "030jwm8EMhBdwUGFDt7NSdtd6f6dLsC7ZNvKvHqzZTZSu43JXeDmmORT4CylHfyLUf1MghMUYE5ZXkCK35g", 
      // id: process.env.VUE_APP_NADI_PLASMIC_PROJECT_ID,   // ID of a project you are using
      // token: process.env.VUE_APP_PLASMIC_TOKEN,  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: false,
})