
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/layout/Layout";
import { ArrowRightIcon, BookmarkIcon, BookOpenIcon, FileTextIcon, FilterIcon, GraduationCapIcon, MessageSquareIcon, SearchIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for resources
const studyResources = [
  {
    id: 1,
    title: "Complete Guide to Data Structures & Algorithms",
    category: "Computer Science",
    description: "Comprehensive study materials covering fundamental data structures and algorithms with practice problems.",
    icon: <BookOpenIcon className="h-8 w-8 text-career-primary" />,
    tags: ["CS", "Programming", "Algorithms"],
    author: "Prof. Alan Johnson",
    rating: 4.8,
    downloads: 1250
  },
  {
    id: 2,
    title: "Financial Accounting Fundamentals",
    category: "Business",
    description: "Learn the basics of financial accounting with real-world examples and practice exercises.",
    icon: <FileTextIcon className="h-8 w-8 text-career-primary" />,
    tags: ["Finance", "Accounting", "Business"],
    author: "Dr. Sarah Williams",
    rating: 4.5,
    downloads: 890
  },
  {
    id: 3,
    title: "Organic Chemistry Study Guide",
    category: "Chemistry",
    description: "Detailed explanations of organic chemistry principles with reaction mechanisms and practice problems.",
    icon: <BookOpenIcon className="h-8 w-8 text-career-primary" />,
    tags: ["Chemistry", "Science", "Pre-med"],
    author: "Prof. Michael Chen",
    rating: 4.7,
    downloads: 1050
  }
];

const careerResources = [
  {
    id: 4,
    title: "Resume Writing Masterclass",
    category: "Career Development",
    description: "Learn how to craft a standout resume that will get you noticed by recruiters.",
    icon: <FileTextIcon className="h-8 w-8 text-career-primary" />,
    tags: ["Resume", "Job Search", "Career"],
    author: "Career Services Center",
    rating: 4.9,
    downloads: 2150
  },
  {
    id: 5,
    title: "Ace Your Technical Interviews",
    category: "Interview Prep",
    description: "Strategies and practice for technical interviews in the tech industry.",
    icon: <MessageSquareIcon className="h-8 w-8 text-career-primary" />,
    tags: ["Interviews", "Tech", "Career"],
    author: "Industry Panel",
    rating: 4.6,
    downloads: 1780
  },
  {
    id: 6,
    title: "Networking for Career Success",
    category: "Professional Development",
    description: "Effective networking strategies to build meaningful professional connections.",
    icon: <UsersIcon className="h-8 w-8 text-career-primary" />,
    tags: ["Networking", "Career", "Professional"],
    author: "Career Coach Taylor",
    rating: 4.7,
    downloads: 1340
  }
];

const Resources = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-career-primary">Resources Library</h1>
            <p className="text-muted-foreground mt-1">Discover and share valuable academic and career resources</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-10 w-[250px]" />
            </div>
            <Button variant="default">
              <Link to="/resources/share">Share Resource</Link>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 w-[400px]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="study">Study</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...studyResources, ...careerResources].map((resource) => (
                <Card key={resource.id} className="card-hover">
                  <CardHeader>
                    <div className="mb-4 p-2 rounded-full bg-career-light inline-block">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                      <span>By {resource.author}</span>
                      <span>⭐ {resource.rating} • {resource.downloads} downloads</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="default" className="flex-1 mr-2">
                      Access
                    </Button>
                    <Button variant="ghost" size="icon">
                      <BookmarkIcon className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="study" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyResources.map((resource) => (
                <Card key={resource.id} className="card-hover">
                  <CardHeader>
                    <div className="mb-4 p-2 rounded-full bg-career-light inline-block">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                      <span>By {resource.author}</span>
                      <span>⭐ {resource.rating} • {resource.downloads} downloads</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="default" className="flex-1 mr-2">
                      Access
                    </Button>
                    <Button variant="ghost" size="icon">
                      <BookmarkIcon className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="career" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerResources.map((resource) => (
                <Card key={resource.id} className="card-hover">
                  <CardHeader>
                    <div className="mb-4 p-2 rounded-full bg-career-light inline-block">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                      <span>By {resource.author}</span>
                      <span>⭐ {resource.rating} • {resource.downloads} downloads</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="default" className="flex-1 mr-2">
                      Access
                    </Button>
                    <Button variant="ghost" size="icon">
                      <BookmarkIcon className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="mt-6">
            <div className="text-center py-12">
              <GraduationCapIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No saved resources yet</h3>
              <p className="text-muted-foreground mb-6">
                Bookmark resources you find useful to access them later
              </p>
              <Button variant="outline" asChild>
                <Link to="/resources" className="flex items-center">
                  <span>Browse Resources</span>
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resources;
