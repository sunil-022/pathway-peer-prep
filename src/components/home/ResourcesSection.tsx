
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookOpenIcon, FileTextIcon, MessageSquareIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured resources
const resources = [
  {
    id: 1,
    title: "Resume Writing Masterclass",
    category: "Career Development",
    description: "Learn how to craft a standout resume that will get you noticed by recruiters.",
    icon: <FileTextIcon className="h-10 w-10 text-career-primary" />,
    link: "/resources/resume-writing"
  },
  {
    id: 2,
    title: "Technical Interview Preparation",
    category: "Interview Skills",
    description: "Essential tips and practice problems to ace your technical interviews.",
    icon: <MessageSquareIcon className="h-10 w-10 text-career-primary" />,
    link: "/resources/technical-interviews"
  },
  {
    id: 3,
    title: "Study Materials for CS Majors",
    category: "Academic Resources",
    description: "Comprehensive collection of study materials for computer science courses.",
    icon: <BookOpenIcon className="h-10 w-10 text-career-primary" />,
    link: "/resources/cs-materials"
  }
];

export const ResourcesSection = () => {
  return (
    <section className="py-12 container bg-career-light rounded-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title">Valuable Resources</h2>
        <Button asChild variant="outline">
          <Link to="/resources">Browse All</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="card-hover bg-white">
            <CardHeader>
              <div className="mb-4">
                {resource.icon}
              </div>
              <CardTitle className="text-xl">{resource.title}</CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="w-full justify-start hover:text-career-primary">
                <Link to={resource.link} className="flex items-center">
                  <span>Access Resource</span>
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
