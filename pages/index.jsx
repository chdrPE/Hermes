import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>KDGO - Home</title>
        <meta name="description" content="KDGO Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to KDGO
            </h1>
            <p className="text-gray-300 text-lg">
              Your navbar is now working! Try resizing the browser to see the mobile menu.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

