export const companyInfo = {
  name: "Vikram Aditya Enterprises",
  shortName: "Vikram Aditya",
  tagline: "Safety • Comfort • Peace of Mind",
  heroHeading: "Your Safety, Our Priority!",
  heroSubheading: "Complete Safety Solutions for Your Home, Family & Buildings.",
  heroDescription:
    "We provide high-quality safety nets and invisible grill solutions to protect your children, pets, and loved ones while maintaining the beauty of your space.",
  aboutDescription:
    "Vikram Aditya Enterprises is dedicated to providing reliable and high-quality safety solutions for residential and commercial spaces. We specialize in installing safety nets and invisible grills that provide protection, comfort, and peace of mind.\n\nOur goal is to make homes, apartments, and buildings safer for families, children, and pets through quality products and professional installation.",
  phone: "7095714788",
  phoneFormatted: "+91 70957 14788",
  whatsappNumber: "917095714788",
  address: "No. 17, Vivekananda Nagar, Sai Ganesh Nagar 1st Main Road, Vivekanandar Nagar, Pallikaranai, Chennai – 600100.",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600100",
  googleMapsQuery: "https://www.google.com/maps/search/?api=1&query=No.+17+Vivekananda+Nagar+Sai+Ganesh+Nagar+1st+Main+Road+Vivekanandar+Nagar+Pallikaranai+Chennai+600100",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.756214644023!2d80.1983084!3d12.9233852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dca2e9cbcf9%3A0xb35a0937a0752541!2sPallikaranai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  workingHours: "Monday – Sunday: 8:00 AM – 9:00 PM (All 7 Days)",
  highlights: [
    {
      title: "Quality Materials",
      description: "Garware & high-grade UV-stabilized nylon/HDPE nets and marine grade 316 stainless steel invisible grills.",
    },
    {
      title: "Professional Installation",
      description: "Expert technicians with 10+ years of skilled rigging and installation experience ensuring zero structural damage.",
    },
    {
      title: "Reliable Safety Solutions",
      description: "Certified load-bearing strength up to 300+ kg, weather-resistant, and aesthetically discreet.",
    },
    {
      title: "Customer Satisfaction",
      description: "Free doorstep inspection, transparent upfront quotation, and 5-8 years comprehensive warranty.",
    },
  ],
  stats: [
    { label: "Installations Completed", value: "5,000+" },
    { label: "Years of Experience", value: "10+" },
    { label: "Happy Families & Clients", value: "4,800+" },
    { label: "Warranty Coverage", value: "Up to 8 Yrs" },
  ],
};

/**
 * Generates direct WhatsApp URL with pre-filled message
 * @param {string} serviceName - Optional service name
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppUrl(serviceName) {
  const base = `https://wa.me/${companyInfo.whatsappNumber}`;
  let message = "";
  if (serviceName) {
    message = `Hello Vikram Aditya Enterprises, I am interested in your ${serviceName} service. Please share the details and pricing.`;
  } else {
    message = `Hello Vikram Aditya Enterprises, I am interested in your safety nets and invisible grill installation services. Please share the details and pricing.`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}
