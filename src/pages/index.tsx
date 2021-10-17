import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { NextSeo } from "next-seo";
import RecipeCard from "@/components/shared/recipe-card";


export default function Homepage(props) {

	return (

		<Page>
		</Page>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			// about: await getAbout(),
			// allEducations: await getEducations(), 
			// allJobs: await getJobs(),
			// locale,
			// ...await serverSideTranslations(locale, ['common']),
		},
		revalidate: 5
	}
}