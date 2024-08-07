import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4  text-center">
    

      <main className="py-12">
        <h2 className=" text-5xl mt-12 font-black mb-4">Find Your Dream Aussie Tech Job</h2>
        <p className="text-xl mb-8">Discover 10,000+ exciting tech opportunities across Australia.</p>

        <div className="flex gap-2 mb-12 mt-20">
          <Input placeholder="Job title or keyword" className="flex-grow" />
          <Input placeholder="Location" className="w-1/4" />
          <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Featured Aussie Tech Companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Add company cards here */}
            <Card className="p-4">
              <h4 className="font-bold">Company Name</h4>
              <p>Brief description</p>
            </Card>
            {/* Repeat for other companies */}
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
            {/* Add job category cards here */}
            <Card className="p-4">
              <h4 className="font-bold">Web Development</h4>
              <p>1000+ jobs</p>
            </Card>
            {/* Repeat for other categories */}
          </div>
        </div>
      </main>

      <footer className="py-8">
        {/* Add footer content */}
      </footer>
    </div>
  )
}