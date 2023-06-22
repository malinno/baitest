import Gener from '@/components/Gener'
import Gennerui from '@/components/Gennerui'
import Prompt from '@/components/Prompt'
import Types from '@/components/Types'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-slate-400 h-screen'>
      <div className="grid grid-flow-col justify-stretch ...">
        <div>
          <Types/>
        </div>
        <div>
          <Gener/>
        </div>
        <div>
          <Gennerui/>
        </div>
        <div>
          <Prompt/>
        </div>

</div>
    </div>
  )
}
