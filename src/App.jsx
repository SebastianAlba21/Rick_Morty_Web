import Header from './components/Header.jsx'
import Filters from './components/Filters.jsx'

function App() {
	return (
		<>
			<Header />
			<main className="bg-[url('../img/bg.png')] bg-cover w-auto h-[7200px] sm:h-[3800px] md:h-[2100px] lg:h-[2100px]">
				<Filters />
			</main>
		</>
	)
}

export default App
