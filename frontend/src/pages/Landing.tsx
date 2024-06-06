import { useNavigate } from "react-router-dom";

export const Landing = () => {

    const navigate = useNavigate();


    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                    <img src="/chessboard.jpg" alt="Chessboard" className="w-full max-w-md rounded shadow-lg" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Play Chess Online!
                    </h1>
                    <button className="bg-blue-500 font-bold text-2xl hover:bg-blue-700 text-white py-2 px-6 rounded shadow-lg transition duration-300"  onClick={()=>{
                        navigate('/game')
                    }}>
                        Play Online
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Landing;
