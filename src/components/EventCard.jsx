import { useState } from "react";

function EventCard({
  title,
  description,
  image,
  rules = [],
  faculty = [],
  students = []
}) {
  const [openRules, setOpenRules] = useState(false);
  const [openCoordinator, setOpenCoordinator] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300">
        
        {/* Image */}
        <div className="h-60 bg-gray-300">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-t-xl"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

         <div className="flex justify-center gap-3">
            {/* Rules Button */}
            <button
              onClick={() => setOpenRules(true)}
              className="bg-[#0a1a3a] text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              View Rules
            </button>

            {/* Coordinator Button */}
            <button
              onClick={() => setOpenCoordinator(true)}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Coordinator
            </button>
          </div>
        </div>
      </div>

      {/* Rules Modal */}
      {openRules && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-md w-full">
            
            <button
              onClick={() => setOpenRules(false)}
              className="absolute top-2 right-3 text-xl font-bold text-red-500"
            >
              ×
            </button>

            <h4 className="font-semibold text-lg mb-3 text-blue-700">
              Event Rules
            </h4>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Coordinator Modal */}
      {openCoordinator && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-md w-full">
            
            <button
              onClick={() => setOpenCoordinator(false)}
              className="absolute top-2 right-3 text-xl font-bold text-red-500"
            >
              ×
            </button>

            <h4 className="font-semibold text-lg mb-3 text-gray-700">
              Coordinator Details
            </h4>

            <div className="space-y-4 text-gray-700 text-sm">

              {/* Faculty */}
              {faculty.length > 0 && (
                <div>
                  <strong>Faculty:</strong>
                  <ul className="list-disc pl-5">
                    {faculty.map((f, i) => (
                      <li key={i}>
                        {f.name} - {f.phone}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Students */}
              {students.length > 0 && (
                <div>
                  <strong>Students:</strong>
                  <ul className="list-disc pl-5">
                    {students.map((s, i) => (
                      <li key={i}>
                        {s.name} - {s.phone}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;