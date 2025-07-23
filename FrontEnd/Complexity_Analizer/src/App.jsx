import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-gray-950 w-full h-full">
        <Header></Header>
        <MainSection></MainSection>
        <InputSection></InputSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
