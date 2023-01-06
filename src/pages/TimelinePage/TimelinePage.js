import NavBar from "../../components/Navbar/NavBar";
import Publishing from "./Publishing";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import { BodyContent, TimelineContainer } from "../../assets/style/TimelineStyle.js";

export default function TimelinePage() {
  return (
    <>
      <NavBar/>
      <BodyContent>
        <TimelineContainer>
            <h1>timeline</h1>
            <Publishing />
            <Posts />
        </TimelineContainer>
        <Sidebar />
      </BodyContent>  
    </>
  );
}