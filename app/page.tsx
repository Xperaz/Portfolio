import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="bg-background text-[#fff] h-screen snap-y snap-mandatory 
          overflow-scroll z-0">
      <Head>
        <title>Aouhadou&apos;s Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}
      
      {/* Contact Me */}

    </div>
  )
}
