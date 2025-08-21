// import React, { useEffect, useState } from "react";

// export default function Projects() {
//   const API_BASE = "http://127.0.0.1:8000/api";
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`${API_BASE}/projects/`)
//       .then((r) => {
//         if (!r.ok) throw new Error("فشل في جلب المشاريع");
//         return r.json();
//       })
//       .then((data) => {
//         setProjects(data);
//         setLoading(false);
//       })
//       .catch((e) => {
//         console.error(e);
//         setError(e.message);
//         setLoading(false);
//       });
//   }, []);

//   const renderCard = (p) => (
//     <div
//       key={p.id}
//       className="bg-gray-800 rounded-xl shadow p-4 transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-white"
//       dir="rtl"
//     >
//       {p.images && p.images.length > 0 && (
//         <img
//           src={p.images[0].image}
//           alt={p.title}
//           className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
//         />
//       )}
//       <h3 className="text-xl font-semibold mb-2 text-right">{p.title}</h3>
//       <p className="text-right">{p.description}</p>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-10 bg-gray-900 min-h-screen">
//         <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center py-10 bg-gray-900 min-h-screen text-gray-200">
//         <p className="text-red-500 mb-4">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 transition"
//         >
//           إعادة المحاولة
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-900 min-h-screen py-16" dir="rtl">
//       <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">
//         مشاريعنا
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
//         {projects.map(renderCard)}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoadingProjects(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoadingProjects(false);
      });
  }, []);

  const renderCard = (project) => (
    <div
      key={project.id}
      className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transform transition-all duration-300"
    >
      {project.images && project.images.length > 0 && (
        <img
          src={project.images[0].image}
          alt={project.title}
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
      <p className="text-gray-600 text-sm">{project.description}</p>
    </div>
  );

  return (
    <div className="bg-sky-50 min-h-screen py-16" dir="rtl">
      <h2 className="text-4xl font-bold text-center mb-12 text-sky-700">
        مشاريعنا
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {loadingProjects ? (
          <div className="col-span-3 flex justify-center py-10">
            <div className="w-12 h-12 border-4 border-sky-700 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          projects.map(p => renderCard(p))
        )}
      </div>
    </div>
  );
}
