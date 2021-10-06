import Section from "@/components/shared/section"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'
import { translate } from "@/components/shared/lang"
import BlockContent from '@sanity/block-content-to-react'

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export default function About({ about }) {

    const list = (props) => {
        return <ul className=" list-disc">{props.children}</ul>
    }

    const link = (props) => {
        return <a className="text-primary" href={props.mark.href} target={props.mark.blank ? "_blank":""}>{props.children}</a>
    }

    return (
        <Section id="about" className="bg-about bg-fixed bg-cover p-5">
            <div className="row mb-5">
                <div className="col-lg-3 col-md-4">
                    <div className="rounded-full border-8 border-solid border-gray-400 box-border md:block hidden">
                    <img className="flex rounded-full height-100" src={urlFor(about.profilePic)+""} />
                    </div>
                </div>
                <div className="col-md-8 md:my-auto mt-20">
                    <div className=" text-7xl">
                        {translate(about.firstName)} <span className="text-primary">{translate(about.lastName)}</span>
                    </div>
                    <div className="left-0 w-max bg-opacity-70 bg-black rounded-lg p-1 text-white">
                        {translate(about.location)} · {about.phoneNumber} · <a className="text-primary" href="mailto:remi.martel.37@gmail.com">{about.email}</a>
                    </div>
                    <div className="social-icons">
                        <a className="text-primary pr-1 text-4xl" href="https://www.linkedin.com/in/remimartel/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="text-primary text-4xl" href="https://github.com/luxor37/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12">
                    <div className="rounded-lg p-10 bg-opacity-70 bg-black text-white">
                        <BlockContent
                            blocks={translate(about.body)}
                            serializers={{ list: list, marks: {link} }}
                            className=" list-disc"
                            renderContainerOnSingleChild={true}
                            {...client.config()}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}