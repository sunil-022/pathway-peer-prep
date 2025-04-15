import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Mock data for peer connections
const peers = [
  {
    id: 1,
    name: "Aravindh",
    major: "Computer Science",
    year: "2nd year",
    interests: ["Machine Learning", "Web Dev"],
    avatar: "A",
    university: "Vrsec"
  },
  {
    id: 2,
    name: "Pallavi",
    major: "Graphic Design",
    year: "Senior",
    interests: ["UI/UX", "Brand Identity"],
    avatar: "P",
    university: "Arts Academy"
  },
  {
    id: 3,
    name: "Sunil",
    major: "Biology",
    year: "Sophomore",
    interests: ["Research", "Pre-med"],
    avatar: "S",
    university: "Sidhartha College"
  },
  {
    id: 4,
    name: "Hunsika",
    major: "Physics",
    year: "Junior",
    interests: ["Astrophysics", "Quantum Mechanics"],
    avatar: "H",
    university: "National University"
  },
  {
    id: 5,
    name: "Ratan",
    major: "Business Administration",
    year: "Senior",
    interests: ["Marketing", "Entrepreneurship"],
    avatar: "RK",
    university: "VIT University"
  },
  {
    id: 6,
    name: "Ruchitha",
    major: "Mathematics",
    year: "Freshman",
    interests: ["Data Science", "Statistics"],
    avatar: "R",
    university: "Central University"
  }
];

export const NetworkSection = () => {
  return (
    <section className="py-12 container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title text-2xl font-bold text-gray-800">Connect with Peers</h2>
        <Button asChild variant="outline" className="hover:bg-gray-100">
          <Link to="/network">View Full Network</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {peers.map((peer) => (
          <Card key={peer.id} className="card-hover shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-2">
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className="h-16 w-16 mx-auto mb-2">
                    <AvatarFallback className="bg-career-secondary text-career-primary">
                      {peer.avatar}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{peer.name}</p>
                </TooltipContent>
              </Tooltip>
              <CardTitle className="text-lg font-semibold text-gray-700">{peer.name}</CardTitle>
              <CardDescription className="text-sm text-gray-500">
                {peer.major} • {peer.year}
              </CardDescription>
              <CardDescription className="text-xs text-gray-400">
                {peer.university}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-4">
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {peer.interests.map((interest, i) => (
                  <Badge key={i} variant="outline" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-career-secondary hover:text-career-primary hover:bg-gray-100"
              >
                Connect
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};