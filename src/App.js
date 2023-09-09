import { Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { Game } from "./components/Game";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="about" element={<About />} />
                    <Route path="games" element={<Game />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
