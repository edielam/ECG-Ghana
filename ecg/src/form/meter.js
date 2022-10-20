import {Stack, TextField} from '@mui/material'

function Meter() {
    return (
        <div>
            <Stack spacing={2} mt={1}>
                <TextField label="Brand" name="brand" 
                autoFocus variant='filled' />
                <TextField label="Model" name="model" 
                variant="filled" />
                <TextField label="Color" name="color" 
                variant="filled" />
                <TextField label="Register Number" name="registerNumber" 
                variant="filled"/>
                <TextField label="Year" name="years" 
                variant="filled" />
                <TextField label="Price" name="price" 
                variant="filled" />
            </Stack>
        </div>
    )
}

export default Meter;