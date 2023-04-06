import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col w-96">
        <div className="flex justify-between bg-red-400 text-white p-6 rounded-2xl mb-5">
          <div>
            <p className="text-sm">My balance</p>
            <h4 className="text-2xl font-semibold">$192.48</h4>
          </div>
          <img className="top-6 right-6" src={logo} alt="" />
        </div>
        <div className="h-[420px] bg-white p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">Spending - Last 7 days</h3>
          <div class="h-56 mt-10 mb-5 pb-5 flex flex-wrap-reverse justify-between w-full border-b-2 border-gray-100">
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-24 rounded"></button>
              <span>mon</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-32 rounded"></button>
              <span>tue</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-48 rounded"></button>
              <span>wed</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-16 rounded"></button>
              <span>thu</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-40 rounded"></button>
              <span>fri</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-28 rounded"></button>
              <span>sat</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button class="w-6 bg-red-400 hover:bg-blue-300 focus:bg-blue-300 h-36 rounded"></button>
              <span>sun</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h5 className="text-gray-400">Total this month</h5>
              <h4 className="text-2xl font-semibold">$478.48</h4>
            </div>
            <div className="flex flex-col justify-end">
              <p className="font-semibold text-right">+2.4%</p>
              <h5 className="text-gray-400">from last month</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
