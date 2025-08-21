// import { useState } from "react";

// export default function Contact({ API_BASE }) {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [status, setStatus] = useState(null);

//   const submit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");
//     const res = await fetch(`${API_BASE}/contact/`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json"},
//       body: JSON.stringify(form)
//     });
//     if (res.ok) {
//       setStatus("done");
//       setForm({ name: "", email: "", phone: "", message: "" });
//     } else {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-dark rounded-2xl shadow-lg text-gold">
//       <h2 className="text-3xl font-bold mb-6 border-b border-gold pb-2">Contact Us</h2>
//       <form onSubmit={submit} className="space-y-4">
//         <input
//           className="w-full bg-black border border-gold text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
//           placeholder="Name"
//           value={form.name}
//           onChange={e=>setForm({...form, name:e.target.value})}
//         />
//         <input
//           className="w-full bg-black border border-gold text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
//           placeholder="Email"
//           value={form.email}
//           onChange={e=>setForm({...form, email:e.target.value})}
//         />
//         <input
//           className="w-full bg-black border border-gold text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
//           placeholder="Phone"
//           value={form.phone}
//           onChange={e=>setForm({...form, phone:e.target.value})}
//         />
//         <textarea
//           className="w-full bg-black border border-gold text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
//           rows="5"
//           placeholder="Message"
//           value={form.message}
//           onChange={e=>setForm({...form, message:e.target.value})}
//         />
//         <button className="bg-gold text-black font-semibold rounded px-6 py-3 hover:bg-yellow-500 transition">
//           Send
//         </button>
//       </form>
//       {status === "loading" && <p className="mt-3 text-gray-300">Sending...</p>}
//       {status === "done" && <p className="mt-3 text-green-400">Message sent.</p>}
//       {status === "error" && <p className="mt-3 text-red-500">Something went wrong.</p>}
//     </div>
//   );
// }

///***************************************************** */
// import { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// export default function Contact({ API_BASE }) {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [status, setStatus] = useState(null);

//   const submit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");
//     const res = await fetch(`${API_BASE}/contact/`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form)
//     });
//     if (res.ok) {
//       setStatus("done");
//       setForm({ name: "", email: "", phone: "", message: "" });
//     } else {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50 p-6" dir="rtl">

//       {/* الفورم */}
//       <div className="w-full lg:w-1/2 max-w-lg bg-white shadow-lg rounded-2xl p-6 text-black mb-10">
//         <h2 className="text-3xl font-bold mb-6 border-b border-sky-600 pb-2">تواصل معنا</h2>
//         <form onSubmit={submit} className="space-y-4">
//           <input
//             className="w-full bg-white border border-sky-600 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
//             placeholder="الاسم"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//           />
//           <input
//             className="w-full bg-white border border-sky-600 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
//             placeholder="البريد الإلكتروني"
//             value={form.email}
//             onChange={e => setForm({ ...form, email: e.target.value })}
//           />
//           <input
//             className="w-full bg-white border border-sky-600 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
//             placeholder="رقم الهاتف"
//             value={form.phone}
//             onChange={e => setForm({ ...form, phone: e.target.value })}
//           />
//           <textarea
//             className="w-full bg-white border border-sky-600 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
//             rows="4"
//             placeholder="الرسالة"
//             value={form.message}
//             onChange={e => setForm({ ...form, message: e.target.value })}
//           />
//           <button className="bg-sky-600 text-white font-semibold rounded px-6 py-3 hover:bg-sky-700 transition">
//             إرسال
//           </button>
//         </form>
//         {status === "loading" && <p className="mt-3 text-gray-500">جاري الإرسال...</p>}
//         {status === "done" && <p className="mt-3 text-green-500">تم إرسال الرسالة بنجاح.</p>}
//         {status === "error" && <p className="mt-3 text-red-500">حدث خطأ، حاول مرة أخرى.</p>}
//       </div>

//       {/* وسائل التواصل الاجتماعي */}
//       <div className="flex flex-col items-center space-y-4">
//         <p className="text-xl font-semibold text-sky-700">تابعنا على</p>
//         <div className="flex space-x-6">
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transform hover:scale-110 hover:text-blue-800 transition duration-300"
//           >
//             <FaFacebookF size={32} />
//           </a>
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transform hover:scale-110 hover:text-pink-500 transition duration-300"
//           >
//             <FaInstagram size={32} />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transform hover:scale-110 hover:text-blue-700 transition duration-300"
//           >
//             <FaLinkedinIn size={32} />
//           </a>
//           <a
//             href="https://wa.me/1234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transform hover:scale-110 hover:text-green-500 transition duration-300"
//           >
//             <FaWhatsapp size={32} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



//--------------------------------

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Contact({ API_BASE }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch(`${API_BASE}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setStatus("done");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-sky-50 pt-24 pb-12" dir="rtl">

      {/* الفورم */}
      <div className="w-full lg:w-1/2 max-w-lg bg-gray-100 rounded-2xl shadow-lg p-6 text-black">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-700">تواصل معنا</h2>
        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full bg-gray-50 border border-gray-300 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="الاسم"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full bg-gray-50 border border-gray-300 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full bg-gray-50 border border-gray-300 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
          <textarea
            className="w-full bg-gray-50 border border-gray-300 text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
            rows="4"
            placeholder="الرسالة"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button className="bg-sky-600 text-white font-semibold rounded px-6 py-3 hover:bg-sky-700 transition block mx-auto">
            إرسال
          </button>
        </form>
        {status === "loading" && <p className="mt-3 text-gray-500 text-center">جاري الإرسال...</p>}
        {status === "done" && <p className="mt-3 text-green-500 text-center">تم إرسال الرسالة بنجاح.</p>}
        {status === "error" && <p className="mt-3 text-red-500 text-center">حدث خطأ، حاول مرة أخرى.</p>}
      </div>

      {/* أيقونات التواصل */}
      <div className="flex flex-col items-center space-y-2 mt-8">
        <p className="text-3xl text-sky-700 font-semibold mb-3 text-center">تابعنا على</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/1.UNBORDERS/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-125"
            style={{ color: "#1877F2" }}
          >
            <FaFacebookF size={50} />
          </a>
          <a
            href="https://www.instagram.com/un.borders/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-125"
            style={{ color: "#E4405F" }}
          >
            <FaInstagram size={50} />
          </a>
          <a
            href="https://x.com/UNBorders1"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-125"
            style={{ color: "#0A66C2" }}
          >
            <FaTwitter size={50} />
          </a>
          <a
            href="https://wa.me/966509565618"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-125"
            style={{ color: "#25D366" }}
          >
            <FaWhatsapp size={50} />
          </a>
        </div>
      </div>

    </div>
  );
}
