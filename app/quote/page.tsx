export const metadata = {
  title: 'CNC Machining Services - Precision Manufacturing PRO',
  description: 'Your source for high-precision CNC machining services.',
}


import FileUpload from '@/components/fileupload'
import Newsletter from '@/components/newsletter'


export default function Home() {
  return (
    <>
      <FileUpload />
      <Newsletter />
    </>
  )
}
