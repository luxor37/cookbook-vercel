import RecipeCard from "@/components/shared/recipe-card";
import Row from "@/components/shared/row";
import { useTranslation } from "next-i18next";

export default function RecipeList({ recipes }) {
    if (!recipes || recipes.length == 0) {
        const { t } = useTranslation('common');
        return <h1 className="text-center">{t('No recipes yet')}</h1>
    }
    else {
        return (
            <Row>
                {recipes.map(
                    ({ _id, title, servings, time, tags, picture, source }) => {
                        return (
                            <RecipeCard _id={_id} title={title} time={time} servings={servings}
                                image={picture} tags={tags} key={_id} />
                        )
                    }
                )}
            </Row>
        )
    }
}