import { useNavigate } from "react-router-dom";
import Home from "@/components/Home";
import Solution from "@/components/Solution";
// Defining the Home component responsible for rendering the home page content
export default function Page() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <Home />
            <Solution />
        </div>
    );
}
