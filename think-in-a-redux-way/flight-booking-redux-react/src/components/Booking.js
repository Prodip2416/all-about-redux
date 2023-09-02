import React, { useState } from "react";
import bookingIcon from "../img/icons/Frame.svg";
import to from "../img/icons/Vector (1).svg";
import classIcon from "../img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/booking/actions";

const Booking = () => {
  const state = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const [booking, setBooking] = useState({
    id: 0,
    destinationFrom: "",
    destinationTo: "",
    JourneyDate: "",
    guest: "",
    class: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (state.length >= 3) {
      alert("already booked 3 times");
      return;
    }
    const newBooking = { ...booking, id: state.length + 1 };
    dispatch(addBooking(newBooking));
  };
  console.log(booking);
  return (
    <div class="mt-[160px] mx-4 md:mt-[160px] relative">
      <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form class="first-hero lws-inputform">
          <div class="des-from">
            <p>Destination From</p>
            <div class="flex flex-row">
              <img src={bookingIcon} alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                onChange={(e) =>
                  setBooking({ ...booking, destinationFrom: e.target.value })
                }
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div class="des-from">
            <p>Destination To</p>
            <div class="flex flex-row">
              <img src={bookingIcon} alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                onChange={(e) =>
                  setBooking({ ...booking, destinationTo: e.target.value })
                }
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div class="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              class="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onChange={(e) =>
                setBooking({ ...booking, JourneyDate: e.target.value })
              }
            />
          </div>

          <div class="des-from">
            <p>Guests</p>
            <div class="flex flex-row">
              <img src={to} alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onChange={(e) =>
                  setBooking({ ...booking, guest: e.target.value })
                }
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div class="des-from !border-r-0">
            <p>Class</p>
            <div class="flex flex-row">
              <img src={classIcon} alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
                onChange={(e) =>
                  setBooking({ ...booking, class: e.target.value })
                }
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            class="addCity"
            type="submit"
            id="lws-addCity"
            onClick={handleClick}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span class="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
