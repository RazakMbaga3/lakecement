// app/components/ui/InfoCard.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function InfoCard({ title, imageSrc, description, linkPath }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h3 className="text-nyati-orange text-xl font-bold p-4">{title}</h3>
      <Link href={linkPath} className="block relative h-48 w-full">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover"
        />
      </Link>
      <div className="p-4">
        <p className="text-gray-700">
          {description}
          <Link href={linkPath} className="text-nyati-orange ml-1 font-bold">&gt;&gt;</Link>
        </p>
      </div>
    </div>
  )
}