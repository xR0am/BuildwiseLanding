import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
// images
import leaguePass from '@/assets/leaguepass.png';
import voxai from '@/assets/voxaisq.png';
import botwise from '@/assets/botwise.jpeg';

const projects = [
  {
    title: "Executive Search CRM Automation",
    description: "AI-powered candidate screening and CRM management for executive recruiting firms.",
    what: "Automates candidate intake, initial screening, and CRM data entry using specialized AI agents trained on recruitment workflows.",
    objective: "Reduce administrative overhead by 80% and enable recruiters to focus on high-value candidate relationships.",
    highlight: "Deployed across 5 executive search firms, processing 500+ candidates weekly.",
    category: "Professional Services",
    image: voxai,
  },
  {
    title: "Legal Contract Review Agent",
    description: "Intelligent contract analysis and risk assessment for boutique law firms.",
    what: "AI agent that reviews NDAs, service agreements, and vendor contracts, flagging risks and inconsistencies.",
    objective: "Enable small law firms to handle higher contract volumes without additional paralegal staff.",
    highlight: "Currently in pilot with 3 law firms, reducing review time from 2 hours to 15 minutes per contract.",
    category: "Legal Tech",
    image: botwise,
  },
  {
    title: "Restaurant Operations Intelligence",
    description: "Multi-channel AI assistant for restaurant reservations, inquiries, and customer service.",
    what: "Handles phone calls, website chat, and social media messages to manage bookings and answer customer questions.",
    objective: "Eliminate missed reservations and reduce front-of-house staff workload during peak hours.",
    highlight: "Launching Q3 2025 with pilot group of 10 Hong Kong restaurants.",
    category: "Hospitality",
    image: leaguePass,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 break-words">
            Client Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Real implementations of AI agents transforming professional service businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow w-full">
              <img
                src={project.image}
                alt={`${project.title} interface`}
                className="w-full p-4 sm:p-5 h-40 sm:h-48 object-cover"
              />
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-col items-start justify-center text-xs sm:text-sm space-y-3">
                <div className="w-full">
                  <p className='font-semibold break-words'>What it does:</p>
                  <p className="text-gray-600 mb-2 leading-relaxed">{project.what}</p>
                </div>
                <div className="w-full">
                  <p className='font-semibold break-words'>Objective:</p>
                  <p className="text-gray-600 mb-2 leading-relaxed">{project.objective}</p>
                </div>
                <div className="w-full">
                  <p className='font-semibold break-words'>Highlight:</p>
                  <p className="text-gray-600 mb-2 leading-relaxed">{project.highlight}</p>
                </div>
                  <span className="text-xs sm:text-sm text-gray-500 break-words">{project.category}</span>
                  {/* <button className="text-warm-amber hover:text-teal-700 font-semibold">
                    <ExternalLink className="h-4 w-4" />
                  </button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 w-full">
        <a href="https://calendly.com/charles-buildwise/30min" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
          <Button size="lg" className="bg-warm-amber hover:bg-warm-amber w-full sm:w-auto">
            <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
            <span className="truncate">Schedule a Meeting</span>
          </Button>
        </a>
        </div>
      </div>
    </section>
  );
}
