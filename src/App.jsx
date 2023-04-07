import ImageSlider from "./components/ImageSlider";
import Beach from "./assets/image-1.jpg";
import Boat from "./assets/image-2.jpg";
import Forest from "./assets/image-3.jpg";
import City from "./assets/image-4.jpg";
import Italy from "./assets/image-5.jpg";

const App = () => {
  const slides = [
    { img: Beach, title: "Beach" },
    { img: Boat, title: "Boat" },
    { img: Forest, title: "Forest" },
    { img: City, title: "City" },
    { img: Italy, title: "Italy" },
  ];
  return (
    <div>
      <h1>Hello</h1>
      <div className="container">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
