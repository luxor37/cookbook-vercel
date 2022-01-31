import { useTranslation } from "next-i18next";
import Lang from "../../shared/lang";

export default function Ingredients({ ingredients }) {
    const { t } = useTranslation('common');

    if (!ingredients) {
        return <></>
    }
    else {
        return (
            <>
                <h3 className="pb-3">
                    {t('Ingredients')} :
                </h3><div className="flex flex-row ">
                    <table>
                        <tbody>
                            {ingredients.map(
                                ({ name, quantity, unit }) => {
                                    const bullet = quantity == " " || !quantity ? " " : " :"
                                    return (
                                        <tr key={name.en} className="pb-3">
                                            <td className=" text-right pr-3">
                                                <Lang>{name}</Lang>{bullet}
                                            </td>
                                            <td>
                                                {quantity} <Lang>{unit.name}</Lang>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}