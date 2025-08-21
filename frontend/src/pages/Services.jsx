import { useEffect, useState } from "react";

export default function Services({ API_BASE }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/services/`)
      .then((r) => {
        if (!r.ok) throw new Error("فشل تحميل الخدمات");
        return r.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [API_BASE]);

  const renderCard = (s) => (
    <div
      key={s.id}
      className="bg-white rounded-xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105"
      dir="rtl"
    >
      {s.image && (
        <img
          src={s.image}
          alt={s.title}
          className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-right text-gray-900">{s.title}</h3>
      <p className="text-right text-gray-700">{s.description}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 bg-sky-50 min-h-screen">
        <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-10 bg-sky-50 min-h-screen text-gray-900">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 transition"
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }

  return (
    <div className="bg-sky-50 min-h-screen py-16" dir="rtl">
      <h2 className="text-4xl font-bold text-center mb-12 text-sky-700">خدماتنا</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map(renderCard)}
      </div>
    </div>
  );
}
