import styles from "./style";
import { ButtonPrinted, HowToPrint, Footer, Navbar, Hero } from "./components";

const App = () => (
  <div className="bg-white xl:pr-16 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className="bg-black md:mr-16 xl:mr-0">
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="">
            <Hero />
          </div>
        </div>
      </div>
      
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ButtonPrinted />
          <HowToPrint />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
