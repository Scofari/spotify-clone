import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
    selectCurrentPlaylist,
    selectHeaderBackground,
} from "../../redux/selectors";
import Header from "../Header";
import Player from "../Player";
import Sidebar from "../Sidebar";
import styles from "./Layout.module.css";

const step = 1 / 300;

const Layout = () => {
    const currentPlaylist = useSelector(selectCurrentPlaylist);
    const headerBackground = useSelector(selectHeaderBackground);

    const [headerBg, setHeaderBg] = useState(headerBackground + "00");
    const [playIsVisible, setPlayIsVisible] = useState(false);

    const mainSectionRef = useRef<HTMLElement>(null);

    const handleScroll = (e: any) => {
        const currentScrollPosition = e.target.scrollTop - 200;
        if (currentScrollPosition < 0) {
            setHeaderBg(headerBackground + "00");
        }
        if (currentScrollPosition > 300) {
            setHeaderBg(headerBackground + "ff");
            setPlayIsVisible(true);
        } else {
            setPlayIsVisible(false);
        }
        if (currentScrollPosition < 0 || currentScrollPosition > 300) {
            return;
        }
        const opacityValue = step * currentScrollPosition;
        const opacityHex = Math.floor(opacityValue * 255).toString(16);
        setHeaderBg(headerBackground + opacityHex);
    };

    useEffect(() => {
        if (mainSectionRef.current) {
            mainSectionRef.current.addEventListener("scroll", handleScroll);

            return () => {
                if (mainSectionRef.current) {
                    mainSectionRef.current.removeEventListener(
                        "scroll",
                        handleScroll
                    );
                }
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headerBackground]);

    return (
        <>
            <Sidebar />
            <Header headerBackground={headerBg} playIsVisible={playIsVisible} />
            <section ref={mainSectionRef} className={styles.mainSection}>
                {<Outlet />}
            </section>
            <Player currentPlaylist={currentPlaylist} />
        </>
    );
};

export default Layout;
