
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, BookOpenIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-career-light to-transparent py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-career-primary">
              Your Career Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
              Find the perfect job, discover valuable resources, and connect with peers to help you succeed in your career path.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="bg-career-primary hover:bg-career-dark">
                <Link to="/jobs">Find Opportunities</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:pl-12 animate-fade-in">
            <div className="aspect-video rounded-xl bg-career-secondary/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-full max-w-lg">
                  <div className="bg-white p-4 rounded-xl shadow-lg animate-slide-up flex flex-col items-center text-center">
                    <BriefcaseIcon className="h-8 w-8 text-career-primary mb-2" />
                    <h3 className="font-semibold">Job Search</h3>
                    <p className="text-sm text-muted-foreground">Find your perfect fit</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg animate-slide-up delay-100 flex flex-col items-center text-center">
                    <BookOpenIcon className="h-8 w-8 text-career-primary mb-2" />
                    <h3 className="font-semibold">Resources</h3>
                    <p className="text-sm text-muted-foreground">Study materials & tips</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg animate-slide-up delay-200 flex flex-col items-center text-center">
                    <UsersIcon className="h-8 w-8 text-career-primary mb-2" />
                    <h3 className="font-semibold">Network</h3>
                    <p className="text-sm text-muted-foreground">Connect with peers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
