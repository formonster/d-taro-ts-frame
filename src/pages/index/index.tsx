import React from 'react'
import { View, Text } from '@tarojs/components'
import Counter from '@/features/counter'
import './index.less'

export default function Index() {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Counter />
    </View>
  )
}
