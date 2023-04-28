import React from "react";
import CatalogViewer from "./Components/CatalogViewer";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600100397608-f010f423b971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    caption: "First image Description",
    desc: "Hampi stone chariot the antique stone art piece from unique angle with amazing blue sky image is taken at hampi karnataka india. it is the most impressive and truly splendid architecture in hampi.",
  },
  {
    src: "https://images.unsplash.com/photo-1622117655866-8b233395581a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    caption: "Second image Description",
    desc: "Jog Falls is a waterfall on the Sharavati river located in the Western Ghats running between Uttara Kannada and Shimoga districts of Karnataka, India.",
  },
  {
    src: "https://images.unsplash.com/photo-1631714712922-eaa39e4452fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Third image Description",
    desc: "Murdeshwar is a town in Uttara Kannada district in the state of Karnataka, India, It is famous for the world's second tallest Shiva statue, the town lies on the coast of the Arabian Sea and is also famous for the Murudeshwara Temple. The town has a railway station on the Mangalore–Mumbai Konkan railway route.",
  },
  {
    src: "https://images.unsplash.com/photo-1580294647332-8a399cd9ed45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    caption: "Fourth image Description",
    desc: "Designed by the English Architect, Henry Irwin, the Mysore Palace dominates the skyline of Mysore. A three storied structure in the Indo-Saracenic style built between 1897-1912, the palace has beautifully designed square towers at cardinal points, covered with domes.",
  },
  {
    src: "https://images.unsplash.com/photo-1620414494380-9d8ce6a24685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    caption: "Fifth image Description",
    desc: "A chain of mountains running parallel to India's western coast, approximately 30-50 km inland, the Ghats traverse the States of Kerala, Tamil Nadu, Karnataka, Goa, Maharashtra and Gujarat.",
  },
];

function App() {
  return (
    <div className="App">
      <CatalogViewer images={images} />
    </div>
  );
}

export default App;
