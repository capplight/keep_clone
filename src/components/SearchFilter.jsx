import { useState, useContext } from "react";
import styled from "styled-components";
import { Box, TextField, ClickAwayListener } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

//start of styled components
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  margin-left: 50px;
  width: 800px;
  min-height: 30px;
  padding: 10px 15px;
`;

const SearchBoxWrapper = styled.div`
  position: relative;
  height: 48px;
  min-width: 248px;
  background: #f5f5f5;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) =>
    props.isShown === undefined ? 0.5 : props.isShown ? 0.5 : 0};
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;

const SearchIconLog = styled(SearchIcon)`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: black;
`;
const CloseIconLog = styled(CloseIcon)`
  position: relative;
  margin-left: 470px;
  cursor: pointer;
  color: black;
  opacity: ${(props) =>
    props.isShown === undefined ? 0.5 : props.isShown ? 0.5 : 0};
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;
//end of styled components

//Search function, no functionality developed, simple frame
const SearchFilter = () => {
  return (
    <ClickAwayListener>
      <Container>
        <SearchBoxWrapper>
          <IconWrapper>
            <SearchIconLog />
          </IconWrapper>
          <TextField
            placeholder="Поиск"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            name="text"
          />
          <CloseIconLog />
        </SearchBoxWrapper>
      </Container>
    </ClickAwayListener>
  );
};

export default SearchFilter;
