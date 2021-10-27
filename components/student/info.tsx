import { Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export default function Info() {
	return (
		<Flex w='100%' bg='white' p={12} flexDir='column' borderRadius={8}>
			<Heading size='xl'>个人资料</Heading>
			<SimpleGrid pt={4} columns={2} spacing={4}>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						姓名
					</Text>
					<Text fontSize='md'>李德新</Text>
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						学号
					</Text>
					<Text fontSize='md'>3019244351</Text>
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						性别
					</Text>
					<Text fontSize='md'>男</Text>
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						年龄
					</Text>
					<Text fontSize='md'>24</Text>
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						生源所在地
					</Text>
					<Text fontSize='md'>下北泽</Text>
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						已修学分总数
					</Text>
					<Text fontSize='md' fontWeight='black'>114514</Text>
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						班级编号
					</Text>
					<Text fontSize='md'>1919</Text>
				</Flex>
			</SimpleGrid>
		</Flex>
	)
}
