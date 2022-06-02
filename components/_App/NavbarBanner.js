import React from 'react';
import { Facebook, Linkedin } from 'react-feather';

export default function NavbarBanner() {
  return (
    <div className='container hide-navbar'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'white',
          fontSize: '0.87rem',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          fontSize: '0.87rem',
          lineHeight: 2.5,
        }}>
          <div className='btIconWidget  btAccentIconWidget btWidgetWithText'>
            <div className='btIconWidgetContent'>
              <span className='btIconWidgetTitle' style={{ marginRight: '0.5rem' }}>
                Monday - Friday
              </span>
              <span className='btIconWidgetText' style={{ opacity: 0.5 }}>8AM - 5PM</span>
            </div>
          </div>
          <div className='btIconWidget  btWidgetWithText' style={{ marginLeft: '1.5rem' }}>
            <div className='btIconWidgetContent'>
              <span className='btIconWidgetTitle' style={{ marginRight: '0.5rem' }}>
                Saturday - Sunday
              </span>
              <span className='btIconWidgetText' style={{ opacity: 0.5 }}>
                By Appointment Only
              </span>
            </div>
          </div>
          <div className='btIconWidget  btAccentIconWidget btWidgetWithText'>
            <div className='btIconWidgetContent' style={{ marginLeft: '1.5rem' }}>
              <span className='btIconWidgetTitle' style={{ marginRight: '0.5rem' }}>Office</span>
              <span className='btIconWidgetText' style={{ opacity: 0.5 }}>
                330 Franklin Street, Oakland, CA 94607
              </span>
            </div>
          </div>
        </div>

        <div className='topTools btTopToolsRight' style={{
          display: 'flex',
          justifyContent: 'flex-start',
          color: 'white',
          fontSize: '0.87rem',
          lineHeight: 2.5,
        }}>
          <div className='btIconWidget  btWidgetWithText'>
            <div className='btIconWidgetContent'>
              <span className='btIconWidgetTitle'>
                Visit our social pages
              </span>
            </div>
          </div>
          <a style={{ marginLeft: '1rem', color: 'white' }} className="facebook" href="https://www.facebook.com/JubileeFinancial1/" target="_blank" rel="noopener noreferrer" >
            <Facebook size="0.87rem" />
          </a>
          <a style={{ marginLeft: '1rem', color: 'white' }} className="linkedin" href="https://www.linkedin.com/company/jubilee-financial-&-business-solutions/" target="_blank" rel="noopener noreferrer" >
            <Linkedin size="0.87rem" />
          </a>
        </div>
      </div>
    </div>
  )
}
