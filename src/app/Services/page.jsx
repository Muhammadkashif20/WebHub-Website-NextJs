
import Footer from '@/components/Footer'
const mockData = [
  {
    id: 1,
    title: "Cutting-Edge Technologies",
    description: "Stay up to date with the latest trends in web development, from frameworks to tools that shape the future of the web.",
    icon: "fas fa-laptop-code</i>"
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Get guidance from industry experts who have real-world experience, helping you grow and build your skills effectively.",
    icon: "fas fa-users"
  },
  {
    id: 3,
    title: "Hands-On Learning",
    description: "Gain practical experience through projects, tutorials, and coding challenges that make learning interactive and fun.",
    icon: "fas fa-project-diagram"
  },
  {
    id: 4,
    title: "Community Support",
    description: "Join a vibrant community of developers where you can ask questions, share ideas, and collaborate on exciting projects.",
    icon: "fas fa-comments"
  },
  {
    id: 5,
    title: "Real-Time Collaboration",
    description: "Collaborate with your peers in real-time on coding challenges and projects to develop a deeper understanding of web development.",
    icon: "fas fa-users-cog"
  },
  {
    id: 6,
    title: "Freelancing Opportunities",
    description: "We offer support for aspiring freelancers by connecting them with potential clients and helping them build their portfolios.",
    icon: "fas fa-briefcase"
  },
  {
    id: 7,
    title: "Certification Courses",
    description: "Earn certificates in various web development areas that can help you advance your career and open new opportunities.",
    icon: "fas fa-certificate"
  },
  {
    id: 8,
    title: "Code Review",
    description: "Get your code reviewed by experts to help you improve your coding practices and enhance the quality of your work.",
    icon: "fas fa-code-branch"
  },
  {
    id: 9,
    title: "Personalized Learning Paths",
    description: "Take advantage of custom learning paths tailored to your interests and skill level to maximize your web development journey.",
    icon: "fas fa-path"
  },
  {
    id: 10,
    title: "Networking Opportunities",
    description: "Connect with like-minded developers and industry leaders to grow your network and unlock new career opportunities.",
    icon: "fas fa-network-wired"
  },
  {
    id: 11,
    title: "Web Design & UI/UX",
    description: "Learn the fundamentals of web design, user interface, and user experience to create beautiful and functional websites.",
    icon: "fas fa-paint-brush"
  },
  {
    id: 12,
    title: "Project Management",
    description: "Gain valuable skills in project management to effectively plan, execute, and deliver web development projects on time.",
    icon: "fas fa-tasks"
  },
]
console.log('mockData=>',mockData);


const page = () => {
  return (
    <div className='py-28'>
      {mockData.map(({title,description,icon})=>{
        console.log('mockData=>',mockData);
        
          return(
            <div className=''>
            <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-3 grid-rows-3 ">
            <div className="p-6 flex flex-col items-center ">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                {icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4 text-center">
                {description}
              </p>
              <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none transition-all duration-300">
                Explore Now
              </button>
            </div>
          </div>
            </div>
          )
      })}
  <Footer/>
  </div>

  )
}

export default page
