import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Gift Someone a Smile Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering communities through education, healthcare, and sanitation initiatives since 2017
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn-secondary">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title">About Spreading Smiles India</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Founded on September 23, 2017, Spreading Smiles India has grown into a family of over 100 dedicated members working tirelessly to make a difference in the lives of marginalized communities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to create sustainable change through education, healthcare, and sanitation initiatives, ensuring that every individual has access to opportunities for growth and development.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Logo.jpeg"
                alt="Spreading Smiles India Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">Education</h3>
              <p className="text-gray-600">
                Providing quality education and learning resources to underprivileged children
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">Healthcare</h3>
              <p className="text-gray-600">
                Ensuring access to basic healthcare services and medical support
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">Sanitation</h3>
              <p className="text-gray-600">
                Promoting hygiene and sanitation practices in communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us reach more communities and create lasting change
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/donate" className="btn-secondary">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn-primary">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 