// Importing the `useNavigate` hook from `react-router-dom` to navigate between routes programmatically
import { useNavigate } from 'react-router-dom';
// Importing the logo image
import logo from '../assets/logo.png';

// Defining the Header component responsible for rendering the header section of the application
export default function Header() {
    // Using the `useNavigate` hook to get the navigate function for routing
    const navigate = useNavigate();

    // Rendering the header section with logo, site name, and navigation links
    return (
        <header className="bg-[#FFFFFF] bg-opacity-5 text-sky-100 py-3 px-6 shadow-lg absolute w-full top-0 z-20 backdrop-blur-lg items-center">
            {/* Div containing header content */}
            <div className="flex justify-between items-center">
                {/* Button with logo and site name */}
                <button className="flex items-center space-x-2"
                    // Navigate to the home page when the button is clicked
                    onClick={() => navigate('/')}
                >
                    {/* Displaying the logo */}
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="h-[60px] ml-10" 
                    />
                    {/* Displaying the site name */}
                </button>
                {/* Navigation links */}
                <nav>
                    {/* Unordered list of navigation links */}
                    <ul className="flex space-x-4 text-[#0A0B0D] items-center gap-8">
                        {/* Navigation link for the Home page */}
                        <li>
                            <button className="hover:text-gray-300"
                                // Navigate to the Home page when the button is clicked
                                onClick={() => navigate('/')}
                            >
                                Solutions
                            </button>
                        </li>
                        {/* Navigation link for the About page */}
                        <li>
                            <button className="hover:text-gray-300"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/about')}
                            >
                                For you
                            </button>
                        </li>
                        {/* Navigation link for the Pdb page */}
                        <li>
                            <button className="hover:text-gray-300"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/pdb')}
                            >
                                Investors
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-300"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/pdb')}
                            >
                                Startups
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-300 border border-2px border-[#0A0B0D] px-5 py-2 text-center justify-center items-center mr-10"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/pdb')}
                            >
                                Open app
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
