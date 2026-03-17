import { useState } from "react";

function EventCard({ title, description, rules, image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300">
        {/* Dynamic Image */}
        <div className="h-60 bg-gray-300 flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover rounded-t-xl"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#0a1a3a] text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            View Rules
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-50 p-6 rounded-lg relative max-w-md w-full">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-xl font-bold text-red-500 hover:text-red-700"
            >
              ×
            </button>

            <h4 className="font-semibold text-lg mb-3 text-blue-700">Event Rules</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;