import { Store } from "../Redux/store";
import { index } from "../Redux/Slice/DetailsIndex";

test("Initial State of the Index", () => {
  let state = Store.getState().i;
  expect(state).toBe(1);
});

test("Update Index by 1", () => {
  let state = Store.getState().i;
  Store.dispatch(index(state + 1));
  state = Store.getState().i;
  expect(state).toBe(2);
});
