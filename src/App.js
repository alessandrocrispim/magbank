import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/CenteredButton";
import Institucional from "./components/Institucional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import posts from "./data/posts";

function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <Navigation handleCreatAcc={() => setShowModal(true)} />
      <Hero onClick={() => setShowModal(true)} />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={() => setShowModal(true)}>
        Abra sua conta
      </CenteredButton>
      <Institucional onClick={() => setShowModal(true)} />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
