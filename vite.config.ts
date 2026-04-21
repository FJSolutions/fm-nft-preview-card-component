import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

export default {
   css: {
      transformer: 'lightningcss',
      lightningcss: {
         targets: browserslistToTargets(browserslist('>= 0.25%')), // Target older browsers
         drafts: {
            customMedia: true
         }
      }
   },
   build: {
      cssMinify: 'lightningcss', // Use Lightning CSS for minification
   }
}
