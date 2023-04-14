import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/CenteredButton";
import Institucional from "./components/Institucional";
import './App.scss';


 import posts from "./data/posts";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institucional/>
    </div>
  );
}

export default App;
