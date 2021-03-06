import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { useToast } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import cookie from 'cookie-cutter'

export default function Login() {
	const toast = useToast()
	const login = async (id: string, password: string) => {
		const res = await fetch('http://192.168.31.230:3000/login', {
			method: 'POST',
			body: new URLSearchParams({
				id: id,
				password: password,
			}),
		})
		const json = await res.json()
		if (json.msg == 'false' || json.msg == 'none') {
			console.log('用户名或密码错误')
			toast({
				title: '用户名或密码错误',
				duration: 3000,
				status: 'error',
				position: 'top'
			})
		} else {
			cookie.set('id', id)
			cookie.set('type', json.msg)
			router.push('/')
		}
	}
	const [username, setUsername] = useState('')
	const [passwd, setPasswd] = useState('')
	const router = useRouter()
	return (
		<Flex
			flexDir='column'
			w='100%'
			h='100vh'
			backgroundPosition='center'
			backgroundSize='cover'
			backgroundImage='https://sso.tju.edu.cn/cas/local/imgs/logonbg1.jpg'>
			<Flex
				justifyContent='center'
				alignItems='center'
				height='20%'
				backgroundColor='#4b9ced99'>
				<Heading size='2xl' color='white'>
					选课系统
				</Heading>
			</Flex>
			<Flex h='70%' p={12} justifyContent='center' alignItems='center'>
				<Flex
					background='#ffffffee'
					flexDir='column'
					justifyContent='space-evenly'
					h='100%'
					w='33%'
					px={16}
					py={8}
					borderRadius={8}>
					<Heading>登录</Heading>
					<FormControl id='Username'>
						<FormLabel>Username</FormLabel>
						<Input
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
							}}
							placeholder='输入用户名'
						/>
					</FormControl>
					<FormControl id='Password'>
						<FormLabel>Password</FormLabel>
						<Input
							value={passwd}
							onChange={(e) => {
								setPasswd(e.target.value)
							}}
							placeholder='输入密码'
							type='password'
						/>
					</FormControl>
					<Button
						mt={2}
						background='#4b9ced99'
						color='white'
						onClick={() => {
							login(username, passwd)
							// router.push('/')
						}}>
						Submit
					</Button>
				</Flex>
			</Flex>
			<Flex
				h='10%'
				backgroundColor='#4b9ced99'
				justifyContent='center'
				alignItems='center'>
				<Text color='white'>
					版权所有 © 智能与计算学部2019 李德新 李景彬 王宏伟
				</Text>
			</Flex>
		</Flex>
	)
}
