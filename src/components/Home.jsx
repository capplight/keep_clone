import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import DeletedNotes from "./delete/DeleteNotes";
import Archives from "./archives/Archives";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />;
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeletedNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
