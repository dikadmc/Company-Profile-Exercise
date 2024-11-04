import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600">About Us</h2>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Discover how TechInnovate Solutions is shaping the future of technology.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mt-6 gap-8 space-y-16 lg:grid lg:grid-cols-2 lg:space-y-0">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our History</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2010, TechInnovate Solutions has been at the forefront of technological innovation for over a decade. What started as a small team of passionate developers has grown into a global company serving clients across various industries.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. We&apos;ve weathered the rapid changes in the tech landscape, always staying one step ahead to provide our clients with cutting-edge solutions.
              </p>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/about-image.jpg"
                alt="TechInnovate Solutions office"
                className="object-cover object-center"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Culture</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At TechInnovate Solutions, we foster a culture of innovation, collaboration, and continuous learning. We believe that our strength lies in our diversity and the unique perspectives each team member brings to the table.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re committed to creating a work environment where creativity thrives, ideas are valued, and every team member has the opportunity to make a significant impact. Our culture is the driving force behind our success and the high-quality solutions we deliver to our clients.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to empower businesses through innovative technology solutions. We strive to be a trusted partner for our clients, helping them navigate the complex digital landscape and achieve their business goals.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re committed to delivering excellence in every project we undertake, pushing the boundaries of what&apos;s possible, and making a positive impact on the world through technology.
          </p>
        </div>
      </div>
    </div>
  )
}