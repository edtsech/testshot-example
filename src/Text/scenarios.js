import React from 'react'
import {context, scenario} from '@toptal/testshot'
import Text from '.'

context('Text', () => {
  scenario('Default', () => (
    <Text>Text</Text>
  ))

  scenario('Purple', () => (
    <Text color='purple'>Purple text</Text>
  ))
})
