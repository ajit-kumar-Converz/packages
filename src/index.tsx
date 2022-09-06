import * as React from 'react'
import styles from './styles.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SingleChoice } from './components/SingleChoice/SIngleChoice'

interface Props {
  json?: any
  getJsonData?: any
}

export const ExampleComponent = ({ json, getJsonData }: Props) => {
  return (
    <ChakraProvider>
      <div className={styles.test}>
        {/* to write switch case for the types */}
        <SingleChoice json={json} getJsonData={getJsonData}></SingleChoice>
      </div>
    </ChakraProvider>
  )
}
