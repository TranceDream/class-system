import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'

export default function Courses({ id }) {
	const [selected, setSelected] = useState([])
	const [unselected, setUnselected] = useState([])
	useEffect(() => {
		fetch('http://192.168.31.230:3000/courses/selected?student_id=' + id)
			.then((res) => {
				return res.json()
			})
			.then((v) => {
				console.log(v)
				setSelected(v.msg)
			})
	}, [])
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
					{selected.map((course) => {
						return (
							<Tr key={course.course_id}>
								<Td>{course.course_id}</Td>
								<Td>{course.course_name}</Td>
								<Td>{course.course_time}</Td>
								<Td>{course.credit}</Td>
								<Td>{course.examination_or_investigation == 0 ? '考试' : '考察'}</Td>
								<Td>
									<Button>退课</Button>
								</Td>
							</Tr>
						)
					})}
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
