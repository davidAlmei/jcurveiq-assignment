import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  // simulate API delay
  await new Promise((r) => setTimeout(r, 1200));

  // toggle this to test error state
  const simulateError = false;

  if (simulateError) {
    throw new Error("Simulated fetch error");
  }

  const res = await fetch(`${import.meta.env.BASE_URL}mock/projects.json`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});


const projectsSlice = createSlice({
  name: "projects",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
