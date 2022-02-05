import { useState } from 'react'
import styled from 'styled-components'
import { LayoutGroup, motion } from 'framer-motion'

import {
  Grid,
  Text,
  Section,
  MaxWidth,
  Icon
} from './ui'

const StyledQuestion = styled(motion.div)`
  padding: ${({ theme }) => theme.util.buffer * 6}px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.lightened};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const StyledAnswer = styled.div`
  padding: ${({ theme }) => theme.util.buffer * 2}px 0;
  height: 100%;
`;

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledQuestion
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Text body large bold>{question}</Text>
          </Grid>
          <Grid item>
            <Icon type="plus" dark/>
          </Grid>
        </Grid>
      </motion.div>

      {isOpen ?
        <StyledAnswer>
          <Text body regular lightened>{answer}</Text>
        </StyledAnswer>
      : null}

    </StyledQuestion>
  )
}

const FAQ = ({ questions }) => {
  return (
    <Section noPadding>
      <MaxWidth>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Text title large bold>Common questions</Text>
          </Grid>
          <Grid item xs={12}>
            <LayoutGroup>
              {questions.map((q, i) =>
                <Question
                  key={i}
                  question={q.question}
                  answer={q.answer}
                />
              )}
            </LayoutGroup>
          </Grid>
        </Grid>
      </MaxWidth>
    </Section>
  )
}

export default FAQ

