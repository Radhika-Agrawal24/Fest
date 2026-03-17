import EventCard from "../components/EventCard"

function Cultural() {

  const events = [
    {
      title: "Dance Fusion",
      description: "Group dance competition showcasing creativity and synchronization.",
      rules: "Add rules here later."
    },
    {
      title: "Melody Masters",
      description: "Solo singing competition across genres.",
      rules: "Add rules here later."
    },
    {
      title: "Trash to Treasure",
      description: "Create something innovative using waste materials.",
      rules: "Add rules here later."
    },
    {
      title: "Bandwar",
      description: "Battle of college bands.",
      rules: "Add rules here later."
    },
    {
      title: "Glam Gala",
      description: "Fashion and personality showcase.",
      rules: "Add rules here later."
    }
  ]

  return (
    <section id="cultural" className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        Cultural Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}

      </div>

    </section>
  )
}

export default Cultural