import EventCard from "../components/EventCard"
import events from "../data/events"

function Sports() {

  const sportsEvents = events.filter(
    (event) => event.category === "sports"
  )

  return (
    <section id="sports" className="py-20 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-10">
        Sports Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {sportsEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}

      </div>

    </section>
  )
}

export default Sports