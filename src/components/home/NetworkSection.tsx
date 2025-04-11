
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data for peer connections
const peers = [
  {
    id: 1,
    name: "Alex Johnson",
    major: "Computer Science",
    year: "Junior",
    interests: ["Machine Learning", "Web Dev"],
    avatar: "AJ",
    university: "State University"
  },
  {
    id: 2,
    name: "Sam Taylor",
    major: "Business Administration",
    year: "Senior",
    interests: ["Marketing", "Entrepreneurship"],
    avatar: "ST",
    university: "Tech Institute"
  },
  {
    id: 3,
    name: "Jordan Lee",
    major: "Biology",
    year: "Sophomore",
    interests: ["Research", "Pre-med"],
    avatar: "JL",
    university: "City College"
  },
  {
    id: 4,
    name: "Casey Morgan",
    major: "Graphic Design",
    year: "Senior",
    interests: ["UI/UX", "Brand Identity"],
    avatar: "CM",
    university: "Arts Academy"
  }
];

export const NetworkSection = () => {
  return (
    <section className="py-12 container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title">Connect with Peers</h2>
        <Button asChild variant="outline">
          <Link to="/network">View Network</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {peers.map((peer) => (
          <Card key={peer.id} className="card-hover">
            <CardHeader className="text-center pb-2">
              <Avatar className="h-16 w-16 mx-auto mb-2">
                <AvatarFallback className="bg-career-secondary text-career-primary">
                  {peer.avatar}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{peer.name}</CardTitle>
              <CardDescription className="text-sm">
                {peer.major} • {peer.year}
              </CardDescription>
              <CardDescription className="text-xs">
                {peer.university}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-2 pb-2">
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {peer.interests.map((interest, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="w-full text-career-secondary hover:text-career-primary">
                Connect
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
