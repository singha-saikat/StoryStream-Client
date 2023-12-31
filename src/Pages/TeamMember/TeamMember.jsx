import image1 from '../../assets/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg';
import image2 from '../../assets/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop.jpg';
import image3 from '../../assets/inside-portrait-confident-young-man-white-clothes-posing-with-charming-smile-isolated-wall.jpg';
import image4 from '../../assets/handsome-bearded-businessman-rubbing-hands-having-deal.jpg';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder",
      image: image1,
    },
    {
      name: "Jane Smith",
      role: "Content Manager",
      image: image2,
    },
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: image3,
    },
    {
      name: "Emily Davis",
      role: "Marketing Specialist",
      image: image4,
    },
    // Add as many team members as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Meet the Team</h1>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
