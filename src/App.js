/* AULA 01 */
// import logo from './logo.svg';
// import './App.css';
// import ProductList from './components/ProductList';
// import FuncComp from './classVSFunc/FuncComp';
// import ClassComp from './classVSFunc/ClassComp';

// function App() {
//   return (
//     <div className="App">
//       {/* <ProductList /> */}
//       <ClassComp />
//       <hr />
//       <FuncComp />
//     </div>
//   );
// }

// export default App;

/* AULA 02 */
import './App.css';
import Bookables from './components/bookable/Bookables';
// import Lampada from './lampada/Lampada';

function App() {
  return (
    <div className="App">
      <Bookables />
      {/* <Lampada /> */}
    </div>
  );
}

export default App;