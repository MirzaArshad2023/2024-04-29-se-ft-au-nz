import { Box } from '@mui/material';
import { styled } from '@mui/system';

const styles = {
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: '2em',
    borderRadius: '1em',
    border: '1px solid darkslategray',
    margin: '1em 0'
}
const StyledDiv = styled('div')(styles);

const StyledBox = styled(Box)(styles);

export default function BasicUsage() {
    return (
        <>
            <StyledDiv>This div includes styles</StyledDiv>
            <StyledBox>This box has the same styles</StyledBox>
            {/*<div>Div without styles</div>
            <Box>Box without styles</Box>*/}
        </>
    );
}

// see https://mui.com/system/styled/ for more tips