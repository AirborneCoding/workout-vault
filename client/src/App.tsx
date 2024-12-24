
import ProgramsData from "./components/home/ProgramsData";
import Section1 from "./components/home/Section1";
import Section2 from "./components/home/Section2";


const App = () => {
  return (
    <main className="body-contain">
      <Section1 />
      <Section2 />
      {/* <Filters /> */}
      <ProgramsData />
    </main>
  )
};

export default App;
