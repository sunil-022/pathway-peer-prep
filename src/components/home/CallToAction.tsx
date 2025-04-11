
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="py-16 container">
      <div className="bg-career-primary rounded-2xl text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of students who are discovering opportunities, sharing resources, and building their professional network.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="bg-white text-career-primary hover:bg-gray-100">
            <Link to="/signup">Create Your Account</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/learn-more" className="flex items-center">
              <span>Learn More</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
