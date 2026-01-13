import WelcomeCard from '@/components/homepage/WelcomeCard';
import ScheduleTable from '@/components/homepage/ScheduleTable';
import ResourcesCards from '@/components/homepage/ResourcesCards';
import Staff from '@/components/homepage/Staff';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CIS 1962",
  description: "Homepage of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function Home() {
  return (
    <div className='scroll-mt-48 grow flex flex-col items-center gap-16'>
      <WelcomeCard />
      <ScheduleTable />
      <ResourcesCards />
      <Staff />
    </div>
  )
}
