import { Divider, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Courses from '../components/student/courses'
import Grade from '../components/student/grade'
import StudentInfo from '../components/student/info'
import cookie from 'cookie-cutter'

export default function Home() {
	const [id, setId] = useState(undefined)
	const [type, setType] = useState('student')
	const [tabs, setTabs] = useState([{ title: '', component: <Flex /> }])
	const [currentTab, setCurrentTab] = useState(tabs[0])
	const router = useRouter()

	useEffect(() => {
		if (cookie.get('id') != 'undefined') {
			setId(cookie.get('id'))
			if (cookie.get('type') == 'student') {
				const studentTabs = [
					{
						title: '个人信息',
						component: <StudentInfo id={cookie.get('id')} />,
					},
					{
						title: '课程列表',
						component: <Courses id={cookie.get('id')} />,
					},
					{
						title: '成绩查询',
						component: <Grade />,
					},
				]
				setTabs(studentTabs)
				setCurrentTab(studentTabs[0])
			}
		} else {
			router.push('/login')
		}
	}, [])

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
						{type}
					</Text>
					<Divider orientation='vertical' mx={4} />
					<Text size='md' color='white'>
						{id}
					</Text>
					<Link
						ml={4}
						color='white'
						onClick={() => {
							cookie.set('id', undefined)
							router.push('/login')
						}}>
						退出
					</Link>
				</Flex>
			</Flex>
			<Divider bg='#707070' />
			<Flex pl={4} flexDir='row' bg='#2d62a3'>
				{tabs.map((e) => {
					return (
						<Flex
							key={e.title}
							color='white'
							p={4}
							onClick={() => {
								setCurrentTab(e)
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
				{currentTab.component}
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
