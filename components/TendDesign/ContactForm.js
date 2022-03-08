import { useState } from 'react'
import styled from "styled-components"
import axios from "axios"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from 'framer-motion'

import {
  Grid,
  Text,
  Button,
  Container
} from './ui'

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral.dark};
  border-radius: ${({ theme }) => theme.util.radius.small}px;
  background: ${({ theme }) => theme.color.neutral.white};
  padding: ${({ theme }) => theme.util.buffer * 4}px;
  outline: none;
  transition: ${({ theme }) => theme.util.transition};
  font-size: ${({ theme }) => theme.text.size.body.large}px;
  line-height: 0;
  font-family: ${({ theme }) => theme.text.family};
  -webkit-appearance: none;
  &:-webkit-autofill { //fix for yellow bg color on autofill
    box-shadow: inset 0 0 0px 9999px white;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.opacity.dark24};
  }
  &:focus {
    background: ${({ theme }) => theme.color.neutral.white};
    border: 1px solid ${({ theme }) => theme.color.text.lightened};
    transition: ${({ theme }) => theme.util.transition};
  }
`;

const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm()
  const onSubmit = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: "https://getform.io/f/21712a50-a7a0-43a2-a6f6-569dda5db246",
        data: data
      })
    } catch(err) {
      console.log("caught error", err)
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>

          {isSubmitSuccessful ?

            <AnimatePresence>
              <motion.div
                layout
                style={{width: '100%'}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: .15, delay: .15}}
              >
                <Container>
                  <Grid container alignItems="center" justifyContent="center" spacing={4}>
                    <Grid item>
                      <Text title large bold>Thanks for reaching out</Text>
                    </Grid>
                    <Grid item>
                      <Text body large lightened>We're excited to talk about your project!</Text>
                    </Grid>
                  </Grid>
                </Container>
              </motion.div>
            </AnimatePresence>

          :

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <motion.div style={{width: '100%'}} layout>
                    <StyledInput placeholder="Full name" {...register("FullName", { required: true })} />
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div style={{width: '100%'}} layout>
                    <StyledInput placeholder="Email" {...register("Email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                  </motion.div>
                </Grid>

                {errors.Email || errors.FullName ?
                  <Grid item xs={12}>
                    <Grid container flexDirection="column">
                      <Grid item>
                        <motion.span
                          layout
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}
                          transition={{duration: .15, delay: .15}}
                        >
                          {errors.Email && <Text body small bold lightened>Please enter a valid email.</Text>}
                        </motion.span>
                      </Grid>
                      <Grid item>
                        <motion.span
                          layout
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}
                          transition={{duration: .15, delay: .15}}
                        >
                          {errors.FullName && <Text body small bold lightened>Both fields are required.</Text>}
                        </motion.span>
                      </Grid>
                    </Grid>
                  </Grid>
                : null}

                <Grid item xs={12}>
                  <motion.div style={{width: '100%'}} layout>
                    <Button type="submit" full disabled={isSubmitting}>
                      <Text body large bold light>Submit</Text>
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </form>

          }

      </Grid>
    </Grid>
  )
}

export default ContactForm
