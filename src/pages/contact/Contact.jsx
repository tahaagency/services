import React from 'react'
import './Style.css'
import ContactCards from './contactCards/ContactCards'
import { MdEmail } from 'react-icons/md'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'

const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_container_align">
        <div className="contact_heading">
          <h1>Contact our friendly team</h1>
          <span>Let us know how we can help.</span>
        </div>
        <div className="contact_cards">
          <ContactCards
          icon={<MdEmail />} 
          to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCpKscBTLRLdWhFpXQjzPhgwbtwkBRqlzHNBBDrMckzpNgMnrSSGNNMLvnxjhTfjWtWvrT'
          heading='Chat to sales'
          param='Speak to our friendly team.'
          email='devfreelancer51@gmail.com'
          />
          <ContactCards
          icon={<IoChatbubblesOutline />}
          to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDZBVXKpwZdJMVJMQTfcJrXxRSHWpFWtJMmMftqNlKLHBrHZgnJVVDxnTwBgbMSSlpckBrP'
          heading='Chat to support'
          param='We`re here to help'
          email='alet8319@gmail.com'
          />
          <ContactCards 
          icon={<LuMapPin />} 
          to='https://maps.app.goo.gl/kc1t2JX2Vkomwc6Z9'
          heading='Visit us'
          param='Visit our office DC.'
          email='View on Google Maps'
          />
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact
