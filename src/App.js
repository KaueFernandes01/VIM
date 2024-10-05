import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Download from './Download';
import Home from './Home';

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Download" element={<Download />} />
            </Routes>
        </Router>
    );
}
export default App;