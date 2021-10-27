import { Flex, Heading, Select } from '@chakra-ui/react'
import React from 'react'

export default function Grade() {
	return (
		<Flex w='100%' bg='white' p={12} flexDir='column' borderRadius={8}>
			<Heading size='xl' mb={4}>
				成绩查询
			</Heading>
            <Select variant='filled' placeholder='选择学年'>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
            </Select>
		</Flex>
	)
}
