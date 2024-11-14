import Image from "next/image";

interface RandomUserResponse {
  results: {
    email: string;
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  }[];
}

interface TeamMember {
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  title: string;
}

async function getTeamMembers(): Promise<TeamMember[]> {
  const res = await fetch("https://randomuser.me/api/?results=6");
  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }

  const data: RandomUserResponse = await res.json();
  return data.results.map((member, index) => ({
    ...member,
    title: [
      "CEO",
      "CTO",
      "Lead Developer",
      "Product Manager",
      "UX/UI Designer",
      "Marketing Director",
    ][index], // Assign titles based on index
  }));
}

export default async function Teams() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our diverse team of experts is dedicated to delivering innovative
            solutions and exceptional service.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {teamMembers.map((member: TeamMember) => (
            <li key={member.email}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={300}
                height={200}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{`${member.name.first} ${member.name.last}`}</h3>
              <p className="text-base leading-7 text-gray-600">
                {member.title}
              </p>{" "}
              {/* Display title */}
              <p className="text-base leading-7 text-gray-600">
                {member.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
