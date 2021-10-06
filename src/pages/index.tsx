import Page from "@/components/shared/page";
import About from "@/components/pages/about";
import { Experience } from "@/components/pages/experience";
import Education from "@/components/pages/education";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { NextSeo } from "next-seo";
import { getAbout, getEducations, getJobs } from 'lib/api'


export default function Homepage(props) {

	return (
		<Page>
			<NextSeo
				title="Portfolio - Remi Martel"
				description="I am a backend developper studying in Software and Computer Engineering at UQAM in Montreal."
				openGraph={{
					url: 'https://www.rmartel.dev',
					title: "Portfolio - Remi Martel",
					description: "I am a backend developper studying in Software and Computer Engineering at UQAM in Montreal.",
					images: [
						{
							url: 'https://www.rmartel.dev/aboutMe.jpg',
							width: 1161,
							height: 769,
							alt: 'AboutSectionBg_WhiteLakeStatePark',
						},
						// {
						// 	url: 'https://www.example.ie/og-image-02.jpg',
						// 	width: 900,
						// 	height: 800,
						// 	alt: 'Og Image Alt Second',
						// },
						// { url: 'https://www.example.ie/og-image-03.jpg' },
						// { url: 'https://www.example.ie/og-image-04.jpg' },
					],
					site_name: 'Portfolio - Remi Martel',
				}}
			/>
			{/* <About about={props.about[0]} />
			<Experience jobs={props.allJobs} />
			<Education educations={props.allEducations} /> */}
		</Page>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: { 
			// about: await getAbout(),
			// allEducations: await getEducations(), 
			// allJobs: await getJobs(),
			locale,
			...await serverSideTranslations(locale, ['common']),
		},
		revalidate: 5
	}
}