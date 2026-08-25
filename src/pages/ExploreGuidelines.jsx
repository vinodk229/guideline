import React from 'react'
import { categories } from '../data/guideline'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { cancer, caregivers } from '../data/cancerTreatment'
const ExploreGuidelines = () => {
  return (
    <>
    <nav className="breadcrumb-banner relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
              <h1 className="text-2xl lg:text-4xl font-medium text-white">
                The Evidence-Based  <span className="font-medium">Guidelines</span>
              </h1>

              <div className="flex items-center gap-3 mt-4 text-sm">
              <a
                  href="/" className="text-gray-300 font-medium hover:text-blue-300 transition"
              >
                  Home
              </a>

              <span className="text-slate-400">&gt;</span>

              <span className="text-white">
                The Evidence-Based Guidelines
              </span>
              </div>
          </div>

          <div className="flex-grow-0 lg:flex items-center gap-5 bg-violet-500 px-6 py-3 rounded-full shadow-lg hidden">
              <button className="text-white hover:scale-110 transition">
                <BsTwitterX/>
              </button>

              <button className="text-white hover:scale-110 transition">
              <FaLinkedinIn/>
              </button>

              <button className="text-white hover:scale-110 transition">
                <FaFacebookF/>
              </button>
              <button className="text-white hover:scale-110 transition">
                <FaInstagram/>
              </button>
          </div>
      </div>
      </div>
    </nav>
    
  <div className="container mx-auto w-full px-4 py-10 sm:px-6 lg:px-8">

    <div className='py-5 bg-gray-100 p-4 rounded-xl mb-5'>
       <h3 className='text-2xl mb-4'>Release of evidence-based guidelines for the use of STEM cell therapy</h3>
       <p className='text-justify text-gray-600'>The Evidence based guidelines for the use of stem cell therapy in Neurological, Orthopedic, Pediatric and Cardiac disease conditions have been updated by adding a subgroup analysis based on the level of manipulation of stem cells in the included studies. In view of the update, the previous guidelines in the above four conditions stand null and void. The level of manipulation done to develop stem cell and stem cell derived products was interpreted by DHR secretariat into less than or more than minimal manipulation as defined by CDSCO (Annexed in guidelines) and the information provided in the trial itself.</p>
    </div>

  {/* Guidelines */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
    {categories.map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6"
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-base leading-6 text-slate-800 transition-colors group-hover:text-blue-600">
              {item.title}
            </h3>

            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
            >
              View PDF
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom animation */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      </div>
    ))}
  </div>
  <div className='py-5 bg-gray-100 p-4 rounded-xl mb-5 mt-5'>
       <h3 className='text-xl mb-4'>On the Eve of World Cancer Day Honorable Union Health Minister Releases Evidence Based Guidelines for Lung Cancer Treatment and Palliation (3 February 2026)</h3>
       <p className='text-justify text-gray-600'>The Department of Health Research today marked a significant milestone in India’s cancer care journey with the official release of the National Evidence-Based Guidelines for Lung Cancer Treatment and Palliation by the Hon’ble Union Minister for Health & Family Welfare, Shri Jagat Prakash Nadda. Developed through a rigorous, transparent, and multidisciplinary process, these guidelines provide 15 key evidence-informed recommendations focused on the management and palliation of lung cancer, tailored to the Indian healthcare context. The guidelines aim to promote standardized, high-quality clinical care, reduce unwarranted variations in practice, and strengthen decision-making across levels of healthcare delivery. This initiative reflects the Government of India’s continued commitment to improving cancer outcomes and integrating evidence-based approaches into national health policy and clinical practice.</p>
    </div>
    <h4 className='mb-4 font-semibold'>The Evidence-Based Guidelines for Lung Cancer Treatment and Palliation can be accessed below:</h4>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    {cancer.map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6"
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-base leading-6 text-slate-800 transition-colors group-hover:text-blue-600">
              {item.title}
            </h3>

            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
            >
              View PDF
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom animation */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      </div>
    ))}
  </div>

   <h4 className='py-5 font-semibold'>Plain language summary for patients, caregivers and families can be accessed here</h4>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    {caregivers.map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6"
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-base leading-6 text-slate-800 transition-colors group-hover:text-blue-600">
              {item.title}
            </h3>

            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
            >
              View PDF
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom animation */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      </div>
    ))}
  </div>
</div>
</>
  )
}

export default ExploreGuidelines