// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

// export default function Home({ API_BASE }) {
//   const [site, setSite] = useState(null);
//   const [services, setServices] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [partners, setPartners] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(true);
//   const [loadingProjects, setLoadingProjects] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE}/settings/`)
//       .then((r) => r.json())
//       .then((d) => setSite(d[0] || null));

//     fetch(`${API_BASE}/services/`)
//       .then((r) => r.json())
//       .then((data) => {
//         setServices(data);
//         setLoadingServices(false);
//       })
//       .catch(() => setLoadingServices(false));

//     fetch(`${API_BASE}/projects/`)
//       .then((r) => r.json())
//       .then((data) => {
//         setProjects(data);
//         setLoadingProjects(false);
//       })
//       .catch(() => setLoadingProjects(false));

//     fetch(`${API_BASE}/testimonials/`)
//       .then((r) => r.json())
//       .then(setTestimonials);

//     fetch(`${API_BASE}/partners/`)
//       .then((r) => r.json())
//       .then(setPartners);
//   }, [API_BASE]);

//   const renderCard = (item, type) => (
//     <motion.div
//       key={item.id}
//       className="bg-white/90 rounded-2xl shadow-md p-4 border border-sky-200 flex flex-col justify-between"
//       dir="rtl"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4 }}
//     >
//       {item.image && (
//         <img
//           src={item.image}
//           alt={item.title}
//           className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
//         />
//       )}
//       {item.images?.length > 0 && (
//         <img
//           src={item.images[0].image}
//           alt={item.title}
//           className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
//         />
//       )}
//       <h3 className="text-xl font-semibold mb-2 text-right text-sky-700">
//         {item.title}
//       </h3>
//       <p className="text-right text-gray-700 line-clamp-3">{item.description}</p>
//       {type === "service" && (
//         <a
//           href="#projects"
//           className="mt-4 self-end bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition"
//         >
//           اعرف المزيد
//         </a>
//       )}
//     </motion.div>
//   );

//   const testimonialSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 4000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
//   };

//   const partnerSettings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 640, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <div className="bg-sky-50 text-gray-800" dir="rtl">
//       {/* Hero */}
//       {site && (
//         <section
//           className="w-full h-screen flex flex-col items-center justify-center text-center relative"
//           style={{
//             backgroundImage: `url(${site.background_image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/50"></div>

//           <div className="relative z-10 flex flex-col items-center px-6">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 drop-shadow-2xl mb-6 text-center">
//               {site.company_name || "UN-BORDERS"}
//             </h1>
//             <p className="text-2xl md:text-3xl font-semibold text-white mb-6 drop-shadow-lg">
//               {site.slogan || "إبــــداع في التصميـم .... الــــــتزام في التنفيــذ"}
//             </p>
//             <Link
//               to="/contact"
//               className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition"
//             >
//               تواصل معنا
//             </Link>
//           </div>
//         </section>
//       )}

