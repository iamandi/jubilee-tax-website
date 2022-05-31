import React from 'react';
import { Facebook, Linkedin } from 'react-feather';

export default function NavbarBanner() {
  return (

    <div className='container'>
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
          <div class='btIconWidget  btAccentIconWidget btWidgetWithText'>
            <div class='btIconWidgetIcon'>
              <span
                data-ico-fontawesome=''
                class='bt_bb_icon_holder'
              ></span>
            </div>
            <div class='btIconWidgetContent'>
              <span class='btIconWidgetTitle' style={{ marginRight: '0.5rem' }}>
                Monday - Friday
              </span>
              <span class='btIconWidgetText' style={{ opacity: 0.5 }}>8AM - 5PM</span>
            </div>
          </div>
          <div class='btIconWidget  btWidgetWithText' style={{ marginLeft: '1.5rem' }}>
            <div class='btIconWidgetContent'>
              <span class='btIconWidgetTitle' style={{ marginRight: '0.5rem' }}>
                Saturday - Sunday
              </span>
              <span class='btIconWidgetText' style={{ opacity: 0.5 }}>
                By Appointment Only
              </span>
            </div>
          </div>
          <div class='btIconWidget  btAccentIconWidget btWidgetWithText'>
            <div class='btIconWidgetIcon'>
              <span
                data-ico-fontawesome=''
                class='bt_bb_icon_holder'
              ></span>
            </div>
            <div class='btIconWidgetContent' style={{ marginLeft: '1.5rem' }}>
              <span class='btIconWidgetTitle' style={{ marginRight: '0.5rem' }}>Office</span>
              <span class='btIconWidgetText' style={{ opacity: 0.5 }}>
                330 Franklin Street, Oakland, CA 94607
              </span>
            </div>
          </div>
        </div>

        <div class='topTools btTopToolsRight' style={{
          display: 'flex',
          justifyContent: 'flex-start',
          color: 'white',
          fontSize: '0.87rem',
          lineHeight: 2.5,
        }}>
          <div class='btIconWidget  btWidgetWithText'>
            <div class='btIconWidgetContent'>
              <span class='btIconWidgetTitle'>
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
