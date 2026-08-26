// app/about/page.tsx
'use client'

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Hero from "./hero";
import TeamBody, { TeamMemberData } from "./body";
import { client } from "@/app/lib/sanity"; // Adjust this path to your sanity client import

const teamQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  "imageSrc": image.asset->url,
  category
}`;

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const data: TeamMemberData[] = await client.fetch(teamQuery);
        setTeamMembers(data || []);
      } catch (error) {
        console.error("Failed to fetch team members from Sanity:", error);
      }
    }
    fetchTeam();
  }, []);

  // Filter the fetched members into your three specific section arrays
  const staffMembers = teamMembers.filter((m) => m.category === "secretariat");
  const strategyAdvisors = teamMembers.filter((m) => m.category === "strategy_advisor");
  const boardMembers = teamMembers.filter((m) => m.category === "board");

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      <div className="relative min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="grow">
          <Hero title={""} currentPage={""} />
          <TeamBody
            staffMembers={staffMembers}
            strategyAdvisors={strategyAdvisors}
            boardMembers={boardMembers}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}