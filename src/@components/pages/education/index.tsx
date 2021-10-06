import EducationSection from "@/components/shared/education"
import Section from "@/components/shared/section"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from 'lib/sanity'
import { translate } from "@/components/shared/lang"


function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export default function Education({ educations }) {

    const list = (props) => {
        return <ul className=" list-disc">{props.children}</ul>
    }

    return (
        <Section id="education" className="bg-education bg-fixed bg-cover pt-32">
            {educations.map(
                ({ _id, title, subtitle, graduation_date, description, logo }) => {
                    return (
                        <EducationSection key={_id} image={urlFor(logo)}
                            programTitle={translate(title)}
                            subTitle={translate(subtitle)}
                            date={translate(graduation_date)}
                        >

                            <BlockContent
                                blocks={translate(description)}
                                serializers={{ list: list }}
                                renderContainerOnSingleChild={true}
                                {...client.config()}
                            />
                        </EducationSection>
                    )
                }
            )}
        </Section>
    )
}
