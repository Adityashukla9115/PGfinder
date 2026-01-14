import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PGDetail() {
  const { id } = useParams();
  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/pgs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPg(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading PG details...</p>
      </div>
    );
  }

  if (!pg || pg.message === "PG not found") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">PG not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Back link */}
        <Link to="/" className="text-blue-600 text-sm hover:underline">
          ← Back to listings
        </Link>

        {/* Card */}
        <div className="bg-white border rounded-lg p-6 mt-4">
          {/*images*/}
          <div className="flex gap-2">
            {pg.images && pg.images.length > 0 && (
              <div className="flex grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {pg.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${pg.name} ${i + 1}`}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
            {pg.images && pg.images.length > 0 && (
              <div className="flex grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ">
                {pg.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${pg.name} ${i + 1}`}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
            <div className="flex justify-center items-center">
              +15 
            </div>
          </div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h1 className="text-2xl font-bold text-gray-900">{pg.name}</h1>

            <p className="text-green-600 text-xl font-semibold mt-2 sm:mt-0">
              ₹{pg.rent}
            </p>
          </div>
          {/* Info */}
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">Location:</span> {pg.location},{" "}
              {pg.city}
            </p>
            <p className="capitalize">
              <span className="font-medium">Gender:</span> {pg.gender}
            </p>
            <p>
              <span className="font-medium">Contact:</span> {pg.contact}
            </p>
          </div>
          {/* Amenities */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Amenities</h3>

            {pg.amenities.length === 0 ? (
              <p className="text-sm text-gray-500">No amenities listed</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {pg.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PGDetail;
