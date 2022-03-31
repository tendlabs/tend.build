import { useState } from 'react'

import {
  Grid,
  MaxWidth,
  Text,
  Section,
  Button
} from './ui'
import ContactFormModal from './ContactFormModal'

const CTA = ({}) => {
  const [ contactModalOpen, setContactModalOpen ] = useState(false)

  return (
    <>
      <Section>
        <MaxWidth>
          <Grid container flexDirection="column" spacing={8}>
            <Grid item>
              <Text title large bold>Lets work together.</Text>
            </Grid>
            <Grid item>
              <Button onClick={() => setContactModalOpen(true)}>
                <Text title regular bold light>Work with us</Text>
              </Button>
            </Grid>
          </Grid>
        </MaxWidth>
      </Section>

      <ContactFormModal
        isOpen={contactModalOpen}
        toggle={() => setContactModalOpen(!contactModalOpen)}
      />
    </>
  )
}

export default CTA
