import { useNavigate } from "react-router-dom";
import Home from "@/components/Home";
// Defining the Home component responsible for rendering the home page content
export default function Page() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
        <Home />
        </div>
    );
}
