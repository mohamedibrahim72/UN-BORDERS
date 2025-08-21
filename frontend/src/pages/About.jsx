import { useEffect, useState } from "react";

export default function About({ settings }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const paragraphs = settings.about_us.split("\n").filter(p => p.trim() !== "");

  return (
    <div className="bg-sky-50 min-h-screen pt-32 pb-16" dir="rtl">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-yellow-50 transition-all duration-500">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-gray-800 text-center text-lg leading-relaxed mb-4 transform transition-all duration-700 hover:text-yellow-600 hover:shadow-lg hover:scale-105 cursor-pointer ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

