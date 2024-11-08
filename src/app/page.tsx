import ServiceTiers from '@/components/service-tiers'
import RetainerTiers from '@/components/retainer-tiers'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Terra Hosting Solutions</h1>
        <ServiceTiers />
        <RetainerTiers />
      </div>
    </main>
  )
}