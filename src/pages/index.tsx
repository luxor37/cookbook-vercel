import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";


export default function Homepage(props) {

	return (
		<Page>
		</Page>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			locale,
			...await serverSideTranslations(locale, ['common']),
		},
		revalidate: 5
	}
}