// Service section images
import devOps from "../assets/images/devOps.jpg";
import mobile from "../assets/images/mobile.jpg";
import web from "../assets/images/web.jpg";
import ui from "../assets/images/ui.jpg";

//work section images
import ecommerce from "../assets/images/ecommerce.jpg";
import health from "../assets/images/health.jpg";
import education from "../assets/images/education.jpg";

//about us image
import aboutUs from "../assets/images/aboutUs.jpeg";

export const heroSection = {
  headline: "Building Digital Solutions That Drive Growth",
  subText:
    "We craft modern websites, apps, and digital experiences tailored to your business needs.",
  callToActions: ["Get Started", "View Our Work"],
};

export const aboutSection = {
  title: "About Us",
  content:
    "At NewTec Technologies, we believe every business deserves a strong digital presence. Since our founding in 2018, we have been helping startups and enterprises alike create innovative web, mobile, and cloud solutions. Our team combines technical expertise with creative strategy to deliver results that matter.",
  image: aboutUs,
};

export const servicesSection = {
  title: "Our Services",
  services: [
    {
      name: "Web Development",
      description: "Custom websites, portals, and e-commerce platforms.",
      image: web,
    },
    {
      name: "Mobile App Development",
      description:
        "Native and cross-platform applications for iOS and Android.",
      image: mobile,
    },
    {
      name: "UI/UX Design",
      description: "Intuitive interfaces and engaging digital experiences.",
      image: ui,
    },
    {
      name: "Cloud & DevOps",
      description:
        "Scalable, secure, and high-performance infrastructure solutions.",
      image: devOps,
    },
  ],
};

export const workSection = {
  title: "Our Work",
  projects: [
    {
      name: "E-ShopPro",
      category: "E-commerce",
      description: "A scalable e-commerce solution for a retail brand.",
      image: ecommerce,
    },
    {
      name: "HealthTrack",
      category: "Healthcare",
      description: "A cross-platform mobile app for patient monitoring.",
      image: health,
    },
    {
      name: "EduSmart",
      category: "Education",
      description:
        "An interactive e-learning platform with real-time collaboration.",
      image: education,
    },
  ],
};
