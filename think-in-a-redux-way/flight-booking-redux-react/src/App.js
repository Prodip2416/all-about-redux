import "./App.css";
import BookingTable from "./components/BookingTable";
import Booking from "./components/Booking";
import Header from "./components/layout/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Booking />
        <div class="table-container">
          <BookingTable />
        </div>
      </section>
    </Provider>
  );
}

export default App;
