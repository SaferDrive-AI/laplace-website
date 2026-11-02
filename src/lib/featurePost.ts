import content from '../content/terasim-dt.json'
export const featureTitle = content[0].runs!.map(run => run.text).join('')
export const featureSubtitle = content[1].runs!.map(run => run.text).join('')
export const featureSlug = 'terasim-dt-open-source-traffic-simulation'

