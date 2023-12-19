import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>

			<Routes>
				<Route path="/rickmorty-api-02" element={<Home />} />
				<Route path="/rickmorty-api-02/:id" element={<CardDetails />} />

				<Route path="/rickmorty-api-02/episodes" element={<Episodes />} />
				<Route path="/rickmorty-api-02/episodes/:id" element={<CardDetails />} />

				<Route path="/rickmorty-api-02/location" element={<Location />} />
				<Route path="/rickmorty-api-02/location/:id" element={<CardDetails />} />
			</Routes>
		</Router>
	);
}

const Home = () => {
	let [pageNumber, setpageNumber] = useState(1);
	let [search, setSearch] = useState("");
	let [status, setStatus] = useState("");
	let [gender, setGender] = useState("");
	let [species, setSpecies] = useState("");

	let [fetchData, updateFetchedData] = useState([]);
	let { info, results } = fetchData;

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	useEffect(() => {
		(async function () {
			let data = await fetch(api)
				.then(res => res.json())
			updateFetchedData(data);
		})()
	}, [api]);

	return (
		<div className="App">
			<h1 className="text-center mb-4">Characters</h1>

			<Search
				setpageNumber={setpageNumber}
				setSearch={setSearch}
			/>

			<div className="container">
				<div className="row">
					<Filters
						setSpecies={setSpecies}
						setGender={setGender}
						setStatus={setStatus}
						setpageNumber={setpageNumber}
					/>
					<div className="col-lg-9 col-12">
						<div className="row">
							<Cards page="/" results={results} />
						</div>
					</div>
				</div>
			</div>

			<Pagination
				info={info}
				pageNumber={pageNumber}
				setpageNumber={setpageNumber}
			/>
		</div>
	);
}

export default App;
