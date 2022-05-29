import React from 'react'
import { RootState } from '@/store'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './index.store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View className='space-x-2 flex items-center'>
      <AtButton
        type='primary'
        size='small'
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
      >
        Increment
      </AtButton>
      <Text>{count}</Text>
      <AtButton
        type='primary'
        size='small'
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </AtButton>
    </View>
  )
}
