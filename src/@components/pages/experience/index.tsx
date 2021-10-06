import ExperienceSection from "@/components/shared/experience"
import Section from "@/components/shared/section"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from 'lib/sanity'
import { translate } from "@/components/shared/lang"

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export const Experience = ({ jobs }) => {

    const list = (props) => {
        return <ul className=" list-disc">{props.children}</ul>
    }

    return (
        <Section id="experience" className=" bg-experience bg-fixed bg-cover pt-32">
            {jobs.map(({ _id, title, subtitle, job_date, jobtype, description, logo }) => {
                return (
                    <ExperienceSection key={_id} image={urlFor(logo)}
                        jobTitle={translate(title)}
                        subTitle={translate(subtitle)}
                        date={translate(job_date)}
                        type={translate((jobtype[0]).name)}
                    >
                        <BlockContent
                            blocks={translate(description)}
                            serializers={{ list: list }}
                            renderContainerOnSingleChild={true}
                            {...client.config()}
                        />
                    </ExperienceSection>
                )
            }
            )}
        </Section>
    )
}