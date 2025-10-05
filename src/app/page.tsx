import ImageCarousel from '@/components/ImageCarousel';
import CarOverview from '@/components/CarOverview';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="container max-w-9xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ImageCarousel />
          </div>
          <div>
            <CarOverview />
          </div>

        </div>
      </div>
    </main>
  );
}