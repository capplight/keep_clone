import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

//start of styled components
const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;
//end of styled components

//function for an empty page
const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Здесь будут ваши заметки</Text>
    </Container>
  );
};

export default EmptyNotes;
