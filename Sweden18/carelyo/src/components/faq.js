import React from 'react'
import { Accordion, Group, Text } from '@mantine/core'
import { BsChevronDown } from 'react-icons/bs'
import '../styles/faq.css'


    function AccordionLabel({ label, description }) {
        return (
          <Group noWrap>
            <div className='accordion-label-box'>
              <div>
                <Text className='accordion-label'>{label}</Text>
                <div className='accordion-under-label' />
              </div>
              <div>
                <Text className='accordion-label-desc'>{description}</Text>
              </div>
            </div>
          </Group>
        )
      }
      
const faq = () => {
    const faqDummyData = [
          {
            text: 'We provide best and solid solution for your impressive business. We provide best and solid solution for your impressive business.',
            title: 'How can i purchase this item ?'
            // date: '2022-02-25'
          },
          {
            text: 'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.',
            title: 'Why Unique and creative design ?'
            // date: '2022-02-25'
          },
          {
            text: 'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc',
            title: 'Are you ready to buy this theme?'
            // date: '2022-02-27'
          },
        ]
  return (
    <div>
    {/* <h3 className='faq-heading'>FAQ</h3> */}
    <Accordion iconPosition='right' icon={<BsChevronDown size='40' />}>
      {faqDummyData.length
        ? faqDummyData.map((i, key) => {
            const keyNr = key

            return (
              <Accordion.Item
                key={keyNr}
                label={
                  <AccordionLabel label={i.title} description={i.date} />
                }
              >
                <div className='faq-text'>{i.text}</div>
              </Accordion.Item>
            )
          })
        : ''}
    </Accordion>
  </div>
  )
}

export default faq