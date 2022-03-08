import styled from 'styled-components'

import {
  Modal,
  Grid,
  Text
} from './ui'
import ContactForm from './ContactForm'

const ContactFormModal = ({ isOpen, toggle }) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      title="Work with us"
    >
      <ContactForm />
    </Modal>
  )
}

export default ContactFormModal
