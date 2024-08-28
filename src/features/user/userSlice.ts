import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAddress, type Position } from "../../servers/apiGeocoding";

type GeolocationPosition = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function fetchAddress(): Promise<{
    position: Position;
    address: string;
  }> {
    // Get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // Then use a reverse geocoding API to get a description of the user's address, so can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // payload of fullfilled state
    return { position, address };
  },
);

type initialStateType = {
  username: string;
  status: "idle" | "loading" | "error";
  position: Position | null;
  address: string;
  error: string | undefined;
};

const initialState: initialStateType = {
  username: "",
  status: "idle",
  position: null,
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error = "Fail to get your location :(";
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
