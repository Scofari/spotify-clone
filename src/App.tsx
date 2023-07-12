import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Home/Search";
import NotFound from "./pages/Home/NotFound";
// import YourLibrary from "./pages/Home/YourLibrary/index";
import CreatePlaylist from "./pages/Home/CreatePlaylist/CreatePlaylist";
import LikedSongs from "./pages/Home/LikedSongs";
import Playlist from "./pages/Home/Playlist";
import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route
						path="collection/playlists"
						element={<YourLibrary />}
					/> */}
                    <Route path="/playlist/:id" element={<Playlist />} />
                    <Route path="/playlist" element={<CreatePlaylist />} />
                    <Route path="/collection/tracks" element={<LikedSongs />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
