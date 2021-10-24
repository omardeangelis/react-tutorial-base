import {
  InputWrapper as Input,
  Container,
  Box,
  Button,
  Stack,
} from "./components/styled";

function App() {
  return (
    <div className='App'>
      <Container size='xl'>
        <Stack direction='column' spacing='20px' width='100%'>
          <Input placeholder='input' />
          <Input placeholder='input' />
          <Button variant='text' size='sm'>
            Premimi
          </Button>

          <Box
            height='200px'
            bg='grey.900'
            width='200px'
            borderRadius='20px'
          ></Box>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
