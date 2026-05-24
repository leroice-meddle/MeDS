import * as LucideIcons from 'lucide-react'

function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 1.5, ...props }) {
  const PascalName = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  const LucideIcon = LucideIcons[PascalName]

  if (!LucideIcon || typeof LucideIcon !== 'function') {
    return (
      <span style={{ display: 'inline-flex', width: size, height: size, alignItems: 'center', justifyContent: 'center', fontFamily: 'Geist, sans-serif', fontSize: 9, color: '#ec221f', border: '1px dashed #ec221f', borderRadius: 4 }}>
        ?
      </span>
    )
  }

  return <LucideIcon size={size} color={color} strokeWidth={strokeWidth} {...props} />
}

export default Icon