import { Outlet } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";

function MainLayout() {
    return (

         <div className="d-flex flex-column min-vh-100">
            <MyNavbar />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <MyFooter />
        </div>
    )

}

export default MainLayout