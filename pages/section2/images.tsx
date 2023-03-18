import type {NextPage} from 'next';
import Image from 'next/image';
import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg'

const Images: NextPage = () => {
  return (
    <main>
      <figure style={{position: 'relative', width: '500px', height: '100px'}}>
        <Image
          src={"https://lecture-1.vercel.app/example.jpg"}
          alt="v13 fill"
          fill
          style={{objectFit: 'cover'}}
        />
      </figure>
    </main>
  )
}

export default Images;