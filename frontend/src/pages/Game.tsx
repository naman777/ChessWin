import Chessboard from "../components/Chessboard";

export const Game = () => {
    return (<div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg f">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                <div className="col-span-4 bg-red-200 w-full">
                    <Chessboard/>
                </div>
                <div className="col-span-2 bg-green-200">
                    <button className="bg-blue-500 font-bold text-2xl hover:bg-blue-700 text-white py-2 px-6 rounded shadow-lg transition duration-300">
                        Play
                    </button>
                </div>

            </div>
        </div>
    </div>)
}

export default Game;