//       {/* خدماتنا */}
//       <section id="services" className="py-20 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
//           خدماتنا
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {loadingServices ? (
//             <div className="col-span-3 flex justify-center py-10">
//               <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ) : (
//             services.map((s) => renderCard(s, "service"))
//           )}
//         </div>
//       </section>

//       {/* مشاريعنا */}
//       <section id="projects" className="py-20 bg-sky-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
//             مشاريعنا
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {loadingProjects ? (
//               <div className="col-span-3 flex justify-center py-10">
//                 <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               projects.map((p) => renderCard(p, "project"))
//             )}
//           </div>
//         </div>
//       </section>

//       {/* آراء عملائنا */}
//       <section className="py-20 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
//           آراء عملائنا
//         </h2>
//         <Slider {...testimonialSettings}>
//           {testimonials.map((t) => (
//             <div key={t.id} className="px-3">
//               <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-sky-200 h-full flex flex-col justify-between">
//                 <p className="italic text-right text-gray-700 mb-4">
//                   "{t.comment}"
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <h4 className="font-semibold text-sky-600">{t.name}</h4>
//                   <div className="flex">
//                     {Array.from({ length: t.rating }).map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

// {/* شركائنا */}
// <section className="bg-sky-50 py-16">
//   <div className="max-w-6xl mx-auto text-center">
//     <h2 className="text-3xl font-semibold mb-8 text-gray-800">Our Partners</h2>
    
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
//       {partners.map((partner, index) => (
//         <div
//           key={index}
//           className="transform transition-transform duration-300 hover:scale-110"
//         >
//           <img
//             src={partner.logo}
//             alt={partner.name}
//             className="h-16 sm:h-20 md:h-24 w-auto object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//     </div>
//   );
// }

//----------------------------------------------------------










// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

// export default function Home({ API_BASE }) {
//   const [site, setSite] = useState(null);
//   const [services, setServices] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [partners, setPartners] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(true);
//   const [loadingProjects, setLoadingProjects] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE}/settings/`)
//       .then((r) => r.json())
//       .then((d) => setSite(d[0] || null));

//     fetch(`${API_BASE}/services/`)
//       .then((r) => r.json())
//       .then((data) => {
//         setServices(data);
//         setLoadingServices(false);
//       })
//       .catch(() => setLoadingServices(false));

//     fetch(`${API_BASE}/projects/`)
//       .then((r) => r.json())
//       .then((data) => {
//         setProjects(data);
//         setLoadingProjects(false);
//       })
//       .catch(() => setLoadingProjects(false));

//     fetch(`${API_BASE}/testimonials/`)
//       .then((r) => r.json())
//       .then(setTestimonials);

//     fetch(`${API_BASE}/partners/`)
//       .then((r) => r.json())
//       .then(setPartners);
//   }, [API_BASE]);

//   const renderCard = (item, type) => (
//     <motion.div
//       key={item.id}
//       className="bg-white/90 rounded-2xl shadow-md p-4 border border-sky-200 flex flex-col justify-between"
//       dir="rtl"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4 }}
//     >
//       {item.image && (
//         <img
//           src={item.image}
//           alt={item.title}
//           className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
//         />
//       )}
//       {item.images?.length > 0 && (
//         <img
//           src={item.images[0].image}
//           alt={item.title}
//           className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
//         />
//       )}
//       <h3 className="text-xl font-semibold mb-2 text-right text-sky-700">
//         {item.title}
//       </h3>
//       <p className="text-right text-gray-700 line-clamp-3">{item.description}</p>
//       {type === "service" && (
//         <a
//           href="#projects"
//           className="mt-4 self-end bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition"
//         >
//           اعرف المزيد
//         </a>
//       )}
//     </motion.div>
//   );

//   const testimonialSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 4000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
//   };

//   const partnerSettings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 3000,
//     slidesToShow: 2, // يعرض 2 شعار
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="bg-sky-50 text-gray-800" dir="rtl">
//       {/* Hero */}
//       {site && (
//         <section
//           className="w-full h-screen flex flex-col items-center justify-center text-center relative"
//           style={{
//             backgroundImage: `url(${site.background_image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/50"></div>

//           <div className="relative z-10 flex flex-col items-center px-6">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 drop-shadow-2xl mb-6 text-center">
//               {site.company_name || "UN-BORDERS"}
//             </h1>
//             <p className="text-2xl md:text-3xl font-semibold text-white mb-6 drop-shadow-lg">
//               {site.slogan || "إبــــداع في التصميـم .... الــــــتزام في التنفيــذ"}
//             </p>
//             <Link
//               to="/contact"
//               className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition"
//             >
//               تواصل معنا
//             </Link>
//           </div>
//         </section>
//       )}

//       {/* خدماتنا */}
//       <section id="services" className="py-20 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
//           خدماتنا
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {loadingServices ? (
//             <div className="col-span-3 flex justify-center py-10">
//               <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ) : (
//             services.map((s) => renderCard(s, "service"))
//           )}
//         </div>
//       </section>

//       {/* مشاريعنا */}
//       <section id="projects" className="py-20 bg-sky-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
//             مشاريعنا
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {loadingProjects ? (
//               <div className="col-span-3 flex justify-center py-10">
//                 <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               projects.map((p) => renderCard(p, "project"))
//             )}
//           </div>
//         </div>
//       </section>

//       {/* آراء عملائنا */}
//       <section className="py-20 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
//           آراء عملائنا
//         </h2>
//         <Slider {...testimonialSettings}>
//           {testimonials.map((t) => (
//             <div key={t.id} className="px-3">
//               <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-sky-200 h-full flex flex-col justify-between">
//                 <p className="italic text-right text-gray-700 mb-4">
//                   "{t.comment}"
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <h4 className="font-semibold text-sky-600">{t.name}</h4>
//                   <div className="flex">
//                     {Array.from({ length: t.rating }).map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* شركائنا */}
//       <section className="bg-sky-50 py-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12 text-sky-700">شركاؤنا</h2>

//           <Slider {...partnerSettings}>
//             {partners.map((partner, index) => (
//               <div key={index} className="px-6 flex justify-center">
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="h-28 sm:h-32 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </div>
//   );
// }


//********************************************** */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Home({ API_BASE }) {
  const [site, setSite] = useState(null);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/settings/`)
      .then((r) => r.json())
      .then((d) => setSite(d[0] || null));

    fetch(`${API_BASE}/services/`)
      .then((r) => r.json())
      .then((data) => {
        setServices(data);
        setLoadingServices(false);
      })
      .catch(() => setLoadingServices(false));

    fetch(`${API_BASE}/projects/`)
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
        setLoadingProjects(false);
      })
      .catch(() => setLoadingProjects(false));

    fetch(`${API_BASE}/testimonials/`)
      .then((r) => r.json())
      .then(setTestimonials);

    fetch(`${API_BASE}/partners/`)
      .then((r) => r.json())
      .then(setPartners);
  }, [API_BASE]);

  const renderCard = (item, type) => (
    <motion.div
      key={item.id}
      className="bg-white/90 rounded-2xl shadow-md p-4 border border-sky-200 flex flex-col justify-between"
      dir="rtl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
        />
      )}
      {item.images?.length > 0 && (
        <img
          src={item.images[0].image}
          alt={item.title}
          className="rounded-lg mb-4 w-full aspect-[4/3] object-cover"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-right text-sky-700">
        {item.title}
      </h3>
      <p className="text-right text-gray-700 line-clamp-3">{item.description}</p>
      {type === "service" && (
        <a
          href="#projects"
          className="mt-4 self-end bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition"
        >
          اعرف المزيد
        </a>
      )}
    </motion.div>
  );

  const testimonialSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  const partnerSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-sky-50 text-gray-800" dir="rtl">
      {/* Hero */}
      {site && (
        <section
          className="w-full h-screen flex flex-col items-center justify-center text-center relative"
          style={{
            backgroundImage: `url(${site.background_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col items-center px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 drop-shadow-2xl mb-6 text-center">
              {site.company_name || "UN-BORDERS"}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-6 drop-shadow-lg">
              {site.slogan || "إبــــداع في التصميـم .... الــــــتزام في التنفيــذ"}
            </p>
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition"
            >
              تواصل معنا
            </Link>
          </div>
        </section>
      )}

      {/* خدماتنا */}
      <section id="services" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
          خدماتنا
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {loadingServices ? (
            <div className="col-span-3 flex justify-center py-10">
              <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            services.map((s) => renderCard(s, "service"))
          )}
        </div>
      </section>

      {/* مشاريعنا */}
      <section id="projects" className="py-20 bg-sky-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
            مشاريعنا
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loadingProjects ? (
              <div className="col-span-3 flex justify-center py-10">
                <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              projects.map((p) => renderCard(p, "project"))
            )}
          </div>
        </div>
      </section>

      {/* آراء عملائنا */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">
          آراء عملائنا
        </h2>
        <Slider {...testimonialSettings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-3">
              <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-sky-200 h-full flex flex-col justify-between">
                <p className="italic text-right text-gray-700 mb-4">
                  "{t.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sky-600">{t.name}</h4>
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* شركائنا */}
      <section className="bg-sky-50 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-sky-700">شركاؤنا</h2>

          <Slider {...partnerSettings}>
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-40">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-28 sm:h-32 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
