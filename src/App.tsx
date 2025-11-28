import './App.css';
import { Navigation } from './Navigation/Navigation.tsx';
import { LandingSections } from './sections/LandingSection/LandingSections.tsx';
import { AboutUs } from './sections/AboutUs/AboutUs.tsx';
import { Products } from './sections/Products/Products.tsx';
import { Technologies } from './sections/Technologies/Technologies.tsx';
import { ServiceTo } from './sections/ServiceTo/ServiceTo.tsx';
import { Contacts } from './sections/Contacts/Contacts.tsx';

function App() {
  return (
    <>
      <Navigation />
      <LandingSections />
      <AboutUs />
      <Products />
      <Technologies />
      <ServiceTo />
      <Contacts />
    </>
  );
}

export default App;
