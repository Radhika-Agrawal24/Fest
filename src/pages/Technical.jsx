import EventCard from "../components/EventCard";
import events from "../data/events";

function Technical() {
  // Filter only events with category "technical"
  const technicalEvents = events.filter(
    (event) => event.category === "technical"
  );

  return (
    <section id="technical" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Technical Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {technicalEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}

export default Technical;