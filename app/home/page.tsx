export default function HomePage() {
	return (
		<html>
			<header className="h-14">
				<div className="p-4 flex justify-between items-center h-14">
					<h1 className="font-bold text-3xl">Book</h1>
					<input className="mr-4 h-9 w-96 focus:outline-none rounded-lg border pl-2" placeholder="O que você está buscando?"/>	

					<div>
						<button className="mr-4">Favoritos</button>
						<button className="mr-4">Entrar</button>
						<button className="">Minha cesta</button>
					</div>
				</div>
			</header>
			<main className="h-screen">
				<h1>main</h1>
			</main>
		</html>
	)
}
