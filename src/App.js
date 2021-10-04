import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import Blogs from "./pages/Blogs";

function App() {
	return (
		<div className="">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/courses" component={Courses} />
					<Route exact path="/blogs" component={Blogs} />
					<Route path="*" component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
