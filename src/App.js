import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthProvider";
import Register from "./pages/Register";
import PrivateRoute from "./containers/PrivateRoute";
import PublicRoute from "./containers/PublicRoute";
import SingleCategory from "./pages/SingleCategory";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/courses" component={Courses} />
					<Route exact path="/blogs" component={Blogs} />
					<PublicRoute exact path="/login" component={Login} />
					<PublicRoute exact path="/register" component={Register} />
					<PrivateRoute
						exact
						path="/:categoryId"
						component={SingleCategory}
					/>
					<Route path="*" component={PageNotFound} />
				</Switch>
				<Footer />
			</AuthProvider>
		</Router>
	);
}

export default App;
