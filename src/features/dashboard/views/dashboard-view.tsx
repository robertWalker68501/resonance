import { HeroPattern } from '@/features/dashboard/components/hero-pattern';
import { PageHeader } from '@/components/page-header';
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';

export function DashboardView() {
  return (
    <div className='relative'>
      <PageHeader
        title='Home'
        className='lg:hidden'
      />
      <HeroPattern />
      <div className='relative space-y-8 lg:p-16'>
        <DashboardHeader />
      </div>
    </div>
  );
}
