import { Book, User } from "lucide-react";

const courses = [
  {
    title: "Starting SEO as your Home Based Business",
    level: "Beginner",
    lessons: 8,
    students: 225,
    price: "Free",
    img: "bg-blue-400",
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    level: "Expert",
    lessons: 12,
    students: 70,
    price: "Free",
    img: "bg-purple-400",
  },
  {
    title: "The Complete Guide to Build RESTful API Application",
    level: "All Levels",
    lessons: 20,
    students: 15,
    price: "Free",
    img: "bg-green-400",
  },
  {
    title: "Competitive Strategy Law for Management Consultants",
    level: "All Levels",
    lessons: 15,
    students: 360,
    price: "Free",
    img: "bg-yellow-400",
  },
];

export default function Courses() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Kelas Unggulan UMKM Hebat
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`h-48 ${course.img} flex items-center justify-center`}
              >
                <Book size={64} className="text-white/50" />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
                      {course.level}
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      {course.price}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 h-14">
                    {course.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
                    <span className="flex items-center">
                      <Book size={16} className="mr-1" />
                      {course.lessons} Lessons
                    </span>
                    <span className="flex items-center">
                      <User size={16} className="mr-1" />
                      {course.students} Students
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
