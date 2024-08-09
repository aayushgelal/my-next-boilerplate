
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import ScrollCard from "./_components/scrollcard";
import CompanyPage from "./_components/CompanyCard/ComapnyCardList";



export default function Home() {
 
   

  return (
    <div className="container mx-auto px-4 text-center">
      <main className="py-12">
        <h2 className="text-5xl mt-12 font-black mb-4">Find Your <span className="text-primary font-black">Dream</span> Aussie Tech Job</h2>
        <p className="text-xl mb-8">Discover 10,000+ exciting tech opportunities across Australia.</p>

        <div className="flex gap-2 mb-12 mt-20">
          <div className="relative flex-grow">
            <Input placeholder="Job title or keyword" className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="relative w-1/4">
            <Input placeholder="Location" className="pl-10" />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button className="bg-purple-600">Search</Button>
        </div>

      <ScrollCard />
      <CompanyPage />

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Featured Aussie Tech Companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <h4 className="font-bold">Company Name</h4>
              <p>Brief description</p>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Recent Searches</h3>
          <div className="flex gap-2">
            <Button variant="outline">Software Engineer</Button>
            <Button variant="outline">UX Designer</Button>
            <Button variant="outline">Data Scientist</Button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Explore Tech Jobs by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <h4 className="font-bold">Web Development</h4>
              <p>1000+ jobs</p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-8">
        {/* Add footer content */}
      </footer>
    </div>
  );
}