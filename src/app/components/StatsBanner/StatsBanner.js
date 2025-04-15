export default function StatsBanner() {
  return (
    <div className="py-10 px-6 text-center max-w-[1050px] mx-auto">
      <h2 className="text-1xl md:text-2xl font-extralight text-gray-800">
        We take pride in delivering scalable software, that drive real business
        outcomes. With years of hands-on experience, a growing global client
        base, our work speaks through results.
      </h2>

      <div className="mt-6 bg-secondary text-white rounded-3xl flex flex-wrap justify-center gap-6 p-6">
        <StatBox value="95%" label="Client Satisfaction Rate" />
        <StatBox value="20+" label="Clients Served" />
        <StatBox value="30+" label="Years of Experience" />
        <StatBox value="< 4 weeks" label="Avg MVP Delivered Time" />
      </div>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="text-center mx-4">
      <p className="text-4xl font-bold mb-3">{value}</p>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}
