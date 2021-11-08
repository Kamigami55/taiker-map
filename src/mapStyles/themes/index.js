import ThemeAubergine from './ThemeAubergine'
import ThemeDark from './ThemeDark'
import ThemeNight from './ThemeNight'
import ThemeRetro from './ThemeRetro'
import ThemeSilver from './ThemeSilver'
import ThemeStandard from './ThemeStandard'

const MapThemes = [
  { id: '1', name: '標準', config: ThemeStandard, imageSrc: '/images/mapTheme/standard.png' },
  { id: '2', name: '懷舊', config: ThemeRetro, imageSrc: '/images/mapTheme/retro.png' },
  { id: '3', name: '深夜', config: ThemeNight, imageSrc: '/images/mapTheme/night.png' },
  { id: '4', name: '暗黑', config: ThemeDark, imageSrc: '/images/mapTheme/dark.png' },
  { id: '5', name: '銀白', config: ThemeSilver, imageSrc: '/images/mapTheme/silver.png' },
  { id: '6', name: '深藍', config: ThemeAubergine, imageSrc: '/images/mapTheme/aubergine.png' },
]

export default MapThemes
