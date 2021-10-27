import { Divider, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Courses from '../components/student/courses'
import Grade from '../components/student/grade'
import StudentInfo from '../components/student/info'

const studentTabs = [
	{
		title: '个人信息',
		component: <StudentInfo />,
	},
	{
		title: '课程列表',
		component: <Courses />,
	},
	{
		title: '成绩查询',
		component: <Grade />,
	},
]

export default function Home() {
	// const router = useRouter()
	// useEffect(() => {
	// 	router.push('/login')
	// })
	const [tab, setTab] = useState(studentTabs[0])
	return (
		<Flex
			h='100vh'
			minH='100vh'
			flexDir='column'
			bg='#eee'
			overflowY='auto'>
			<Flex
				h={100}
				bgColor='#2d62a3'
				flexDir='row'
				justifyContent='space-between'
				alignItems='center'>
				<Heading size='xl' ml={8} fontWeight='bold' color='white'>
					选课系统
				</Heading>
				<Flex mr={8} py={8} h='100%' alignItems='center'>
					<Text size='md' color='white'>
						学生
					</Text>
					<Divider orientation='vertical' mx={4} />
					<Text size='md' color='white'>
						李德新(3019244358)
					</Text>
					<Link ml={4} color='white' href='/login'>
						退出
					</Link>
				</Flex>
			</Flex>
			<Divider bg='#707070' />
			<Flex pl={4} flexDir='row' bg='#2d62a3'>
				{studentTabs.map((e) => {
					return (
						<Flex
							key={e.title}
							color='white'
							p={4}
							onClick={() => {
								setTab(e)
							}}
							cursor='pointer'
							transition='all 0.25s'
							sx={{ _hover: { bg: '#ffffff44' } }}>
							<Text fontWeight='black'>{e.title}</Text>
						</Flex>
					)
				})}
			</Flex>

			<Flex flex='1' flexDir='column' alignItems='center' p={4}>
				{tab.component}
			</Flex>
			<Flex
				flexDir='column'
				w='100%'
				p={4}
				justifyContent='center'
				alignItems='center'
				bg='#444545'>
				<Text fontSize='sm' color='white'>
					版权所有 © 智能与计算学部2019 李德新 李景彬 王宏伟
				</Text>
			</Flex>
		</Flex>
	)
}
