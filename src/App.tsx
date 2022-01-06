import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />

        {/*{Object.keys(curUser).length !== 0 && (*/}
        {/*    <Route element={<Layout />}>*/}
        {/*      <Route path="Home" element={<Posts />} />*/}
        {/*      <Route path="Bookmarks" element={<BookmarkPosts />} />*/}
        {/*      <Route path="Subscribes" element={<Subscribes />} />*/}
        {/*      <Route path="Profile" element={<Profile />} />*/}
        {/*    </Route>*/}
        {/*)}*/}
      </Routes>
    </div>
  );
}

export default App;

// function Layout() {
//   return <Home />;
// }
