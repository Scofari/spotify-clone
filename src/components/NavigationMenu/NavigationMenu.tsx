import { MdHomeFilled } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquareFill } from "react-icons/bs";
import { BiBookHeart } from "react-icons/bi";
import NavigationSubmenu from "../NavigationSubmenu";
import NavigationItem from "../common/NavigationItem";

const NavigationMenu = () => {
    return (
        <nav>
            <NavigationSubmenu>
                <>
                    <NavigationItem icon={MdHomeFilled} to="/" title="Home" />
                    <NavigationItem
                        icon={GoSearch}
                        to="/search"
                        title="Search"
                    />
                    {/* <NavigationItem
						icon={VscLibrary}
						to="/collection/playlists"
						title="Your Library"
					/> */}
                </>
            </NavigationSubmenu>
            <NavigationSubmenu>
                <>
                    <NavigationItem
                        to="/playlist"
                        icon={BsPlusSquareFill}
                        title="Create Playlist"
                    />
                    <NavigationItem
                        icon={BiBookHeart}
                        title="Liked Songs"
                        to="/collection/tracks"
                    />
                </>
            </NavigationSubmenu>
        </nav>
    );
};

export default NavigationMenu;
