import PropTypes from 'prop-types'

const Card = ({ name, species, image }) => {
	return (
		<div className="flex flex-col items-center justify-between font-Creepster bg-white bg-opacity-10 py-5 rounded-lg select-none">
			<img
				className="w-64 h-64 object-cover rounded-full border-4 border-white"
				src={image}
				alt={name}
			/>
			<h1 className="text-xl text-white text-center font-bold">{name}</h1>
			<span className="text-xl text-green-500 text-center font-semibold">
				{species}
			</span>
		</div>
	)
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	species: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default Card
