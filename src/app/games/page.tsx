import Sidebar from './components/sidebar'
import GameGrid from './components/game-grid'
import Banner from './components/banner'

export default function GamesPage() {
  return (
    <div className="flex h-screen bg-[#0A0A16]">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Banner />
          <GameGrid />
        </div>
      </main>
    </div>
  )
}

