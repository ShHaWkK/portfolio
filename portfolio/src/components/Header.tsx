import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 mb-4">
        <Image src="/images/profile.jpg" alt="Alexandre Uzan" width={128} height={128} />
      </div>
      <h1 className="text-3xl font-bold">Alexandre Uzan</h1>
      <p className="text-lg text-gray-600">Sécurité Informatique</p>
      <div className="flex space-x-6 mt-3">
        <a href="https://github.com/alexandreuzan" target="_blank"><FaGithub size={24} /></a>
        <a href="https://linkedin.com/in/alexandreuzan" target="_blank"><FaLinkedin size={24} /></a>
      </div>
      <a href="/CV_AlexandreUzan.pdf" download className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        Télécharger le CV
      </a>
    </section>
  )
}
