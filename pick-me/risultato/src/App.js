import {
  InputWrapper as Input,
  Container,
  Box,
  Button,
  Stack,
} from "./components/styled";
import { ReactComponent as RightIcon } from "./images/right-arrow.svg";

function App() {
  return (
    <div className='App'>
      <Container size='xl'>
        <Stack
          direction='column'
          spacing='40px'
          align='flex-start'
          justify='flex-start'
          width='100%'
        >
          <Input placeholder='input' />
          <Input placeholder='input' />
          <Stack align='center' spacing='20px'>
            <Button variant='contained' size='sm'>
              Premimi
            </Button>
            <Button variant='outlined' size='md'>
              Premimi
            </Button>
            <Button
              variant='contained'
              size='lg'
              rightIcon={<RightIcon />}
              iconColor='white'
            >
              Premimi
            </Button>
            <Button variant='contained' size='xl'>
              Premimi
            </Button>
          </Stack>

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
