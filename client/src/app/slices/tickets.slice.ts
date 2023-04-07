import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/tickets.api";
import { ITicket } from "../../lib/interfaces";

interface IInitialState {
  ticketsList: ITicket[];
  status: "idle" | "loading";
  error: null | string | undefined
}

const initialState:IInitialState = {
  ticketsList: [],
  status: "idle",
  error: null,
};

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async () => {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ticketsSlice = createSlice({
  initialState,
  name: "ticketsSlice",
  reducers: {
    setTickets: (state, action) => {
      state.ticketsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.status = "idle";
      state.ticketsList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.error.message;
    });
  },
});

export default ticketsSlice.reducer;
