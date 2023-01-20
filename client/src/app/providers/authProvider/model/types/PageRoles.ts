import { NextPage } from 'next'
import { ReactNode } from 'react'

export type PageRoles = {
	isOnlyForAdmin?: boolean
	isOnlyForUser?: boolean
}

export type NextPageWithRoles<P = {}> = NextPage<P> & PageRoles

export type ComponentAuthFields = { Component: PageRoles; children: ReactNode }
