
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, BriefcaseIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data for featured jobs
const featuredJobs = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    tags: ["Internship", "Software", "Summer 2025"],
    logo: "TC"
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Brand Solutions",
    location: "New York, NY (Hybrid)",
    tags: ["Part-time", "Marketing", "Fall 2025"],
    logo: "BS"
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "University Research Lab",
    location: "Boston, MA (On-site)",
    tags: ["Research", "Biology", "Spring 2025"],
    logo: "URL"
  }
];

export const FeaturedJobs = () => {
  return (
    <section className="py-12 container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title">Featured Opportunities</h2>
        <Button asChild variant="outline">
          <Link to="/jobs">View All Jobs</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => (
          <Card key={job.id} className="card-hover">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="h-12 w-12 rounded bg-career-secondary/20 flex items-center justify-center text-career-primary font-semibold">
                {job.logo}
              </div>
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="mt-1">{job.company}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-muted-foreground mb-4">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="default" asChild>
                <Link to={`/jobs/${job.id}`}>Apply Now</Link>
              </Button>
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
