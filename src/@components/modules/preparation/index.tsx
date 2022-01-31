import client from "lib/sanity";
import { useTranslation } from "next-i18next";
import { translate } from "../../shared/lang";
import Nullable from "../../shared/undefinable"
import BlockContent from '@sanity/block-content-to-react'

export default function Preparation({ instructions }) {
    const { t } = useTranslation('common');
    const list = (props) => {
        return <ol className="list-decimal">{props.children}</ol>
    }
    return (
        <>
            <h3 className="pb-3">
                {t('Preparation')} :
            </h3>
            <div className="flex flex-row ">
                <Nullable obj={instructions}>
                    <BlockContent
                        blocks={translate(instructions)}
                        serializers={{ list: list }}
                        renderContainerOnSingleChild={true}
                        {...client.config()}
                    />
                </Nullable>
            </div>
        </>
    )
}