import Link from 'next/link'
import Image from 'next/image'

interface AppButtonProps {
  store: 'apple' | 'google'
  className?: string
  disabled?: boolean
}

export default function AppButton({ store, className = '', disabled = false }: AppButtonProps) {
  const isApple = store === 'apple'
  // Disable apple button by default as per request
  const isDisabled = disabled || isApple
  
  const imageSrc = isApple ? '/app-store-button.svg' : '/google-play-button.svg'
  const imageAlt = isApple ? 'Download on the App Store' : 'Get it on Google Play'
  
  if (isDisabled) {
    return (
      <div className={`inline-block opacity-50 cursor-not-allowed grayscale ${className}`}>
        <Image
          src={imageSrc}
          alt={imageAlt + ' (Coming Soon)'}
          width={isApple ? 180 : 200}
          height={60}
          className="h-auto pointer-events-none"
        />
      </div>
    )
  }
  
  const href = isApple ? '#' : 'https://play.google.com/store/apps/details?id=player.neo.tuber'

  return (
    <Link
      href={href}
      target={isApple ? undefined : '_blank'}
      rel={isApple ? undefined : 'noopener noreferrer'}
      className={`inline-block transition-all duration-200 hover:opacity-90 hover:scale-105 ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={isApple ? 180 : 200}
        height={60}
        className="h-auto"
      />
    </Link>
  )
}

