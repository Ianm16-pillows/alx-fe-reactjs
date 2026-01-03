import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="React Integration" description="Learn how to integrate Tailwind CSS with React." />
        <Card title="Responsive Design" description="Build fully responsive layouts quickly." />
        <Card title="Hover & Transitions" description="Add interactivity with Tailwind utilities." />
        <Card title="Utility-First CSS" description="Style components fast with utility classes." />
        <Card title="Component Library" description="Reusable UI components for your project." />
        <Card title="Deploy Ready" description="Ready for GitHub and Vercel deployment." />
      </div>
    </div>
  )
}

export default App
