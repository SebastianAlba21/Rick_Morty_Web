const Header = () => {
	return (
		<header className="w-full h-60 flex justify-evenly items-center px-16 md:px-32 lg:px-64 bg-gradient-to-r from-[#9fff18] via-green-300 to-[#31e1b1]">
			<img
				className="w-fit sm:w-auto h-full"
				src="../img/Rick-And-Morty.png"
				alt="Rick y Morty logo"
			/>
			<div className="flex flex-col justify-between text-white text-lg md:text-3xl gap-2 md:gap-5 text-center font-Creepster font-bold select-none">
				<h1 className="">Rick y Morty</h1>
				<hr className="border-white border-2" />
				<span>¡Busca tú personaje favorito!</span>
			</div>
		</header>
	)
}

export default Header
