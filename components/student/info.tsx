import { Flex, Text, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function Info() {
	const [info, setInfo] = useState(undefined)
	useEffect(() => {
		fetch(
			'http://192.168.31.230:3000/students/personal?student_id=301906060104'
		)
			.then((res) => {
				return res.json()
			})
			.then((v) => {
				setInfo(v)
			})
	}, [])
	console.log(info)
	return (
		<Flex w='100%' bg='white' p={12} flexDir='column' borderRadius={8}>
			<Heading size='xl'>个人资料</Heading>
			<SimpleGrid pt={4} columns={2} spacing={4}>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						姓名
					</Text>
					{info ? (
						<Text fontSize='md'>{info.msg[0].student_name}</Text>
					) : (
						<Skeleton w='3rem' h='1rem' />
					)}
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						学号
					</Text>
					{info ? (
						<Text fontSize='md'>{info.msg[0].student_id}</Text>
					) : (
						<Skeleton w='9rem' h='1rem' />
					)}
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						性别
					</Text>
					{info ? (
						<Text fontSize='md'>{info.msg[0].gender}</Text>
					) : (
						<Skeleton w='1rem' h='1rem' />
					)}
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						年龄
					</Text>
					{info ? (
						<Text fontSize='md'>{info.msg[0].age}</Text>
					) : (
						<Skeleton w='1rem' h='1rem' />
					)}
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						生源所在地
					</Text>
					{info ? (
						<Text fontSize='md'>{info.msg[0].home_address}</Text>
					) : (
						<Skeleton w='6rem' h='1rem' />
					)}
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						已修学分总数
					</Text>
					{info ? (
						<Text fontSize='md'>{info.msg[0].credits_get}</Text>
					) : (
						<Skeleton w='2rem' h='1rem' />
					)}
				</Flex>
				<Flex flexDir='column'>
					<Text fontSize='lg' fontWeight='bold'>
						班级编号
					</Text>
					{info ? <Text fontSize='md'>{info.msg[0].class_id}</Text> : <Skeleton w='3rem' h='1rem' />}
				</Flex>
			</SimpleGrid>
		</Flex>
	)
}
