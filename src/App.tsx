import Navbar from "./components/Navbar"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
  const entries = data.map(entry => {
    return (
      <Entry key={entry.id} {...entry} />
    )
  })

  return (
    <div>
      <Navbar />
      {entries}
    </div>
  )
}
