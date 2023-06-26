import { useEffect, useState } from 'react'

const useFilters = () => {
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results)
				setFilteredCharacters(data.results)
				setLoading(false)
			})
			.catch(error => console.log(error))
	}, [])

	const [characters, setCharacters] = useState([])
	const [loading, setLoading] = useState(true)
	const [inputValue, setInputValue] = useState('')
	const [filteredCharacters, setFilteredCharacters] = useState([])
	const [speciesFilter, setSpeciesFilter] = useState('Todos')

	const applyFilters = (name, species) => {
		return characters.filter(character => {
			const isNameMatch = character.name.toLowerCase().includes(name)
			const isSpeciesMatch =
				species === 'Todos' || character.species === species
			return isNameMatch && isSpeciesMatch
		})
	}

	const handleSpeciesFilter = event => {
		const selectedSpecies = event.target.value
		setSpeciesFilter(selectedSpecies)
		const filteredResults = applyFilters(
			inputValue.toLowerCase(),
			selectedSpecies
		)
		setFilteredCharacters(filteredResults)
	}

	const handleFilterName = event => {
		const inputValue = event.target.value.toLowerCase()
		const filteredResults = applyFilters(inputValue, speciesFilter)
		setFilteredCharacters(filteredResults)
		setInputValue(inputValue)
	}

	return {
		loading,
		inputValue,
		speciesFilter,
		filteredCharacters,
		handleFilterName,
		handleSpeciesFilter,
	}
}

export default useFilters
