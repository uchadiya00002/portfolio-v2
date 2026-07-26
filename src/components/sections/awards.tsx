// "use client";

// import { motion } from "framer-motion";
// import { SectionWrapper } from "@/components/ui/section-wrapper";
// import { awards } from "@/data/portfolio-data";
// import { Award } from "lucide-react";

// export function Awards() {
//   return (
//     <SectionWrapper id="awards" className="py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-sm font-medium text-primary mb-2 tracking-wider uppercase"
//           >
//             Recognition
//           </motion.p>
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
//           >
//             Awards &{" "}
//             <span className="gradient-text">Achievements</span>
//           </motion.h2>
//         </div>

//         {/* Awards Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {awards.map((award, index) => (
//             <motion.div
//               key={award.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group"
//             >
//               <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
//                 {/* Background gradient */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                 />

//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <div className="text-4xl mb-4">{award.icon}</div>

//                   {/* Content */}
//                   <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
//                     {award.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">
//                     {award.description}
//                   </p>
//                 </div>

//                 {/* Decorative icon */}
//                 <Award
//                   size={80}
//                   className="absolute -bottom-4 -right-4 text-primary/5 group-hover:text-primary/10 transition-colors"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }
import React from 'react'

const awards = () => {
  return (
    <>  </>
  )
}

export default awards