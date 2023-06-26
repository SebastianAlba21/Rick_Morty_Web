import useFilters from '../hooks/useFilters'
import Card from './Card'
import Loading from './Loading'

const Filters = () => {
	const options = [
		{ value: 'Todos', label: 'Todos' },
		{ value: 'Human', label: 'Human' },
		{ value: 'Alien', label: 'Alien' },
	]
	const {
		loading,
		inputValue,
		speciesFilter,
		filteredCharacters,
		handleFilterName,
		handleSpeciesFilter,
	} = useFilters()
	return (
		<div className="w-full h-auto flex flex-col">
			<div className="w-full h-auto flex flex-col gap-5 sm:flex-row justify-evenly items-center text-center py-10 px-10 text-base lg:text-xl font-Creepster font-semibold">
				<span className="text-white">Filtrar por nombre</span>
				<input
					className="h-10 rounded-md px-2"
					type="text"
					value={inputValue}
					onChange={handleFilterName}
					placeholder="Ej. Morty"
				/>
				<span className="text-white">Filtrar por especie</span>
				<select
					name=""
					id=""
					className="h-10 rounded-md px-2"
					value={speciesFilter}
					onChange={handleSpeciesFilter}>
					{options.map(option => (
						<option
							className="h-10 rounded-md px-2 text-sm lg:text-base"
							key={option.value}
							value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			<div className="w-screen h-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-20 lg:px-24 lx:px-64 py-6">
				{loading ? (
					<Loading />
				) : (
					filteredCharacters.map(character => (
						<Card
							key={character.id}
							name={character.name}
							species={character.species}
							image={character.image}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default Filters
