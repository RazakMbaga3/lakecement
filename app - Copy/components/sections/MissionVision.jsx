// app/components/sections/MissionVision.jsx
export default function MissionVision() {
    return (
      <div className="grid md:grid-cols-2 gap-6 mb-12 bg-nyati-orange rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-white text-2xl font-bold mb-4">MISSION</h2>
          <p className="text-white">
            To become the leading cement manufacturer in Tanzania, by delivering consistent high quality cement to our customers with service beyond our customers' expectations
          </p>
        </div>
        <div className="p-6 md:p-8 bg-nyati-orange/90">
          <h2 className="text-white text-2xl font-bold mb-4">VISION</h2>
          <p className="text-white">
            To become a key driver in Tanzania's growth by creating value for our customers, employees, business partners and shareholders - through fundamentally sound governance and policies
          </p>
        </div>
      </div>
    )
  }