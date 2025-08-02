import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";

export const Layout = ({ children }:any) =>{
    return(
        <>
        <Header/>
        { children }
        <Footer/>
        </>
    )
}