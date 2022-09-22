/*

Folosește React pentru a afișa următorul cod în elementul cu ID #app

<div class="vh-100 d-flex flex-column">
    <header class="navbar bg-primary bg-gradient">
        <div class="container-fluid">
            <h1 class="navbar-brand mb-0 text-white">Tema React</h1>
        </div>
    </header>
    <main class="container my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <ul class="list-group">
            <li class="list-group-item">
                <span class="fw-bold">Lista de cumpărături</span>
            </li>
            <li class="list-group-item">Pâine</li>
            <li class="list-group-item">Lapte</li>
            <li class="list-group-item">Ciocolată</li>
            <li class="list-group-item">Mere</li>
            <li class="list-group-item">Miere</li>
            <li class="list-group-item">Mandarine</li>
        </ul>
    </main>
</div>
*/

import "./styles.css";
export default function App() {
  const products = [
    "Pâine",
    "Lapte",
    "Ciocolată",
    "Mere",
    "Miere",
    "Mandarine"
  ];
  return (
    <div className="vh-100 d-flex flex-column">
      <header className="navbar bg-primary bg-gradient">
        <div className="container-fluid">
          <h1 className="navbar-brand mb-0 text-white">Tema React</h1>
        </div>
      </header>
      <main className="container my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <ul className="products">
          <li className="shopping">
            <span className="fw-bold">Lista de cumpărături</span>
          </li>
          {products.map((shopping) => (
            <li className="shooping" key={shopping}> {shopping} </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
