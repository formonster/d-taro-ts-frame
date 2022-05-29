import React from 'react'
import { RootState } from '@/store'
import { View, Text, Button } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './index.store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View className='space-x-2 flex items-center'>
      <Button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Text>{count}</Text>
      <Button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </View>
  )
}
