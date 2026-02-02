import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Programming Hero",
    role: "Frontend Developer",
    time: "July 2025 – Feb 2026",
    side: "left",
  },
  {
    company: "Varendra University",
    role: "UNDERGRADUATE CONFERENCE ON INTELLIGENT COMPUTING AND SYSTEMS UCICS 2025",
    time: "26th-27th February 2025",
    side: "right",
  },
];

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto py-7 px-4">
      <h2 className="text-4xl font-bold text-center mb-20">💼 Experience </h2>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-indigo-900 -translate-x-1/2"></div>
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`relative flex mb-7 ${
              item.side === "right" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`
                w-full md:w-[400px]
                bg-orange-500 p-6 rounded-lg shadow-lg
                relative transition-all duration-500
                hover:scale-[1.02]
                ${item.side === "right" ? "md:ml-[52%]" : "md:mr-[52%]"} `}
            >
              <h3 className="text-xl font-bold">{item.company}</h3>
              <p className="font-medium">{item.role}</p>
              <span className="text-sm">{item.time}</span>
              <div
                className={`
                  hidden md:block absolute top-6
                  w-0 h-0
                  border-t-8 border-b-8 border-transparent
                  ${
                    item.side === "right"
                      ? "-left-3 border-r-[12px] border-r-orange-500"
                      : "-right-3 border-l-[12px] border-l-orange-500"
                  }
                `}
              ></div>
            </div>
            <div
              className=" absolute left-1/2 -translate-x-1/2 top-6
                w-8 h-8 md:w-11 md:h-11 bg-white
                border-2 md:border-4 border-orange-500
                rounded-full items-center justify-center z-10 
                hidden md:flex "  >
              <FaBriefcase className="text-indigo-900 text-sm md:text-base" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
