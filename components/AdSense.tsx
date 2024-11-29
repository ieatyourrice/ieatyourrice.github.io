interface AdSenseProps {
  className?: string
  adSlot: string
}

const AdSense = ({ className, adSlot }: AdSenseProps) => {
  return (
    <div className={`bg-gray-200 p-4 text-center ${className}`}>
      <p className="text-gray-500">AdSense Ad Placeholder</p>
      <p className="text-xs text-gray-400">Ad Slot: {adSlot}</p>
    </div>
  )
}

export default AdSense

