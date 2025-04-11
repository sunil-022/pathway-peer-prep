
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { FilterIcon, GraduationCapIcon, SearchIcon, UserIcon, UserPlusIcon, UsersIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for peers
const peers = [
  {
    id: 1,
    name: "Alex Johnson",
    major: "Computer Science",
    year: "Junior",
    interests: ["Machine Learning", "Web Dev", "Mobile Apps"],
    avatar: "AJ",
    university: "State University",
    bio: "Passionate about creating intuitive user experiences and exploring emerging tech. Current intern at TechStart Inc."
  },
  {
    id: 2,
    name: "Sam Taylor",
    major: "Business Administration",
    year: "Senior",
    interests: ["Marketing", "Entrepreneurship", "Finance"],
    avatar: "ST",
    university: "Tech Institute",
    bio: "Aspiring entrepreneur with experience in digital marketing. Looking to connect with like-minded students."
  },
  {
    id: 3,
    name: "Jordan Lee",
    major: "Biology",
    year: "Sophomore",
    interests: ["Research", "Pre-med", "Genetics"],
    avatar: "JL",
    university: "City College",
    bio: "Pre-med student passionate about genetic research. Currently working as a research assistant in the university lab."
  },
  {
    id: 4,
    name: "Casey Morgan",
    major: "Graphic Design",
    year: "Senior",
    interests: ["UI/UX", "Brand Identity", "Typography"],
    avatar: "CM",
    university: "Arts Academy",
    bio: "Creative designer focusing on brand identity and user interfaces. Freelancer with experience in the fashion industry."
  },
  {
    id: 5,
    name: "Taylor Wilson",
    major: "Environmental Science",
    year: "Junior",
    interests: ["Sustainability", "Conservation", "Green Tech"],
    avatar: "TW",
    university: "State University",
    bio: "Environmental advocate researching sustainable technologies. Looking to connect with others interested in climate solutions."
  },
  {
    id: 6,
    name: "Jamie Rivera",
    major: "Psychology",
    year: "Senior",
    interests: ["Clinical Psychology", "Research", "Human Behavior"],
    avatar: "JR",
    university: "Central University",
    bio: "Psychology student conducting research on cognitive development. Seeking research and graduate school opportunities."
  }
];

const Network = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-career-primary">Your Network</h1>
            <p className="text-muted-foreground mt-1">Connect with peers and build your professional community</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search peers..." className="pl-10 w-[250px]" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <FilterIcon className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="discover" className="mb-8">
          <TabsList className="grid grid-cols-3 w-[400px]">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="connections">My Connections</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {peers.map((peer) => (
                <Card key={peer.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-career-secondary text-career-primary">
                          {peer.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{peer.name}</CardTitle>
                        <CardDescription>
                          {peer.major} • {peer.year}
                        </CardDescription>
                        <CardDescription className="text-xs">
                          {peer.university}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{peer.bio}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {peer.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <UserPlusIcon className="h-4 w-4" />
                      <span>Connect</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="connections" className="mt-6">
            <div className="text-center py-12">
              <UsersIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No connections yet</h3>
              <p className="text-muted-foreground mb-6">
                Connect with peers who share your academic and career interests
              </p>
              <Button>Discover Peers</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="requests" className="mt-6">
            <div className="text-center py-12">
              <UserIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No pending requests</h3>
              <p className="text-muted-foreground mb-6">
                You'll see connection requests here
              </p>
              <Button>Discover Peers</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Network;
