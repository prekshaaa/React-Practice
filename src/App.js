import './App.css';
function App() {
  return (

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">GigVistas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://gigvistas.com/blog/">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://gigvistas.com/services/">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://gigvistas.com/how-it-works/" aria-current="page">
                How it Works
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="https://gigvistas.com/about/">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="https://beta.gigvistas.com/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="https://beta.gigvistas.com/login">Sign Up</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Eg. web developer, python, custom services" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">SEARCH GIGS</button>
          </form>
        </div>
      </div>
    </nav>
    );
  }
export default App;
