
import Main from "../KHSC-components/Layout/Main";
import Home from "../KHSC-components/Pages/Home/Home";
import GoldenJubliIndex from "../KHSC-components/Pages/Home/GoldenJubliIndex";
import ElevenClassNotice from "../KHSC-components/Pages/Home/NoticePage/ElevenClassNotice";
import Admission from "../KHSC-components/Pages/Home/NoticePage/Admission";
import AtAGlance from "../KHSC-components/Pages/About/AtAGlance";
import GoverningBody from "../KHSC-components/Pages/About/GoverningBody";
import Administration from "../KHSC-components/Pages/Administration/Administration";
import Primary from "../KHSC-components/Pages/Academic/Primary";
import Secondary from "../KHSC-components/Pages/Academic/Secondary";
import College from "../KHSC-components/Pages/Academic/College";
import Recruitment from "../KHSC-components/Pages/Recruitment/Recruitment";
import Gallery from "../KHSC-components/Pages/Gallery/Gallery";
import Contact from "../KHSC-components/Pages/Contact/Contact";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', 
        element : <Main/>,
        children: [
            {path:'/' , element: <Home/>},
            {path: 'home' , element: <Home/>},
            {path: 'goldenjubliIndex' , element:<GoldenJubliIndex/>},
            {path:'elevenClassNotice' , element: <ElevenClassNotice/>},
            {path: 'admission', element: <Admission/>},
            {path: 'at-a-glance' , element:<AtAGlance/>},
            {path: 'governing-body', element: <GoverningBody />},
            {path: 'primary', element: <Primary/>},
            {path: 'secondary', element: <Secondary/>},
            {path: 'college', element: <College/>},
            {path: 'administration' , element: <Administration/>},
            {path: 'recruitment', element:<Recruitment/>},
            {path: 'gallery' , element: <Gallery/>},
            {path:'contact' , element: <Contact/>}
        ]
    }
])