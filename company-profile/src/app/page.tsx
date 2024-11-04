import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Innovative Solutions for Modern Businesses
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TechInnovate Solutions is at the forefront of technological innovation, providing cutting-edge solutions to help businesses thrive in the digital age.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/services"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Our Services
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/hero-image.jpg"
            alt="TechInnovate Solutions"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      {/* Company overview */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Company</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Businesses Through Technology
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At TechInnovate Solutions, we believe in the power of technology to transform businesses. Our team of experts is dedicated to delivering innovative solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Products or services */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Solutions for Your Business Needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Custom Software Development',
                  description: 'Tailored software solutions to meet your unique business requirements.',
                },
                {
                  name: 'Cloud Services',
                  description: 'Scalable and secure cloud infrastructure to support your growing business.',
                },
                {
                  name: 'Data Analytics',
                  description: 'Turn your data into actionable insights with our advanced analytics solutions.',
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link href="/services" className="text-sm font-semibold leading-6 text-indigo-600">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {[
                {
                  body: 'TechInnovate Solutions transformed our business with their innovative software solutions. Highly recommended!',
                  author: {
                    name: 'John Doe',
                    handle: 'CEO, Tech Corp',
                    imageUrl: '/testimonial1.jpg',
                  },
                },
                {
                  body: 'The cloud services provided by TechInnovate Solutions have greatly improved our scalability and efficiency.',
                  author: {
                    name: 'Jane Smith',
                    handle: 'CTO, Data Insights',
                    imageUrl: '/testimonial2.jpg',
                  },
                },
                {
                  body: 'Their data analytics solutions have given us valuable insights that drive our business decisions.',
                  author: {
                    name: 'Mike Johnson',
                    handle: 'Director of Analytics, InnovateCo',
                    imageUrl: '/testimonial3.jpg',
                  },
                },
              ].map((testimonial) => (
                <div key={testimonial.author.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={testimonial.author.imageUrl}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div  className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}