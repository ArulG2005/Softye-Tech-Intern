import { Route,BrowserRouter, Routes} from "react-router";
import Login from "./Login";
import SignUp from "./Signup";
function App() {
return(
<>
<h1>Softye Tech</h1>
<BrowserRouter>
 <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
 </Routes>
 </BrowserRouter>
</>
);
}

export default App;
