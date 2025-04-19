import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";

const projects = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    projectNumber: '01',
  },
  {
    id: 2,
    projectNumber: '02',
  },
  {
    id: 3,
    projectNumber: '03',
  },
  {
    id: 4,
    projectNumber: '04',
  },
];

const Projects = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <h2 className='text-5xl font-medium mb-20'>
            My Projects
        </h2>
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`w-1/2 mb-8 ${
              index % 2 === 0 ? 'md:self-start' : 'md:self-end'
            }`}
          >
            <div className="relative">
              <img
                src={index % 2 ? pic1 : pic2}
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-0 -left-12 p-4 text-4xl font-bold text-white">
                Project {project.projectNumber}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;