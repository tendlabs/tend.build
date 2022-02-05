import { useState } from 'react'
import styled from 'styled-components'
import { LayoutGroup, AnimatePresence, motion } from 'framer-motion'

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
  padding: ${({ theme }) => theme.util.buffer * 4}px 0 0 0;
  height: 100%;
  overflow: auto;
`;
const StyledIconWrapper = styled.div`
  transform: ${(props) => props.rotate ? `rotate(45deg)` : `rotate(0deg)`};
  transition: ${({ theme }) => theme.util.transition};
`;

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledQuestion
      layout
      onClick={() => setIsOpen(!isOpen)}
      transition={{duration: .15}}
    >
      <motion.div layout>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Text body large bold>{question}</Text>
          </Grid>
          <Grid item>
            <StyledIconWrapper rotate={isOpen}>
              <Icon type="plus" dark/>
            </StyledIconWrapper>
          </Grid>
        </Grid>
      </motion.div>

      {isOpen ?

        <StyledAnswer>
          <motion.div
            layout
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .15, delay: .15}}
          >
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Text body regular>{answer}</Text>
              </Grid>
            </Grid>
          </motion.div>
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
            <motion.div layout>
              <Text title large bold>Common questions</Text>
            </motion.div>
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

