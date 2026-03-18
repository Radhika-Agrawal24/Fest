import EventCard from "../components/EventCard";
import events from "../data/events";

function Cultural() {

  // Filter only cultural events
  const culturalEvents = events.filter(
    (event) => event.category === "cultural"
  );

  return (
    <section id="cultural" className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        Cultural Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {culturalEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}

      </div>

    </section>
  );
}

export default Cultural;