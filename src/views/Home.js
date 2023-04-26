import React from "react";
import Hero from "../components/Hero";
import CreditCard from "../components/CreditCard";
import CardList from "../components/CardList";
import CenteredButton from "../components/CenteredButton";
import Institucional from "../components/Institucional";
import Faq from "../components/Faq";


import posts from "../data/posts";

function Home({handleClick}) {
  

  return (
    <>
      
      <Hero onClick={handleClick} />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={handleClick}>
        Abra sua conta
      </CenteredButton>
      <Institucional onClick={handleClick} />
      <Faq />
      
      
    </>
  );
}

export default Home;
