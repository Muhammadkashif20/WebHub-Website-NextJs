import Footer from "@/components/Footer";
import Image from "next/image";
const mockData = [
  {
    id: 1,
    title: "Cutting-Edge Technologies",
    description:
      "Stay up to date with the latest trends in web development, from frameworks to tools that shape the future of the web.",
    image:
      "https://plus.unsplash.com/premium_photo-1683548102842-e42c4a9320d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEN1dHRpbmclMjBFZGdlJTIwVGVjaG5vbG9naWVzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description:
      "Get guidance from industry experts who have real-world experience, helping you grow and build your skills effectively.",
    image:
      "https://images.unsplash.com/photo-1504607798333-52a30db54a5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RXhwZXJ0JTIwR3VpZGFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Hands-On Learning",
    description:
      "Gain practical experience through projects, tutorials, and coding challenges that make learning interactive and fun.",
    image:
      "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGFuZHMlMjBPbiUyMExlYXJuaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Community Support",
    description:
      "Join a vibrant community of developers where you can ask questions, share ideas, and collaborate on exciting projects.",
    image:
      "https://images.unsplash.com/photo-1683515424285-f52d31451b73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29tbXVuaXR5JTIwU3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Real-Time Collaboration",
    description:
      "Collaborate with your peers in real-time on coding challenges and projects to develop a deeper understanding of web development.",
    image:
      "https://plus.unsplash.com/premium_photo-1690303193720-38d825579eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVhbCUyMFRpbWUlMjBDb2xsYWJvcmF0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "Freelancing Opportunities",
    description:
      "We offer support for aspiring freelancers by connecting them with potential clients and helping them build their portfolios.",
    image:
      "https://images.unsplash.com/photo-1610473068872-908afb1a7317?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlZWxhbmNpbmclMjBPcHBvcnR1bml0aWVzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Certification Courses",
    description:
      "Earn certificates in various web development areas that can help you advance your career and open new opportunities.",
    image:
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENlcnRpZmljYXRpb24lMjBDb3Vyc2VzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "Code Review",
    description:
      "Get your code reviewed by experts to help you improve your coding practices and enhance the quality of your work.",
    image:
      "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29kZSUyMFJldmlld3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Personalized Learning Paths",
    description:
      "Take advantage of custom learning paths tailored to your interests and skill level to maximize your web development journey.",
    image:
      "https://media.istockphoto.com/id/1325969020/photo/think-different.webp?a=1&b=1&s=612x612&w=0&k=20&c=AXkvhxdYkekyFBKsLF5EdtN55-9lElDkBJBLaLGcRPw=",
  },
  {
    id: 10,
    title: "Networking Opportunities",
    description:
      "Connect with like-minded developers and industry leaders to grow your network and unlock new career opportunities.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIyTmV0d29ya2luZyUyME9wcG9ydHVuaXRpZXMnfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    title: "Web Design & UI/UX",
    description:
      "Learn the fundamentals of web design, user interface, and user experience to create beautiful and functional websites.",
    image:
      "https://images.unsplash.com/photo-1635405050330-b0824eb1bf26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdlYiUyMERlc2lnbiUyMCUyNiUyMFVJJTJGVVh8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    title: "Project Management",
    description:
      "Gain valuable skills in project management to effectively plan, execute, and deliver web development projects on time.",
    image:
      "https://plus.unsplash.com/premium_photo-1661277697952-0cacde72c755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHJvamVjdCUyME1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
  },
];

const page = () => {
  return (
    <div className="py-28 grid grid-cols-3 gap-5 mx-8">
      {mockData.map(({ title, description, image }) => {
        console.log("mockData=>", mockData);

        return (
          <div>
            <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden flex ">
              <div className="p-6 flex flex-col items-center ">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <Image src={image} width={200} height={200} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 mt-1">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">{description}</p>
                <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none transition-all duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default page;
