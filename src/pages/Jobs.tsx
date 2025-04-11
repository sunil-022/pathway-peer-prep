
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { BookmarkIcon, BriefcaseIcon, FilterIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    tags: ["Internship", "Software", "Summer 2025"],
    logo: "TC",
    description: "Join our team to develop innovative solutions and gain valuable industry experience in a fast-paced environment."
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Brand Solutions",
    location: "New York, NY (Hybrid)",
    tags: ["Part-time", "Marketing", "Fall 2025"],
    logo: "BS",
    description: "Assist with social media campaigns, content creation, and market research for various client projects."
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "University Research Lab",
    location: "Boston, MA (On-site)",
    tags: ["Research", "Biology", "Spring 2025"],
    logo: "URL",
    description: "Support ongoing research initiatives in molecular biology through lab work and data analysis."
  },
  {
    id: 4,
    title: "Data Science Co-op",
    company: "Analytics Insights",
    location: "Chicago, IL (Remote)",
    tags: ["Co-op", "Data Science", "Fall 2025"],
    logo: "AI",
    description: "Apply machine learning techniques to real-world data sets and help develop predictive models."
  },
  {
    id: 5,
    title: "UX Design Intern",
    company: "Creative Solutions",
    location: "Seattle, WA (Hybrid)",
    tags: ["Internship", "UX/UI", "Summer 2025"],
    logo: "CS",
    description: "Design user interfaces, conduct user research, and collaborate with developers to create intuitive products."
  },
  {
    id: 6,
    title: "Finance Analyst Intern",
    company: "Global Investments",
    location: "Austin, TX (On-site)",
    tags: ["Internship", "Finance", "Spring 2025"],
    logo: "GI",
    description: "Support financial reporting, analysis, and forecasting for various investment portfolios."
  }
];

const Jobs = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-career-primary">Browse Opportunities</h1>
            <p className="text-muted-foreground mt-1">Discover jobs and internships that match your interests</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <FilterIcon className="h-4 w-4" />
              <span>Filters</span>
            </Button>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="relevant">Most relevant</SelectItem>
                <SelectItem value="deadline">Application deadline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Filters sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Keywords..." className="pl-10" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Job Type</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="internship" className="mr-2" />
                      <label htmlFor="internship">Internship</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="part-time" className="mr-2" />
                      <label htmlFor="part-time">Part-time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="full-time" className="mr-2" />
                      <label htmlFor="full-time">Full-time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="co-op" className="mr-2" />
                      <label htmlFor="co-op">Co-op</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Location</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="remote" className="mr-2" />
                      <label htmlFor="remote">Remote</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="on-site" className="mr-2" />
                      <label htmlFor="on-site">On-site</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="hybrid" className="mr-2" />
                      <label htmlFor="hybrid">Hybrid</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Field</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="tech" className="mr-2" />
                      <label htmlFor="tech">Technology</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="business" className="mr-2" />
                      <label htmlFor="business">Business</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="science" className="mr-2" />
                      <label htmlFor="science">Science</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="arts" className="mr-2" />
                      <label htmlFor="arts">Arts & Design</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Jobs list */}
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="card-hover">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="h-12 w-12 rounded bg-career-secondary/20 flex items-center justify-center text-career-primary font-semibold">
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="mt-1">{job.company}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon">
                        <BookmarkIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <BriefcaseIcon className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="default" asChild>
                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
