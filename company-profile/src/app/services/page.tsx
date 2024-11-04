import React from 'react'

const services = [
  {
    name: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business requirements.',
    features: [
      'Requirements analysis and planning',
      'Custom application development',
      'UI/UX design',
      'Quality assurance and testing',
      'Ongoing support and maintenance',
    ],
  },
  {
    name: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure to support your growing business.',
    features: [
      'Cloud migration strategies',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud security and compliance',
      '24/7 cloud support',
    ],
  },
  {
    name: 'Data Analytics',
    description: 'Turn your data into actionable insights with our advanced analytics solutions.',
    features: [
      'Data collection and integration',
      'Predictive analytics',
      'Business intelligence dashboards',
      'Machine learning models',
      'Data visualization',
    ],
  },
]

const CheckIcon = () => (
  <svg className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
)

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {services.map((service, serviceIdx) => (
            <div key={service.name} className={`p-8 sm:p-10 ${serviceIdx === 0 ? 'lg:rounded-l-3xl' : serviceIdx === services.length - 1 ? 'lg:rounded-r-3xl' : ''} lg:flex-1`}>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{service.name}</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">{service.description}</p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}