import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PGSkeleton from "../components/PGSkeleton";

function Home() {
  const [pgs, setPgs] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [maxRent, setMaxRent] = useState("");

  const clearFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setGender("all");
    setMaxRent("");
  };

  const isFilterActive = search || gender !== "all" || maxRent;

  useEffect(() => {
    fetch("http://localhost:3000/pgs")
      .then((res) => res.json())
      .then((data) => {
        setPgs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400); // debounce delay

    return () => clearTimeout(timer);
  }, [search]);

  // filtering logic
  const filteredPGs = pgs.filter((pg) => {
    const matchesSearch =
      pg.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      pg.location.toLowerCase().includes(search.toLowerCase());

    const matchesGender = gender === "all" || pg.gender === gender;

    const matchesRent = maxRent === "" || pg.rent <= Number(maxRent);

    return matchesSearch && matchesGender && matchesRent;
  });

  {
    loading ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <PGSkeleton key={i} />
        ))}
      </div>
    ) : filteredPGs.length === 0 ? (
      <p className="text-gray-600">No PGs match your filters</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPGs.map((pg) => (
          <Link key={pg._id} to={`/pgs/${pg._id}`} className="block">
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">{pg.name}</h3>
              <p className="text-sm text-gray-600">{pg.location}</p>
              <p className="text-green-600 font-bold mt-2">₹{pg.rent}</p>
              <p className="text-xs text-gray-500 capitalize">
                Gender: {pg.gender}
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find the perfect PG near you
          </h1>
          <p className="text-lg text-blue-100">
            Verified PGs • Transparent pricing • Student friendly
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="-mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name or location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Gender */}
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="any">Any</option>
            </select>

            {/* Max Rent */}
            <input
              type="number"
              placeholder="Max rent (₹)"
              value={maxRent}
              onChange={(e) => setMaxRent(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              disabled={!isFilterActive}
              className={`border rounded-md px-3 py-2 text-sm transition
              ${
                isFilterActive
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* PG List */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {filteredPGs.length === 0 ? (
          <p className="text-gray-600">No PGs match your filters</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPGs.map((pg) => (
              <Link key={pg._id} to={`/pgs/${pg._id}`} className="block">
                <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                  {pg.images && pg.images.length > 0 && (
                    <img
                      src={pg.images[0]}
                      alt={pg.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {pg.name}
                    </h3>
                    <span className="text-sm font-semibold text-green-600">
                      ₹{pg.rent}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">📍 {pg.location}</p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
                      {pg.gender}
                    </span>

                    <span className="text-xs text-gray-400">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
