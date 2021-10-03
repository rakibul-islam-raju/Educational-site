import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import PageNotFound from "./pages/PageNotFound";
import Blog from "./pages/Blog";

function App() {
	return (
		<div className="">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/service" component={Service} />
					<Route exact path="/blog" component={Blog} />
					<Route path="*" component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
