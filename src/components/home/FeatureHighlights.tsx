
import { BriefcaseIcon, BookOpenIcon, UsersIcon, FileTextIcon } from "lucide-react";

const features = [
  {
    icon: <BriefcaseIcon className="h-10 w-10 text-career-primary" />,
    title: "Job Matching",
    description: "Discover opportunities tailored to your skills, interests, and career goals."
  },
  {
    icon: <BookOpenIcon className="h-10 w-10 text-career-primary" />,
    title: "Study Resources",
    description: "Access high-quality study materials, guides, and practice materials."
  },
  {
    icon: <UsersIcon className="h-10 w-10 text-career-primary" />,
    title: "Peer Networking",
    description: "Connect with fellow students to collaborate, learn, and grow together."
  },
  {
    icon: <FileTextIcon className="h-10 w-10 text-career-primary" />,
    title: "Resource Sharing",
    description: "Share notes, projects, and insights with your academic community."
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-16 container">
      <h2 className="section-title text-center">How PathwayPeer Helps You</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Our platform is designed to provide you with all the tools and resources you need to excel in your academic and professional journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 p-3 rounded-full bg-career-light">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
