import { ToggleOn, ToggleOff, Folder, BoundingBox, BarChart, Clipboard2Check } from '@styled-icons/bootstrap'

function getIcon(iconName?: string) {
  console.log(iconName)
  switch (iconName) {
    case 'ToggleOn':
      return ToggleOn

    case 'ToggleOff':
      return ToggleOff

    case 'icon-marketing':
      return BoundingBox

    case 'icon-finance':
      return BarChart

    case 'icon-people':
      return Clipboard2Check

    default:
      return Folder
  }
}

export {
  ToggleOn,
  ToggleOff,
  getIcon,
}

