import Header from "../fragments/Header";
import Footer from "../fragments/Footer";

function Mainlayout({children}) {
    return (
        <>
        <Header />
            {children}
        <Footer />
        </>
    );
}

export default Mainlayout;