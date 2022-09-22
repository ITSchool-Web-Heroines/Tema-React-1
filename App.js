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
export default function App() {
  const shoppingListItems = [
    "Lista de cumpărături",
    "Pâine",
    "Lapte",
    "Ciocolată",
    "Mere",
    "Miere",
    "Mandarine",
  ];
  return (
    <div className="vh-100 d-flex flex-column">
      <header className="navbar bg-primary bg-gradient">
        <div className="container-fluid">
          <h1 className="navbar-brand mb-0 text-white">Tema React</h1>
        </div>
      </header>
      <main className="container my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <ul className="list-group">
          {shoppingListItems.map(shoppingListItem =>
            shoppingListItem.length === 20 ? (
              <li className="list-group-item" key={shoppingListItem}>
                <span className="fw-bold">{shoppingListItem}</span>
              </li>
            ) : (
              <li className="list-group-item" key={shoppingListItem}>
                {shoppingListItem}
              </li>
            )
          )}
        </ul>
      </main>
    </div>
  );
}
