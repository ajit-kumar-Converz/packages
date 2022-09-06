import React, { useState } from 'react'

import { ExampleComponent } from 'decode-single-select'
import 'decode-single-select/dist/index.css'
import { Alert, Box, Divider } from '@chakra-ui/react'

const App = () => {
  let dummy1 = {
    title: 'How are you?',
    options: [
      { title: 'Good', id: 1 },
      { title: 'happy', id: 2 },
      { title: 'sad' }
    ],
    id: 1,
    disabled: false,
    random: false,
    required: false,
    type: 1
  }
  const [json] = useState(dummy1)
  const [userRes, setUser] = useState({} as any)

  const getJsonData = (data: any) => {
    setUser(data)
  }

  return (
    <div>
      {JSON.stringify(json)}
      <Divider />
      {JSON.stringify(userRes)}
      <Box>
        <Divider h='10px' orientation='horizontal' />
      </Box>
      <Box p='10px'>
        <Alert>Package</Alert>
        <ExampleComponent json={json} getJsonData={getJsonData} />
      </Box>
    </div>
  )
}

export default App
