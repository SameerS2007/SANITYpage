import Container from "../components/Container";

function DogCard({ dog }) {
  return (
    <div className="group border-2 border-secondary-700 hover:border-primary-500 bg-secondary-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary-700 to-secondary-800">
        <img
          src={dog.pic}
          alt={dog.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-secondary-50">{dog.name}</h3>
          <p className="text-sm font-semibold text-secondary-300 uppercase tracking-wide">
            {dog.age} year{dog.age === 1 ? "" : "s"} old
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-secondary-200">Favorite Toys</h4>
          <ul className="flex flex-wrap gap-2">
            {dog.favorite_toys.map((toy) => (
              <li
                key={toy}
                className="text-xs font-medium text-secondary-100 rounded-full px-3 py-1 bg-gradient-to-r from-secondary-700 to-primary-900/30 border border-secondary-600"
              >
                {toy}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

async function getDogs() {
  try {
    const res = await fetch("https://md.rtsh.space/sample.json", {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error("Failed to fetch dogs");
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching dogs:', error);
    return [];
  }
}

export const dynamic = 'force-dynamic'

export default async function Photos() {
  const dogs = await getDogs();
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-950 to-secondary-900">
      <Container>
        <div className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block text-5xl mb-4 animate-float">📸</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
              Photos
            </h1>
            <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
              A collection of photos I've taken
            </p>
            <div className="pt-4">
              <div className="inline-block h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
            </div>
          </div>
          {dogs.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dogs.map((dog, index) => (
                <li 
                  key={dog.name} 
                  className="opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <DogCard dog={dog} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-20 space-y-4">
              <div className="text-6xl">📭</div>
              <p className="text-xl text-secondary-300">Unable to load photos at this time.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

