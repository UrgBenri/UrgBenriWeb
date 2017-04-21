export default function (configure, callback) {
  const initialState = {sidebar: true}; // Add here you initalStore value
  const store = configure(initialState);
  callback(store);
}
