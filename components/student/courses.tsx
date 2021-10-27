import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React from 'react'

export default function Courses() {
	return (
		<Flex w='100%' bg='white' p={12} flexDir='column' borderRadius={8}>
			<Heading size='xl' mb={4}>
				课程列表
			</Heading>
			<Text fontSize='xl' fontWeight='bold'>
				已选课程
			</Text>
			<Table mt={4} variant='simple' size='lg'>
				<Thead>
					<Tr>
						<Th>课程编号</Th>
						<Th>课程名称</Th>
						<Th>学时</Th>
						<Th>学分</Th>
						<Th>考察方式</Th>
						<Th>操作</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>No.114514</Td>
						<Td>课程名称</Td>
						<Td>114514</Td>
						<Td>1919</Td>
						<Td>雷普</Td>
						<Td>
							<Button>退课</Button>
						</Td>
					</Tr>
				</Tbody>
			</Table>
			<Text fontSize='xl' fontWeight='bold' mt={4}>
				未选课程
			</Text>
			<Table mt={4} variant='simple' size='lg'>
				<Thead>
					<Tr>
						<Th>课程编号</Th>
						<Th>课程名称</Th>
						<Th>学时</Th>
						<Th>学分</Th>
						<Th>考察方式</Th>
						<Th>操作</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>No.114514</Td>
						<Td>课程名称</Td>
						<Td>114514</Td>
						<Td>1919</Td>
						<Td>雷普</Td>
						<Td>
							<Button>选课</Button>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</Flex>
	)
}
