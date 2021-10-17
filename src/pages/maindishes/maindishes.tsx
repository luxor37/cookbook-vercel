import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { NextSeo } from "next-seo";
// import { getDishes } from 'lib/api'


export default function Dishes(props) {

	return (

		<Page>
			{props.dishes.map(
                ({ _id, title, subtitle, graduation_date, description, logo }) => {
                    return (
                        // <EducationSection key={_id} image={urlFor(logo)}
                        //     programTitle={translate(title)}
                        //     subTitle={translate(subtitle)}
                        //     date={translate(graduation_date)}
                        // >

                        //     <BlockContent
                        //         blocks={translate(description)}
                        //         serializers={{ list: list }}
                        //         renderContainerOnSingleChild={true}
                        //         {...client.config()}
                        //     />
                        // </EducationSection>
						<>
						</>
                    )
                }
            )}
		</Page>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			// dishes: await getDishes(),
			// locale,
			// ...await serverSideTranslations(locale, ['common']),
		},
		revalidate: 5
	}
}